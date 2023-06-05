import React, { useState } from "react";
import Image from "next/image";
import  { Gozine } from "../../../hooks/useLevels";
import LevelsHook from "../../../hooks/useLevels";
import _ from "lodash";
import AddImageModalHook from "../../../hooks/useAddImageModal";
import AnswerText from "../../AnswerText";
import AnswerImage from "../../AnswerImage";
import AnswerButton from "../../AnswerButton";

interface SequenceAndOrderCardProps {
  index: number;
  gozine: Gozine;
}

const SequenceAndOrderCard: React.FC<SequenceAndOrderCardProps> = ({ index, gozine }) => {
  const addImageModal = AddImageModalHook();

  const gozineMasks = [
    "images/GozineMask.svg",
    "images/GozineMask2.svg",
    "images/GozineMask3.svg",
    "images/GozineMask1.svg",
    "images/GozineMask.svg",
    "images/GozineMask3.svg",
  ];

  const [hasText, setHasText] = useState(false);

  const levels = LevelsHook();
  const levelsList = levels.levels;
  const selectedLevelIndex = levels.levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const answers = currentLevel.sequenceAndOrder.answers;

  const deleteAnswer = (gozine: Gozine) => {
    const newLevel = currentLevel;
    newLevel.extraAnswers.push({color:gozine.color,mask:gozine.mask});
    newLevel.sequenceAndOrder.answers = newLevel.sequenceAndOrder.answers.filter(
      (answer) => !_.isEqual(answer, gozine)
    );
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

 

  const handleDeleteAnswerImage=()=>{
      const newList = answers;
      newList[index].image=null;
      levelsList[selectedLevelIndex].sequenceAndOrder.answers=newList;
      levels.onChangeLevel(levelsList);
  }

  const handleChangeAnswerText = (text: string) => {
    const newLevel = currentLevel;
    newLevel.sequenceAndOrder.answers[index].text = text;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleDeletAnswerText = ()=>{
    const newLevel = currentLevel;
    setHasText(false);
    newLevel.sequenceAndOrder.answers[index].text='';
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  }

  return (
    <div
      className={` relative
     
     ${answers.length == 5 && " md:w-[170px] md:h-[220px]"} 
     ${answers.length == 6 && " md:w-[155px] md:h-[220px]"} 
      hover:-translate-y-3 transition-all duration-500 px-[7px]
     w-[175px] h-[220px]  flex items-center justify-center rounded-[13px] ${
       gozine.color
     }  border-[3px] border-black `}
      style={{ boxShadow: "4px 3px black" }}
    >
      <Image
        className="absolute top-[50px] right-[5px]"
        src={gozine.mask!}
        alt="mask"
      />

      {answers[index].image ? (
        <AnswerImage
        onDelete={handleDeleteAnswerImage}
        image={answers[index].image["data_url"]}
        />
      ):hasText ?(
        <AnswerText
        onChange={handleChangeAnswerText}
        value={answers[index].text!}
        placeholder=""
        onDelete={handleDeletAnswerText}
        />
        ):null}

      <div className="absolute bottom-[24px] md:bottom-[17px] flex justify-center items-center gap-1 " dir="rtl">
      {(answers[index].image || hasText ) ? '': 
      <AnswerButton
      answers={answers}
      icon="/images/calculator.svg"
      color="bg-[#7900FF]"
      onClick={()=>{}}
      />
      // <div
      //     className={`
      //       ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
      //       ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
      //       cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#7900FF] `}
      //     style={{ boxShadow: "2px 2px black" }}
      //   >
      //     <Image
      //       src="/images/calculator.svg"
      //       alt=""
      //       width={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
      //       height={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
      //     />
      //   </div>
        }
        {(answers[index].image || hasText ) ? '':
        <AnswerButton
          answers={answers}
          icon="/images/edit.svg"
          color="bg-[#0066FF]"
          onClick={()=>setHasText(true)}
        />
        //  <div
        //   className={`
        //     ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
        //     ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
        //     cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#0066FF] `}
        //   style={{ boxShadow: "2px 2px black" }}
        //   onClick={()=>setHasText(true)}
        // >
        //   <Image
        //     src="/images/edit.svg"
        //     alt=""
        //     width={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
        //     height={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
        //   />
        // </div>
        }
        {(answers[index].image || hasText ) ? '': 
      
        <div
          className={`
            ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#ffb72a] `}
          style={{ boxShadow: "2px 2px black" }}
          onClick={() => addImageModal.onOpen(`${index}`,index,null)}
        >
          <Image
            src="/images/image.svg"
            alt=""
            width={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
            height={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
          />
        </div>
        }
        {answers.length > 3 && (
          <AnswerButton
          answers={answers}
          icon="/images/closecircle2.svg"
          color="bg-[#F03944]"
          onClick={() => deleteAnswer(gozine)}
          />
          // <div
          //   className={`
          //  ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
          //  ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
          //  cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#F03944] `}
          //   style={{ boxShadow: "2px 2px black" }}
          //   onClick={() => deleteAnswer(gozine)}
          // >
          //   <Image
          //     src="/images/closecircle2.svg"
          //     alt=""
          //     width={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
          //     height={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
          //   />
          // </div>
        )}
      </div>
    </div>
  );
};

export default SequenceAndOrderCard;
