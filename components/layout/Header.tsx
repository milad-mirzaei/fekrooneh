
import React from "react";
import LevelsHook from "../../hooks/useLevels";
import useSettingsModal from "../../hooks/useSettingsModal";
import usePreviewModal from "@/hooks/usePreviewModal";
import Image from "next/image";

const Header = () => {
  const previewModal =usePreviewModal();

  // const selectedLevel = useSelectedLevel();
  const levels=LevelsHook();
  const levelList=levels.levels;
  const settingsModal= useSettingsModal();
  const selectedLevelIndex = levelList.findIndex((level)=>level.isSelected == true);
  const currentLevel =levelList[selectedLevelIndex];

  const selectHandle = (index:number)=>{
    const newList = levelList;
    newList[selectedLevelIndex].isSelected = false;
    newList[index].isSelected=true;
    levels.onChangeLevel(newList);
   }

  return (
    <div className="h-[75px] w-full bg-white flex px-10 items-center justify-between border-b-[1px] border-[#000000] border-opacity-25">
      <div className="flex gap-3">
        <div
          className="w-[169px] h-[54px] flex justify-center gap-1 items-center bg-buttonGradient rounded-[100px]"
          style={{ boxShadow: "3px 2px black" }}
        >
          <p className="text-[15px] font-extrabold">تم ها</p>
          <Image src="images/brush.svg" alt="brush" width={21} />
        </div>
        <div className="flex justify-center items-center gap-1">
          <Image src="images/stored.svg" alt="" />
          <p>پیش نویس بازی در پروفایل شما ذخیره شد.</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-[261px] h-[52px] flex justify-center items-center border-[1px] border-black rounded-[34px] ">
          <p className="text-md text-[#aaaaaa] ml-3">نام بازی :</p>
          <p className="text-md text-[#000000] font-extrabold ml-3">
            پرتقال من کجاست؟
          </p>
        </div>
        <div
          className="w-[70px] h-[59px] flex items-center justify-center bg-[#6B00E2] rounded-[34px] border-[1px] border-black cursor-pointer"
          style={{ boxShadow: "3px 2px black" }}
          onClick={settingsModal.onOpen}
        >
          <Image src="images/settingsIcon.svg" alt="settingsIcon" />
        </div>
      </div>

     <div className="flex items-center gap-7">
     <div className="flex items-center gap-2">
        <Image className={`${selectedLevelIndex!==levelList.length-1 && 'cursor-pointer'}`} src={`${selectedLevelIndex==levelList.length-1?"images/arrowDownBorderRoundDisable.svg":"images/arrowDownBorderRound.svg"}`}   alt="arrowdown" onClick={()=>{selectedLevelIndex!==levelList.length-1 && selectHandle(selectedLevelIndex+1)}} />
        <Image className={`${selectedLevelIndex!==0 && 'cursor-pointer' }`} src={`${selectedLevelIndex==0?"images/arrowUpBorderRound.svg":"images/arrowUpBorderRoundEnable.svg"}`} alt="arrowup" onClick={()=>{selectedLevelIndex!==0 && selectHandle(selectedLevelIndex-1)}} />
        <p className="text-[#0c0c0c] text-[17px] font-semibold">
          جابجایی مراحل
        </p>
      </div>
      <div className="w-[1px] h-[32px] bg-[#000000] opacity-25 ml-3"></div>

      <div
        className="w-[222px] h-[53px] bg-buttonPurple rounded-[100px] border-[2px] border-[black] flex justify-center items-center cursor-pointer"
        style={{ boxShadow: "4px 4px #6B00E2" }}
        onClick={()=>previewModal.onOpen(currentLevel)}
      >
        <p className="text-white text-[16px] font-extrabold">
          مشاهده پیش نمایش
        </p>
      </div>
     </div>
    </div>
  );
};

export default Header;
