import React from 'react'

interface AnswerImageProps{
    onDelete:()=>void;
    image:string;
}

const AnswerImage:React.FC<AnswerImageProps> = ({onDelete,image}) => {
  return (
    <div
          className="relative w-full h-[120px] rounded-[20px] flex group/answer items-center justify-center "
         
        >
          <img
            src={image}
            alt="image"
            className=" w-[140px] h-[120px] object-fill rounded-[20px]"
          />
          <div className="absolute -top-6 right-[50] px-[10px] gap-1 h-[30px] flex justify-center items-center border-[1px] border-black bg-neutral-600 hover:bg-red-600 transition-all duration-300 rounded-full cursor-pointer" onClick={onDelete}>
          <p className='text-white text-[16px]'>حذف عکس</p>
              <img src="/images/closecircle2.svg" alt="" width={20} height={20} />
            </div>
        </div>
  )
}

export default AnswerImage