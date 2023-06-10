import Image from 'next/image';
import React from 'react'


interface AnswerTextProps{
    onChange:(value:string)=>void;
    value:string;
    placeholder:string;
    onDelete:()=>void;
}


const AnswerText:React.FC<AnswerTextProps> = ({onChange,value,placeholder,onDelete}) => {
  return (
    <div  className="relative w-full h-[120px] rounded-[20px] group/answer flex  items-center justify-center "
        dir="rtl"
        >
          <div>
            <textarea
              disabled={false}
              onChange={(e) => {
               onChange(e.target.value)
              }}
              value={value}
              placeholder={placeholder}
              
              maxLength={30}
              className={`
              overflow-hidden
              textarea
              w-full 
              
              text-[18px] 
              font-bold
              bg-transparent
              text-center
              align-middle
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
          </div>
            <div className="absolute -top-6 right-[50] px-[10px] h-[30px] flex justify-center gap-1 items-center border-[1px] border-black bg-neutral-600 hover:bg-red-600 transition-all duration-300 rounded-full cursor-pointer" onClick={onDelete}>
              <p className='text-white text-[16px]'>حذف متن</p>
              <Image src="/images/closecircle2.svg" alt="" width={20} height={20} />
            </div>
        </div>
  )
}

export default AnswerText