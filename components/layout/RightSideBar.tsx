import React, { useState } from "react";
import RightSideBarSelect from "../RightSideBarSelect";
import useSelectedLevel from "@/hooks/useSelectedLevel";
import useLevels from "@/hooks/useLevels";

const RigtSideBar = () => {
  const selectedLevel = useSelectedLevel();
  const levels=useLevels();
  const levelsList = levels.levels;
  const currentLevel = levelsList[selectedLevel.selectedLevel];
  const [selectedEffect, setSelectedEffect] = useState(0);
 
  const [modelBaziIsOpen, setModelBaziIsOpen] = useState(false);
  const [zamanBaziIsOpen, setZamanBaziIsOpen] = useState(false);
  const [emtiazBaziIsOpen, setEmtiazBaziIsOpen] = useState(false);
  const [sakhtiBaziIsOpen, setSakhtiBaziIsOpen] = useState(false);
  const effects = ["بدون افکت", "3 در 3", "6 در 6", "9 در 9"];

  const games = [
    'چهار گزینه ای',
    'درست و نادرست',
    'جفتش کن',
  ]

  const zaman = [
    30,60,90
  ]

  const emtiaz=[
    5,10,15
  ]

  const sakhti = [
    'آسون',
    'متوسط',
    'سخت'
  ]

  return (
    <div className="col-span-2 flex flex-col  gap-5 items-center px-5 py-7">
      <div className="levelsScroll flex flex-col gap-5 overflow-y-scroll h-[480px] pl-[10px]">
      <RightSideBarSelect
        titleIcon="images/gamepad.svg"
        title="مدل بازی"
        selectedIcon="images/4gozine.svg"

        isOpen={modelBaziIsOpen}
        handleOpen={()=>setModelBaziIsOpen(!modelBaziIsOpen)}
        choices={games}
      />
      <RightSideBarSelect
        titleIcon="images/stopwatch.svg"
        title="مدت زمان این مرحله"

        isOpen={zamanBaziIsOpen}
        handleOpen={()=>setZamanBaziIsOpen(!zamanBaziIsOpen)}
        choices={zaman.map(String)}
      />
      <RightSideBarSelect
        titleIcon="images/reward.svg"
        title="امتیاز"
        isOpen={emtiazBaziIsOpen}
        handleOpen={()=>setEmtiazBaziIsOpen(!emtiazBaziIsOpen)}
        choices={emtiaz.map(String)}
      />
      <RightSideBarSelect
        titleIcon="images/reward.svg"
        title="درجه سختی"
        isOpen={sakhtiBaziIsOpen}
        handleOpen={()=>setSakhtiBaziIsOpen(!sakhtiBaziIsOpen)}
        choices={sakhti}
      />
      <div className="flex w-full items-center justify-start pr-5 gap-2">
        <img src="images/magic-wand.svg" alt="magic" />
        <p className="font-bold">افکت تصویر</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {effects.map((item, index) => (
          <div onClick={()=>{setSelectedEffect(index)}} className="flex flex-col items-center gap-1">
            <div className={`w-[111px] h-[67px] border-[.8px] rounded-[10px]  transition-all duration-400 ${selectedEffect == index && 'border-[#0066ff] border-[1.6px]'} `}></div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="w-[289px] max-w-[289px] flex items-center justify-center gap-3  h-[53px] rounded-full bg-buttonGold top-2 " style={{ boxShadow: "3px 2px black" }}>
            <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full border-black border-[2px]" style={{ boxShadow: "3px 2px black" }}>
                <img src="images/rahnamaIcon.svg" alt="rahnama" />
            </div>
                <p className="text-white font-bold">افزودن راهنما به این مرحله</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[140px] h-[52px] flex items-center justify-center rounded-[34px] bg-white border-black border-[1px]" style={{ boxShadow: "3px 2px black" }}>
            <p className="text-xl font-bold">کپی اسلاید</p>
        </div>
        <div className="w-[140px] h-[52px] flex justify-center items-center rounded-[34px] bg-[#fd4b55] border-black border-[1px] cursor-pointer" style={{ boxShadow: "3px 2px black" }} onClick={()=>levels.onDelete(currentLevel)}>
            <p className="text-white font-bold text-xl">حذف اسلاید</p>
        </div>
      </div>
    </div>
  );
};

export default RigtSideBar;
