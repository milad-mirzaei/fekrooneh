import React, { useState } from "react";
import Image from "next/image";
import  { Gozine } from "../../../hooks/useLevels";
import LevelsHook from "../../../hooks/useLevels";
import _ from "lodash";
import AddImageModalHook from "../../../hooks/useAddImageModal";
import AnswerText from "../../AnswerText";
import AnswerImage from "../../AnswerImage";

interface GozineCardProps {
  index: number;
  gozine: Gozine;
}

const GozineCard: React.FC<GozineCardProps> = ({ index, gozine }) => {
  const addImageModal = AddImageModalHook();


  const [hasText, setHasText] = useState(false);



  const levels = LevelsHook();
  const levelsList = levels.levels;
  const selectedLevelIndex = levels.levels.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const answers = currentLevel.fourChoice.answers;
  const selectedAnswerIndex = answers.findIndex(
    (answer) => answer.isSelected == true
  );

  const selectHandle = (index: number) => {
    const newList = answers;
    newList[selectedAnswerIndex].isSelected = false;
    newList[index].isSelected = true;
    levelsList[selectedLevelIndex].fourChoice.answers=newList;
    levels.onChangeLevel(levelsList);
  };

  const multiSelectHandle = (index: number) => {
    const newList = answers;
    newList[index].isSelected = newList[index].isSelected ? false : true;
    levelsList[selectedLevelIndex].fourChoice.answers=newList;
    levels.onChangeLevel(levelsList);
  };

  const deleteAnswer = (gozine: Gozine) => {
    const newLevel = currentLevel;
    newLevel.extraAnswers.push({color:gozine.color,mask:gozine.mask});
    newLevel.fourChoice.answers = newLevel.fourChoice.answers.filter(
      (answer) => !_.isEqual(answer, gozine)
    );
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleDelete = (gozine: Gozine) => {
    if (index == selectedAnswerIndex) {
      selectHandle(selectedAnswerIndex - 1);
      deleteAnswer(gozine);
    } else {
      deleteAnswer(gozine);
    }
    setHasText(false);
  };

  const handleDeleteAnswerImage=()=>{
      const newList = answers;
      newList[index].image=null;
      levelsList[selectedLevelIndex].fourChoice.answers=newList;
      levels.onChangeLevel(levelsList);
  }

  const handleChangeAnswerText = (text: string) => {
    const newLevel = currentLevel;
    newLevel.fourChoice.answers[index].text = text;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleDeletAnswerText = ()=>{
    const newLevel = currentLevel;
    setHasText(false);
    newLevel.fourChoice.answers[index].text='';
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  }

  return (
    <div
      className={` relative
     
     ${answers.length == 5 && " md:w-[175px] md:h-[260px]"} 
     ${answers.length == 6 && " md:w-[155px] md:h-[260px]"} 
      hover:-translate-y-3 transition-all duration-500
      px-[7px]
     w-[180px] h-[260px]  flex items-center justify-center rounded-[13px] ${
       gozine.color
     }  border-[3px] border-black `}
      style={{ boxShadow: "4px 3px black" }}
    >
      <Image
        className="absolute top-[50px] right-[5px]"
        src={gozine.mask!}
        alt="mask"
      />
      <div
        className="cursor-pointer absolute top-[25px] left-[25px] md:top-[12px] md:left-[12px]  w-[35px] h-[35px] md:w-[30px] md:h-[30px] rounded-full border-[2px] border-white flex justify-center items-center"
        style={{ boxShadow: "4px 3px black" }}
        onClick={() => {
          currentLevel.fourChoice.isMultipleChoice
            ? multiSelectHandle(index)
            : selectHandle(index);
        }}
      >
        {gozine.isSelected && (
          <div className="w-[18px] h-[18px] rounded-full bg-[#28DE7C]"></div>
        )}
      </div>

      {answers[index].image ? (
        <AnswerImage
        onDelete={handleDeleteAnswerImage}
        image={answers[index].image["data_url"]}
        />
      ):hasText ?(
        <AnswerText
        value={answers[index].text!}
        onChange={handleChangeAnswerText}
        placeholder=""
        onDelete={handleDeletAnswerText}
        />
      ):null}

      <div className="absolute bottom-[24px] md:bottom-[17px] flex justify-center items-center gap-1">
      {(answers[index].image || hasText ) ? '': <div
          className={`
            ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#7900FF] `}
          style={{ boxShadow: "2px 2px black" }}
        >
          <Image
            src="/images/calculator.svg"
            alt=""
            width={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
            height={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
          />
        </div>}
        {(answers[index].image || hasText ) ? '': <div
          className={`
            ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
            ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
            cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#0066FF] `}
          style={{ boxShadow: "2px 2px black" }}
          onClick={()=>setHasText(true)}
        >
          <Image
            src="/images/edit.svg"
            alt=""
            width={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
            height={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
          />
        </div>}
        {(answers[index].image || hasText ) ? '': <div
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
        </div>}
        {answers.length > 3 && (
          <div
            className={`
           ${answers.length == 5 && "md:w-[27px] md:h-[27px]"}
           ${answers.length == 6 && "md:w-[27px] md:h-[27px]"}
           cursor-pointer w-[30px] h-[30px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#F03944] `}
            style={{ boxShadow: "2px 2px black" }}
            onClick={() => handleDelete(gozine)}
          >
            <Image
              src="/images/closecircle2.svg"
              alt=""
              width={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
              height={answers.length == 5 ? 15 : answers.length == 6 ? 13 : 20}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GozineCard;
