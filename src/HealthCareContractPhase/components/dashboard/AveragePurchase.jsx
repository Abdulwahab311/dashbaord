import React from 'react'

const AveragePurchase = ({
  headingTop = 'EIGENLIJK NOG STUREN OP',
  headingBottom = 'ONDER DE MARKTPRIJS INKOPEN',
  infoTitle = 'AVERAGE PURCHASE',
  infoSubtitle = 'BELOW MARKET VALUE',
  amount = '€834.500',
  percent = '-56%',
  percentColor = '#18D359'
}) => {
  return (
    <div className="w-full max-w-[260px] bg-[#090D28] mt-10 py-4 max-h-screen pb-72">
      {/* Heading */}
      <div className="px-3">
        <div className="text-white font-semibold tracking-wide leading-tight text-[15px]">
          <div>{headingTop}</div>
          <div>{headingBottom}</div>
        </div>
      </div>

      {/* Info card */}
      <div className="mt-5 px-3">
        <div className="bg-[#1B2142] rounded-xl py-3 px-4">
          <div className="text-white text-[12px] font-extrabold tracking-wide text-center">
            {infoTitle}
          </div>
          <div className="text-[#B9C0D4] text-[11px] font-semibold tracking-wide text-center mt-1">
            {infoSubtitle}
          </div>
        </div>
      </div>

      {/* Amount card */}
      <div className="mt-5 px-3">
        <div className="bg-[#1B2142] rounded-xl py-4 px-4 flex items-center justify-between">
          <div className="text-white text-[22px] font-bold">{amount}</div>
          <div className="text-[18px] font-bold" style={{ color: percentColor }}>{percent}</div>
        </div>
      </div>
    </div>
  )
}

export default AveragePurchase


