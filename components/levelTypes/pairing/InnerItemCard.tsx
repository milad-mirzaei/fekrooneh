import React, { useState } from 'react'
import AnswerImage from '../../AnswerImage';
import AnswerText from '../../AnswerText';
import AnswerButton from '../../AnswerButton';
import useLevels, { PairingInnerItem } from '@/hooks/useLevels';
import useAddImageModal from '@/hooks/useAddImageModal';
import Image from 'next/image';



interface InnerCardProps{
    item:PairingInnerItem,
    parentIndex:number,
    index:number,
}
const InnerItemCard:React.FC<InnerCardProps> = ({item,parentIndex,index}) => {


    const addImageModal= useAddImageModal();

    const levels = useLevels();
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
        newLevel.pairing.pairingItems[parentIndex].innerItems[index].text=null;
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      }
      const handleDeletAnswerImage = ()=>{
        const newLevel = currentLevel;
        newLevel.pairing.pairingItems[parentIndex].innerItems[index].image=null;
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      }
      const handleAddText = ()=>{
        const newLevel = currentLevel;
          newLevel.pairing.pairingItems[parentIndex].innerItems[index].text='';
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
      ):item.text !== null ?(
        <AnswerText
        onChange={handleChangeAnswerText}
        value={item.text!}
        placeholder=""
        onDelete={handleDeletAnswerText}
        />
        ):null}

      <div className="absolute bottom-[24px] md:bottom-[17px] flex justify-center items-center gap-1 " dir="rtl">
      {(item.image || item.text !== null ) ? '': 
      <AnswerButton
      answers={pairingItems}
      icon="/images/calculator.svg"
      color="bg-[#7900FF]"
      onClick={()=>{}}
      />
        }
        {(item.image || item.text !== null ) ? '':
        <AnswerButton
          answers={pairingItems}
          icon="/images/edit.svg"
          color="bg-[#0066FF]"
          onClick={handleAddText}
        />
        }
        {(item.image || item.text !== null ) ? '': 
      
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