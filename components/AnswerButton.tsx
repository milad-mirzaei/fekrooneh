import React from 'react'
import Image from 'next/image';

interface AnswerButtonProps{
    answers:any[];
    color:string;
    icon:string;
    onClick:()=>void;
}

const AnswerButton:React.FC<AnswerButtonProps> = ({answers,color,icon,onClick}) => {
  return (
    <div
          className={`
            ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
            ${answers.length == 8 && "md:w-[25px] md:h-[25px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black ${color} `}
          style={{ boxShadow: "2px 2px black" }}
          onClick={onClick}
        >
          <Image
            src={icon}
            alt=""
            width={answers.length == 5 ? 15 : answers.length == 6 ?  13 :answers.length == 8?13 :20}
            height={answers.length == 5 ? 15 : answers.length == 6 ?  13 :answers.length == 8?13 :20}
          />
        </div>
  )
}

export default AnswerButton