import React from 'react'


interface AnswerTextProps{
    onChange:(value:string)=>void;
    value:string;
    placeholder:string;
    onDelete:()=>void;
}


const AnswerText:React.FC<AnswerTextProps> = ({onChange,value,placeholder,onDelete}) => {
  return (
    <div  className="relative w-[140px] h-[120px] rounded-[20px] border-[2px] border-white flex group/answer items-center justify-center "
        dir="rtl"
        >
          <textarea
              disabled={false}
              onChange={(e) => {
               onChange(e.target.value)
              }}
              value={value}
              placeholder={placeholder}
              rows={3}
              maxLength={30}
              className={`
              overflow-hidden
              textarea
              w-full
              p-3 
              text-[17px] 
              font-bold
              bg-transparent
              outline-none
              text-black
              placeholder:text-black
              placeholder:text-[24px]
              md:placeholder:text-[16px]
              placeholder:font-extrabold
              transition
              border-none
              focus:border-none
              focus:border-transparent
              focus:ring-0
            `}
              style={{ resize: "none" }}
            />
            <div className="absolute -top-5 right-[50] w-[30px] h-[30px] flex justify-center items-center border-[1px] border-black bg-neutral-600 hover:bg-red-600 transition-all duration-300 rounded-full cursor-pointer" onClick={onDelete}>
              <img src="/images/closecircle2.svg" alt="" width={20} height={20} />
            </div>
        </div>
  )
}

export default AnswerText