import * as React from "react"

const Profit = ({profit}: any) => (
    <div className="content offer">
      <h2 className="content-headline">Typisk udbytte pr måned</h2>
      <div className="content__flex-col">
        <div className="content__item">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center font-bold text-2xl">
          {profit.attributes.meetings}
          </div>
          <div className="mt-4">
          Møder           
          </div>
        </div>
        <div className="content__item">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center font-bold text-4xl">
        {profit.attributes.convertions}
          </div>
          <div className="mt-4">
          Konvertering           
          </div>
        </div>
        <div className="content__item">
        <div className="w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center font-bold text-4xl">
        {profit.attributes.leads}
          </div>
          <div className="mt-4">
          Varme leads           
          </div>
        </div>
        <div className="content__item">
        <div className=" font- w-[120px] h-[120px] rounded-full bg-[#f5f4f0] m-auto flex items-center justify-center font-bold text-4xl">
        {profit.attributes.reply_rate}
          </div>
          <div className="mt-4">
          Reply rate   
          </div>
        </div>
    </div>
    </div>
)

export default Profit

