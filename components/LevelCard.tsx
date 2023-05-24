import useLevels from '@/hooks/useLevels';
import React from 'react'
import { Level } from '@/hooks/useLevels';
import useSelectedLevel from '@/hooks/useSelectedLevel';



const LevelCard:React.FC<Level> = ({name,icon,levelNumber,isSelected,rahnamaColor,rahnamaIcon}) => {

    const {selectedLevel,onUp,onChange} = useSelectedLevel();
    const levels = useLevels();
    const levelsList = levels.levels;
    const level = levelsList[levelNumber];

  return (
    <div className={`relative w-[222px] flex justify-start pt-2 h-[185px] ${isSelected?'bg-[#6B00E2]':'bg-[#E6E7F6]'} cursor-pointer rounded-[20px] border-[1px] border-black`} draggable style={{ boxShadow: "3px 2px black" }} onClick={()=>onChange(levelNumber)}>
        <div className='flex items-start justify-center px-4 '>
            <div className='w-[50px] flex justify-start pt-[2px]'><p className='text-black text-[14px] '>مرحله {levelNumber+1} :</p></div>
            <div className='w-[110px] flex justify-start'><p className="text-black font-bold text-[16px] line-clamp-1">{name}</p></div>
            <div className='flex gap-2 justify-end  mr-0 mt-1'>
            <img src="images/copy.svg" alt="copy" />
            <img onClick={()=>{if(levelNumber == selectedLevel ){onUp();levels.onDelete(level);}else{levels.onDelete(level);}}} src="images/closesquare.svg" alt="delete" />
            </div>
        </div>
        <div className='absolute bottom-0 w-[222px] h-[137px] bg-[#F5F5F5] bg-levelCard border-[1px] border-black rounded-[20px] flex justify-center items-center'>
            <img src={icon} alt="4gozine" />
        </div>
        {rahnamaColor && rahnamaIcon && <div className='absolute -right-5 bottom-14 flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#f03944] border-[2px] border-black' style={{ boxShadow: "3px 2px black" }} >
            <img src="images/infocircle.svg" alt="info" />
        </div>}
    </div>
  )
}

export default LevelCard