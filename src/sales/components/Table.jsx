import React from 'react';

const StatusDot = ({ color = '#FFFFFF' }) => (
	<span
		className="inline-block mr-3 align-middle"
		style={{ width: 8, height: 8, borderRadius: 9999, backgroundColor: color }}
	/>
);

const Pill = ({ text, color = '#16A34A', bg = 'rgba(22,163,74,0.15)' }) => (
	<span
		className="px-3 py-1 rounded-full text-[12px] font-semibold"
		style={{ color, backgroundColor: bg }}
	>
		{text}
	</span>
);

const HeaderCell = ({ children, className = '' }) => (
	<div className={`px-4 py-3 text-sm text-gray-300 tracking-wider ${className}`}>{children}</div>
);

const RowCell = ({ children, className = '' }) => (
	<div className={`px-4 py-4 text-sm text-gray-200 ${className}`}>{children}</div>
);

const Row = ({ name, nameColor, calls, deals, winRate, occupancy, amount, pillColor, pillBg }) => (
	<div className="grid grid-cols-13 items-center border-t border-white/10">
		<RowCell className="col-span-3 flex items-center">
			<StatusDot color={nameColor} />
			<span>{name}</span>
		</RowCell>
		<RowCell className="col-span-2">{calls}</RowCell>
		<RowCell className="col-span-2">
			<Pill text={`${deals}%`} color={pillColor} bg={pillBg} />
		</RowCell>
		<RowCell className="col-span-2">
			<Pill text={`${winRate}%`} color={pillColor} bg={pillBg} />
		</RowCell>
		<RowCell className="col-span-2">
			<Pill text={`${occupancy}%`} color={pillColor} bg={pillBg} />
		</RowCell>
		<RowCell className="col-span-1">
			<Pill text={`${amount}`} color={pillColor} bg={pillBg} />
		</RowCell>
	</div>
);

const Table = () => {
	const rows = [
		{ name: 'SAMUEL', nameColor: '#F04245', calls: 458, deals: 90, winRate: 94, occupancy: 94, amount: '457k' },
		{ name: 'Tom', nameColor: '#9CA3AF', calls: 458, deals: 90, winRate: 94, occupancy: 94, amount: '457k' },
		{ name: 'Abdul', nameColor: '#F59E0B', calls: 458, deals: 90, winRate: 94, occupancy: 94, amount: '457k' },
		{ name: 'Name', nameColor: '#6B7280', calls: '', deals: 90, winRate: 94, occupancy: '', amount: '457k', isWarning: true },
	];

	return (
		<div className="bg-[#090D28] rounded-xl border border-[#252B42] overflow-hidden">
			<div className="px-4 py-3 text-sm text-white font-semibold">Deze Maand</div>
			<div className="grid grid-cols-13 bg-[#090D28] ">
				<HeaderCell className="col-span-3">Sales Step</HeaderCell>
				<HeaderCell className="col-span-2">Calls Amount</HeaderCell>
				<HeaderCell className="col-span-2">Deals Won</HeaderCell>
				<HeaderCell className="col-span-2">Win Rate</HeaderCell>
				<HeaderCell className="col-span-2">Occupancy</HeaderCell>
				<HeaderCell className="col-span-1">Amount</HeaderCell>
			</div>
			<div className="divide-y divide-white/10">
				{rows.map((r, idx) => (
					<Row
						key={idx}
						name={r.name}
						nameColor={r.nameColor}
						calls={r.calls}
						deals={r.deals}
						winRate={r.winRate}
						occupancy={r.occupancy}
						amount={r.amount}
						pillColor={r.isWarning ? '#F97316' : 'rgba(34,197,94,0.9)'}
						pillBg={r.isWarning ? 'rgba(249,115,22,0.2)' : 'rgba(34,197,94,0.15)'}
					/>
				))}
			</div>
		</div>
	);
};

export default Table;
