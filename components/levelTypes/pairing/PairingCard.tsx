import React from 'react'


import InnerItemCard from './InnerItemCard';
import LevelsHook, { PairingItem } from '@/hooks/useLevels';


interface PairingCardProps{
    item:PairingItem;
    index:number;
}



const PairingCard:React.FC<PairingCardProps> = ({item,index}) => {


    const levels = LevelsHook();
    const selectedLevelIndex = levels.levels.findIndex(
      (level) => level.isSelected == true
    );
    const pairingItems = levels.levels[selectedLevelIndex].pairing.pairingItems;


  return (
    <div className={` flex hover:scale-105 transition-all duration-300
    ${pairingItems.length == 2 && 'w-[420px] h-[207px] flex-row gap-3 p-[14px]'}
    ${pairingItems.length == 3 && 'w-[325px] h-[172px] flex-row gap-3 p-[13px]'}
    ${pairingItems.length == 4 && 'w-[180px] h-[357px] flex-col gap-5 p-[17px]'}
    ${pairingItems.length == 5 && 'w-[172px] h-[357px] flex-col gap-3 p-[12px]'}
    ${pairingItems.length == 6 && 'w-[320px] h-[159px] flex-row gap-3 p-[9px]'}
    ${pairingItems.length == 8 && 'w-[240px] h-[155px] flex-row gap-2 p-[7px]'}
    rounded-[27px] ${item.color} border-[1px] border-black items-center justify-between `} style={{ boxShadow: "2px 2    px black" }}>
       
        <InnerItemCard item={item.innerItems[0]} index={0} parentIndex={index} />
        <InnerItemCard item={item.innerItems[1]} index={1} parentIndex={index}/>
    </div>
  )
}

export default PairingCard