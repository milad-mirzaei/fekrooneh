import React, { useState } from 'react'
import AnswerImage from '../../AnswerImage';
import AnswerText from '../../AnswerText';
import AnswerButton from '../../AnswerButton';
import Image from 'next/image';

import AddImageModalHook from '@/hooks/useAddImageModal';
import LevelsHook, { PairingInnerItem } from '@/hooks/useLevels';


interface InnerCardProps{
    item:PairingInnerItem,
    parentIndex:number,
    index:number,
}
const InnerItemCard:React.FC<InnerCardProps> = ({item,parentIndex,index}) => {

    const [hasText, setHasText] = useState(false);

    const addImageModal= AddImageModalHook();

    const levels = LevelsHook();
    const levelsList = levels.levels;
    const selectedLevelIndex = levels.levels.findIndex(
      (level) => level.isSelected == true
    );
    const currentLevel = levels.levels[selectedLevelIndex];
    const pairingItems = currentLevel.pairing.pairingItems;

    const handleChangeAnswerText = (text: string) => {
        const newLevel = currentLevel;
        newLevel.pairing.pairingItems[parentIndex].innerItems[index].text = text;
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      };

      const handleDeletAnswerText = ()=>{
        const newLevel = currentLevel;
        setHasText(false);
        newLevel.pairing.pairingItems[parentIndex].innerItems[index].text='';
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      }
      const handleDeletAnswerImage = ()=>{
        const newLevel = currentLevel;
        setHasText(false);
        newLevel.pairing.pairingItems[parentIndex].innerItems[index].image=null;
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      }

  return (
    <div className={`relative flex items-center h-full px-[7px] justify-center w-full  rounded-[27px] border-[1px] border-black ${item.color}`} style={{ boxShadow: "2px 2px black" }} >
         {item.image ? (
        <AnswerImage
        onDelete={handleDeletAnswerImage}
        image={item.image["data_url"]}
        />
      ):hasText ?(
        <AnswerText
        onChange={handleChangeAnswerText}
        value={item.text!}
        placeholder=""
        onDelete={handleDeletAnswerText}
        />
        ):null}

      <div className="absolute bottom-[24px] md:bottom-[17px] flex justify-center items-center gap-1 " dir="rtl">
      {(item.image || hasText ) ? '': 
      <AnswerButton
      answers={pairingItems}
      icon="/images/calculator.svg"
      color="bg-[#7900FF]"
      onClick={()=>{}}
      />
        }
        {(item.image || hasText ) ? '':
        <AnswerButton
          answers={pairingItems}
          icon="/images/edit.svg"
          color="bg-[#0066FF]"
          onClick={()=>setHasText(true)}
        />
        }
        {(item.image || hasText ) ? '': 
      
        <div
          className={`
            ${pairingItems.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${pairingItems.length == 6 && "md:w-[27px] md:h-[27px]"}
            ${pairingItems.length == 8 && "md:w-[25px] md:h-[25px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#ffb72a] `}
          style={{ boxShadow: "2px 2px black" }}
          onClick={() =>{addImageModal.onOpen('pairing',parentIndex,index)}}
        >
          <Image
            src="/images/image.svg"
            alt=""
            width={pairingItems.length == 5 ? 15 : pairingItems.length == 6 ? 13 :pairingItems.length == 8?13 :20}
            height={pairingItems.length == 5 ? 15 : pairingItems.length == 6 ? 13 :pairingItems.length == 8?13 :20}
          />
        </div>
        }
        {/* {answers.length > 3 && (
          <AnswerButton
          answers={answers}
          icon="/images/closecircle2.svg"
          color="bg-[#F03944]"
          onClick={() => {}}
          />
         
        )} */}
      </div>
    </div>
  )
}

export default InnerItemCard