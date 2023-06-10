import React from 'react'
import PairingCard from './PairingCard'
import useLevels from '@/hooks/useLevels';
import Image from 'next/image';


const Pairing = () => {

  const levels = useLevels();
  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const pairingItems = currentLevel.pairing.pairingItems;

  const handleChangeQuestion = (quest: string) => {
    const newLevel = currentLevel;
    newLevel.pairing.question = quest;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
    <div
      className="md:w-[660px] md:h-[42px] w-[750px] h-[53px] hover:scale-105 transition-all duration-500 bg-[#6B00E2] rounded-[34px] border-[1px]  border-black flex items-center justify-between px-3 gap-4 cursor-pointer"
      style={{ boxShadow: "4px 3px black" }}
    >
      <div className="flex items-center justify-start gap-2">
        <div className="w-[32px] h-[32px] mr-5 rounded-full bg-[#FFB72A] border-[1px] border-black flex items-center justify-center">
          <Image src="images/rahnamaIcon.svg" alt="rahnama" />
        </div>
        <p className="text-white font-bold text-[16px] md:text-[11px]">
          برای فعال شدن تمام قابلیت های بازیسازی میتونی اشتراک پریمیوم بگیری و
          از اونها لذت ببری.
        </p>
      </div>
      <div className="flex items-center justify-start">
        <p className="text-white font-bold text-[16px] md:text-[11px]">
          خرید اشتراک پریمیوم
        </p>
        <Image src="images/arrowcircleup2.svg" alt="arrow" />
      </div>
    </div>
    <div className="md:h-[122px] h-[157px] px-[20px] w-full flex flex-row justify-start items-end gap-5">
      <div
        className="relative md:w-full md:h-[110px] w-[557px] h-[220px] hover:scale-105 transition-all duration-500 flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
        style={{ boxShadow: "4px 3px black" }}
      >
        <div
          className="absolute -top-[25px] w-[110px] h-[44px] bg-[#28DE7C] rounded-[15px] border-[1px] border-black flex items-center justify-center"
          style={{ boxShadow: "4px 3px black" }}
        >
          <p className="text-[16px] text-white font-bold">جا سوالی</p>
        </div>
        <div
          className=" w-[42px] h-[42px] rounded-full border-[1px] border-black flex items-center justify-center bg-[#DFECFF]"
          style={{ boxShadow: "4px 3px black" }}
        >
          <Image src="images/editIcon.svg" alt="edit" />
        </div>
        <textarea
          disabled={false}
          onChange={(e) => {
            handleChangeQuestion(e.target.value)
          }}
          value={currentLevel.pairing.question}
          placeholder={`سوالت رو اینجا تایپ کن عزیز من و متضاد کلمات رو پیداکن.`}
          rows={1}
          className={`
          textarea
          w-full
          p-2 
          pr-8
          text-lg 
          font-bold
          bg-white 
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
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        `}
          style={{ resize: "none" }}
        />
      </div>
    </div>
      <div className={`flex justify-center  h-[357px] items-center gap-3 ${pairingItems.length >5 && 'flex-wrap'}`}>
      {pairingItems.map((item,index)=>(
        <PairingCard
        item={item}
        key={index}
        index={index}
        />
      ))}
      </div>
  
  </div>
  )
}

export default Pairing