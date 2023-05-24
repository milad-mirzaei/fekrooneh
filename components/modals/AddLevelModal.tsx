import useGameModels from "@/hooks/useGameModels";
import React from "react";
import Modal from "../Modal";

const AddLevelModal = () => {
    const {models}= useGameModels()
    const bodyContent = (
        <div className="flex justify-start items-start p-10 gap-4">
        <div className="flex flex-col flex-1 items-center justify-start gap-2 ">
            {models.map((model)=>(
                <div className="w-full h-[57px] flex items-center rounded-[50px] border-[1px] border-black border-opacity-20 px-7  gap-4  cursor-pointer">
                    <div className="w-[27px] h-[25px] bg-[#D9D9D9] rounded-[10px]"></div>
                    <p className="font-bold">{model}</p>
                </div>
            ))}
        </div>
        <div className="flex flex-col flex-1 items-start justify-start gap-5 pt-5 ">
                <p className="text-[13px]">پیش نمایش بازی</p>
                <div className="w-[262px] h-[194px] rounded-[27px] border-[1px] border-black border-opacity-20"></div>
                <h1 className="font-extrabold text-[22px] font-['yekanbakhfat']">کوییز</h1>
                <div className="w-[223px]"><p className="text-black text-opacity-50 text-[15px]">کوییز یک بازی جذابه که میتونی باهاش سطح دانش بقیه رو با سوالت بفهمی</p></div>
                <div className="w-[262px] h-[52px] bg-black rounded-[100px] flex items-center justify-center gap-3">
                    <div className="w-[22px] h-[22px] bg-[#D9D9D9] rounded-[10px]"></div>
                    <p className="font-bold text-[17px] text-white">افزودن این بازی</p>
                </div>
        </div>
    </div>
    )
  return (
    <Modal
    body={bodyContent}
    onClose={()=>{}}
    onSubmit={()=>{}}
    />
  );
};

export default AddLevelModal;
