import React, { useState } from "react";
import Input from "./Input";
import GozineCard from "./GozineCard";
import useChaharGozineList from "@/hooks/useChaharGozineList";
import useAudioModal from "@/hooks/useAudioModal";

const chaharGozine = () => {

    const [soal, setSoal] = useState('');

    const audioModal = useAudioModal();

    // const gozineHa=[
    //   'سبزی پلو با ماهی',
    //   'سبزی پلو با ماهی',
    //   'سبزی پلو با ماهی',
    //   'سبزی پلو با ماهی',
    // ]

    // const [gozineList, setGozineList] = useState(gozineHa);

    
    const chaharGozineList =  useChaharGozineList();
    const gozineList= chaharGozineList.gozineList;
    const selectedIndex = gozineList.findIndex((gozine)=> gozine.isSelected == true );


     const selectHandle = (index:number)=>{
      const newList = gozineList;
      newList[selectedIndex].isSelected = false;
      newList[index].isSelected=true;
      chaharGozineList.onChangeGozine(newList);
     }

     const colors=[
      'bg-[#ffb72a]',
      'bg-[#7900FF]',
      'bg-[#B2FFD6]',
      'bg-[#FF836F]',
      'bg-[#FE4E13]',
      'bg-[#6BD3F1]',
  ]
  const gozineMasks=[
      'images/GozineMask.svg',
      'images/GozineMask2.svg',
      'images/GozineMask3.svg',
      'images/GozineMask1.svg',
  ]

  return (
    <div className="p-[22px]  flex flex-col items-center justify-start gap-5">
      <div
        className="md:w-[660px] md:h-[42px] w-[750px] h-[53px] bg-[#6B00E2] rounded-[34px] border-[1px]  border-black flex items-center justify-between px-3 gap-4 cursor-pointer"
        style={{ boxShadow: "4px 3px black" }}
      >
        <div className="flex items-center justify-start gap-2">
          <div className="w-[32px] h-[32px] mr-5 rounded-full bg-[#FFB72A] border-[1px] border-black flex items-center justify-center">
            <img src="images/rahnamaIcon.svg"  alt="rahnama" />
          </div>
          <p className="text-white font-bold text-[16px] md:text-[13px]">
            برای فعال شدن تمام قابلیت های بازیسازی میتونی اشتراک پریمیوم بگیری و
            از اونها لذت ببری.
          </p>
        </div>
        <div className="flex items-center justify-start">
          <p className="text-white font-bold text-[16px] md:text-[13px]">
            خرید اشتراک پریمیوم
          </p>
          <img src="images/arrowcircleup2.svg" alt="arrow" />
        </div>
      </div>
      <div className="md:h-[215px] h-[257px] flex flex-row justify-start items-end gap-5">
        <div
          className="relative md:w-[457px] md:h-[200px] w-[557px] h-[240px] flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[41px] items-start"
          style={{ boxShadow: "4px 3px black" }}
        >
            <div className="absolute -top-[25px] w-[122px] h-[47px] bg-[#28DE7C] rounded-[15px] border-[1px] border-black flex items-center justify-center" style={{ boxShadow: "4px 3px black" }}>
                <p className="text-[19px] text-white font-bold">جا سوالی</p>
            </div>
          <div
            className=" w-[42px] h-[42px] rounded-full border-[1px] border-black flex items-center justify-center bg-[#DFECFF]"
            style={{ boxShadow: "4px 3px black" }}
          >
            <img src="images/editIcon.svg" alt="edit" />
          </div>
          <textarea
            disabled={false}
            onChange={(e) => {setSoal(e.target.value)}}
            value={soal}
            placeholder={`سوالت رو اینجا تایپ کن عزیز من \n و از بقیه بپرس تا بهت جواب بدن تایید کنی \n تا سه خط میتونی سوال بنویسی `}
            rows={4}
            className={`
            w-full
            p-4 
            pr-8
            text-lg 
            bg-white 
            outline-none
            text-black
            placeholder:font-bold
            placeholder:text-black
            placeholder:text-[24px]
            md:placeholder:text-[19px]
            placeholder:font-['yekanbakhfat']
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
          `}
          style={{resize:"none"}}
          />
        </div>
        <div className="md:w-[300px] md:h-[210px] w-[347px] h-[263px] border-dashed border-[2px] border-black rounded-[14px] bg-white flex flex-col items-center justify-center gap-4" style={{ boxShadow: "4px 3px black" }}>
            <div className="flex gap-2">
                <div className="cursor-pointer relative w-[61px] h-[55px] flex items-center justify-center bg-[#FFB72A] border-dashed border-[#ffffff] border-[2px] rounded-[15px]"><img src="images/image.svg" alt="image" />
                <div className="absolute w-[20px] h-[20px] flex items-center justify-center bg-white rounded-full border-[2px] -right-[10px] border-black">
                  <img src="images/+.svg" alt="plus" />
                </div>
                </div>
                <div className="cursor-pointer relative w-[61px] h-[55px] flex items-center justify-center bg-[#F6EDFF] border-dashed border-[#6B00E2] border-[2px] rounded-[15px]" onClick={audioModal.onOpen}><img src="images/voicecircle.svg" alt="voice" />
                <div className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FFB72A] rounded-full border-[1px] -top-[17px] border-black"  style={{ boxShadow: "1px 1px black" }}>
                  <img src="images/rahnamaIcon2.svg" alt="plus" />
                </div>
                </div>
                <div className="cursor-pointer relative w-[61px] h-[55px] flex items-center justify-center bg-[#DDFFED] border-dashed border-[#28DE7C] border-[2px] rounded-[15px]"><img src="images/videocircle.svg" alt="video" />
                <div className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FFB72A] rounded-full border-[1px] -top-[17px] border-black"  style={{ boxShadow: "1px 1px black" }}>
                  <img src="images/rahnamaIcon2.svg"  alt="plus" />
                </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img src="images/info.svg" alt="info" />
              <p className="text-[13px] font-semibold text-black opacity-50">میتونی یک تصویر , صدا یا ویدیو اضافه کنی</p>
              </div>
        </div>
      </div>
      <div className="flex gap-5">
      <div className="flex justify-center items-center gap-4">
        {gozineList.map((gozine,index)=>(
          <GozineCard
            index={index}
            onSelect={()=>selectHandle(index)}
            gozine={gozine}
          />
        ))}
      </div>
      {gozineList.length <6 && <div className="flex flex-col justify-center">
        <div className="cursor-pointer w-[52px] h-[92px] rounded-[29px] bg-[#7900FF] border-[1px] border-black flex justify-center items-center "style={{ boxShadow: "4px 3px black" }} onClick={()=>chaharGozineList.onAdd({id:'',text:'',image:'',color:colors[gozineList.length],isSelected:false,})}>
          <p className="text-white text-[33px] font-bold">+</p>
        </div>
      </div>}
      </div>
    </div>
  );
};

export default chaharGozine;
