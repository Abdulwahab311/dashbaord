import React from 'react';

const SmoothLineChart = ({
	data = [],
	splitAt = 0.7, // fraction (0..1) where the future segment starts
	pastColor = '#22c55e',
	futureColor = '#e5e7ff'
}) => {
	const width = 800;
	const height = 300;
	const paddingLeft = 40;
	const paddingBottom = 20;

	const safeData = Array.isArray(data) && data.length > 1 ? data : [0, 0];
	const maxVal = Math.max(...safeData);
	const minVal = Math.min(...safeData);
	const valueRange = maxVal - minVal || 1;
	const stepX = (width - paddingLeft) / (safeData.length - 1);

	const points = safeData.map((v, i) => {
		const x = paddingLeft + i * stepX;
		const normalized = (v - minVal) / valueRange;
		const y = height - paddingBottom - normalized * (height - 2 * paddingBottom);
		return { x, y };
	});

	const createPath = (pts) => {
		if (pts.length === 0) return '';
		let path = `M ${pts[0].x} ${pts[0].y}`;
		for (let i = 1; i < pts.length; i++) {
			const prevPoint = pts[i - 1];
			const currentPoint = pts[i];
			const controlX = (prevPoint.x + currentPoint.x) / 2;
			const controlY = (prevPoint.y + currentPoint.y) / 2;
			path += ` Q ${controlX} ${controlY} ${currentPoint.x} ${currentPoint.y}`;
		}
		return path;
	};

	const clampedSplit = Math.max(0, Math.min(1, splitAt));
	const currentPointIndex = Math.floor(points.length * clampedSplit);
	const currentPoint = points[currentPointIndex] || { x: 0, y: 0 };

	// Split path into past (green) and future (white) segments
	const pastPoints = points.slice(0, currentPointIndex + 1);
	const futurePoints = points.slice(currentPointIndex);
	const pastPath = createPath(pastPoints);
	const futurePath = createPath(futurePoints);

	return (
		<svg
			viewBox="0 0 800 300"
			className="w-full h-full"
			style={{ overflow: 'visible' }}
		>
			<defs>
				<filter id="softGlow">
					<feGaussianBlur stdDeviation="12" result="blur" />
					<feMerge>
						<feMergeNode in="blur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{/* Axes */}
			<line x1="40" y1="0" x2="40" y2="300" stroke="rgb(71, 85, 105)" strokeWidth="2" />
			<line x1="40" y1="280" x2="800" y2="280" stroke="rgb(100, 116, 139)" strokeWidth="2" opacity="0.7" />

			{/* Past (green) segment */}
			<path
				d={pastPath}
				fill="none"
				stroke={pastColor}
				strokeWidth="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Future (white) segment */}
			<path
				d={futurePath}
				fill="none"
				stroke={futureColor}
				strokeWidth="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* Focus point with glow */}
			<circle
				cx={currentPoint.x}
				cy={currentPoint.y}
				r="22"
				fill="#7c3aed"
				filter="url(#softGlow)"
				opacity="0.25"
			/>
			<circle cx={currentPoint.x} cy={currentPoint.y} r="9" stroke="#7c3aed" strokeWidth="6" fill="none" />
			<circle cx={currentPoint.x} cy={currentPoint.y} r="7" fill="#0b0f24" />
		</svg>
	);
};

const HealthcareGauge = ({ currentValue = 3.55, maxValue = 8 }) => {
  const percentage = (currentValue / maxValue) * 100;
  const radius = 90;
  const strokeWidth = 16;
  const circumference = Math.PI * radius;
  const progressOffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="relative flex justify-center w-full">
      <svg
        viewBox="0 0 240 120"
        className="w-full h-auto max-w-xs" // ✅ responsive: scales with parent
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        {/* Background arc */}
        <path
          d={`M 30 100 A ${radius} ${radius} 0 0 1 210 100`}
          fill="none"
          stroke="rgb(100, 116, 139)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <path
          d={`M 30 100 A ${radius} ${radius} 0 0 1 210 100`}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
        />
      </svg>

      {/* Labels */}
      <div className="absolute inset-x-0 top-12 flex flex-col items-center">
        <div className="text-green-400 font-bold [font-size:clamp(14px,2vw,24px)]">
          €{currentValue}M
        </div>
        <div className="text-gray-400 text-sm md:text-base">€{maxValue}M</div>
      </div>
    </div>
  );
};

const Cards = () => {
	const chartCards = [
		{
			title: 'Calls',
			badge: '+25%',
			value: '1923',
			data: [15, 28, 35, 31, 36, 40, 38, 45, 42, 48, 44, 50, 47]
		},
		{
			title: 'Active',
			badge: '+25%',
			value: '98',
			data: [15, 18, 16, 20, 22, 21, 25, 24, 26, 30],
			color: '#22D3EE'
		},
		{
			title: 'Proposal',
			badge: '+25%',
			value: '2',
			data: [5, 8, 6, 10, 12, 11, 14, 13, 15, 18, 16],
			color: '#9333EA'
		}
	];

	const proposalSecondRow = {
		title: 'Proposal',
		badge: '+25%',
		value: '2',
		data: [5, 8, 9, 11, 10, 13, 12, 15],
		color: '#F04245'
	};

	return (
		<div className="bg-slate-900 p-6">
			<div className="grid grid-cols-5 gap-6">
				{/* Healthcare Deals Card (Gauge) */}
				<div className="bg-[#090D28] rounded-lg p-2 border-2 border-green-500">
					<div className="text-white text-sm mb-2">
						<div className="font-medium">Healthcare Deals WON, Now vs goal</div>
						<div className="text-gray-400 text-xs">This Month</div>
					</div>
					<div className="mt-2">
						<HealthcareGauge currentValue={3.55} maxValue={8} />
					</div>
				</div>

				{/* Chart Cards */}
				{chartCards.map((card, idx) => (
					<div key={idx} className="bg-[#090D28] rounded-lg p-2">
						<div className="flex items-center justify-between mb-4">
							<div className="text-white text-lg font-medium">{card.title}</div>
							<div className="rounded-full px-3 py-1" style={{ backgroundColor: '#7C7AA1AD', color: '#23ED30' }}>{card.badge}</div>
						</div>
						<div className="text-white text-4xl font-bold mb-4 text-center mt-10">{card.value}</div>
					<div className="h-20">
						<SmoothLineChart data={card.data} pastColor={card.color || undefined} />
					</div>
					</div>
				))}

				{/* Last Proposal Card moved into the same grid */}
				<div className="bg-[#090D28] rounded-lg p-2">
					<div className="flex items-center justify-between mb-4">
						<div className="text-white text-lg font-medium">{proposalSecondRow.title}</div>
						<div className="rounded-full px-3 py-1" style={{ backgroundColor: '#7C7AA1AD', color: '#23ED30' }}>{proposalSecondRow.badge}</div>
					</div>
					<div className="text-white text-4xl font-bold mb-4 text-center mt-10">{proposalSecondRow.value}</div>
					<div className="h-20">
						<SmoothLineChart data={proposalSecondRow.data} pastColor={proposalSecondRow.color} />
					</div>
				</div>
			</div>
			
			{/* Second Row removed */}
		</div>
	);
};

export default Cards;