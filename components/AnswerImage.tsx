import React from 'react'
import Image from 'next/image';

interface AnswerImageProps{
    onDelete:()=>void;
    image:string;
}

const AnswerImage:React.FC<AnswerImageProps> = ({onDelete,image}) => {
  return (
    <div
          className="relative w-full h-[120px] rounded-[20px] border-[2px] border-white flex group/answer items-center justify-center "
         
        >
          <Image
            src={image}
            alt="image"
            className=" w-[120px] h-[120px] object-fill rounded-[20px]"
          />
          <div className="absolute -top-5 right-[50] w-[30px] h-[30px] flex justify-center items-center border-[1px] border-black bg-neutral-600 hover:bg-red-600 transition-all duration-300 rounded-full cursor-pointer" onClick={onDelete}>
              <Image src="/images/closecircle2.svg" alt="" width={20} height={20} />
            </div>
        </div>
  )
}

export default AnswerImage