import React, { useEffect, useState } from "react";
import { Gozine } from "../../../hooks/useLevels";
import useAudioModal from "../../../hooks/useAudioModal";
import useAddImageModal from "../../../hooks/useAddImageModal";
import useLevels from "../../../hooks/useLevels";

import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd'
import { v4 as uuidv4 } from "uuid";
import SequenceAndOrderCard from "./SequenceAndOrderCard";

const SequenceAndOrder = () => {
  const audioModal = useAudioModal();
  const addImageModal = useAddImageModal();

  const levels = useLevels();

  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const question = currentLevel.sequenceAndOrder.question;

  const answers = currentLevel.sequenceAndOrder.answers;

  const handleChangeQuestion = (quest: string) => {
    const newLevel = currentLevel;
    newLevel.sequenceAndOrder.question = quest;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleLevelImageDelete = () => {
    const newLevel = currentLevel;
    newLevel.sequenceAndOrder.image = null;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleAddAnswer = (answer: Gozine) => {
    const newLevel = currentLevel;
    newLevel.extraAnswers.splice(0,1);
    if (newLevel.sequenceAndOrder.isLtr) {
      newLevel.sequenceAndOrder.answers = [
        ...newLevel.sequenceAndOrder.answers,
        answer,
      ];
    } else {
      newLevel.sequenceAndOrder.answers = [
        answer,
        ...newLevel.sequenceAndOrder.answers,
      ];
    }
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleChangeAnswers = (reorderedAnswers: Gozine[]) => {
    const newLevel = currentLevel;
    newLevel.sequenceAndOrder.answers = reorderedAnswers;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
    console.log(levels.levels[selectedLevelIndex].sequenceAndOrder.answers);
  };

  const handleDragDrop = (results: any) => {
    const { source, destination, type } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;
    if (type === "group") {
      const reorderedAnswers = [...answers];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedAnswer] = reorderedAnswers.splice(sourceIndex, 1);
      reorderedAnswers.splice(destinationIndex, 0, removedAnswer);

      

      return handleChangeAnswers(reorderedAnswers);
    }
  };

  const handleLtr = () => {
    const newLevel = currentLevel;
    newLevel.sequenceAndOrder.isLtr = newLevel.sequenceAndOrder.isLtr
      ? false
      : true;
    newLevel.sequenceAndOrder.answers =
      newLevel.sequenceAndOrder.answers.reverse();
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const colors = [
    "bg-[#FFD176]",
    "bg-[#B36DFF]",
    "bg-[#79FFB7]",
    "bg-[#FFDDD1]",
    "bg-[#FE4E13]",
    "bg-[#6BD3F1]",
  ];
  const textColors = [
    "text-[#B97A00]",
    "text-[#4A009A]",
    "text-[#00A14A]",
    "text-[#AC2400]",
    "text-[#FFB72A]",
    "text-[#010082]",
  ];

  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-4">
      <div
        className="md:w-[660px] md:h-[42px] w-[750px] h-[53px] hover:scale-105 transition-all duration-500 bg-[#6B00E2] rounded-[34px] border-[1px]  border-black flex items-center justify-between px-3 gap-4 cursor-pointer"
        style={{ boxShadow: "4px 3px black" }}
      >
        <div className="flex items-center justify-start gap-2">
          <div className="w-[32px] h-[32px] mr-5 rounded-full bg-[#FFB72A] border-[1px] border-black flex items-center justify-center">
            <img src="images/rahnamaIcon.svg" alt="rahnama" />
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
          <img src="images/arrowcircleup2.svg" alt="arrow" />
        </div>
      </div>
      <div className="md:h-[175px] h-[257px] flex flex-row justify-start items-end gap-5">
        <div
          className="relative md:w-[457px] md:h-[160px] w-[557px] h-[220px] hover:scale-105 transition-all duration-500 flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
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
            <img src="images/editIcon.svg" alt="edit" />
          </div>
          <textarea
            disabled={false}
            onChange={(e) => {
              handleChangeQuestion(e.target.value);
            }}
            value={question ? question : ""}
            placeholder={`سوالت رو اینجا تایپ کن عزیز من \n و از بقیه بپرس تا بهت جواب بدن تایید کنی \n تا سه خط میتونی سوال بنویسی `}
            rows={3}
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
        <div
          className="md:w-[300px] md:h-[175px] w-[347px] h-[263px] hover:scale-105 transition-all duration-500 border-dashed border-[2px] border-black rounded-[14px] bg-white flex flex-col items-center justify-center gap-4"
          style={{ boxShadow: "4px 3px black" }}
        >
          {currentLevel?.sequenceAndOrder?.image == null &&
          currentLevel?.sequenceAndOrder?.music == null &&
          currentLevel?.sequenceAndOrder?.video == null ? (
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex gap-2">
                <div
                  className="cursor-pointer relative w-[55px] h-[50px] flex items-center justify-center bg-[#FFB72A] border-dashed border-[#ffffff] border-[2px] rounded-[15px]"
                  onClick={() => addImageModal.onOpen("levelImage",null,null)}
                >
                  <img src="images/image.svg" alt="image" />
                  {/* <div className="absolute w-[20px] h-[20px] flex items-center justify-center bg-white rounded-full border-[2px] -right-[10px] border-black">
                  <img src="images/+.svg" alt="plus" />
                </div> */}
                </div>
                <div
                  className="cursor-pointer relative w-[55px] h-[50px] flex items-center justify-center bg-[#F6EDFF] border-dashed border-[#6B00E2] border-[2px] rounded-[15px]"
                  onClick={audioModal.onOpen}
                >
                  <img src="images/voicecircle.svg" alt="voice" />
                  <div
                    className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FFB72A] rounded-full border-[1px] -top-[17px] border-black"
                    style={{ boxShadow: "1px 1px black" }}
                  >
                    <img src="images/rahnamaIcon2.svg" alt="plus" />
                  </div>
                </div>
                <div className="cursor-pointer relative w-[55px] h-[50px] flex items-center justify-center bg-[#DDFFED] border-dashed border-[#28DE7C] border-[2px] rounded-[15px]">
                  <img src="images/videocircle.svg" alt="video" />
                  <div
                    className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FFB72A] rounded-full border-[1px] -top-[17px] border-black"
                    style={{ boxShadow: "1px 1px black" }}
                  >
                    <img src="images/rahnamaIcon2.svg" alt="plus" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <img src="images/info.svg" alt="info" />
                <p className="text-[13px] font-semibold text-black opacity-50">
                  میتونی یک تصویر , صدا یا ویدیو اضافه کنی
                </p>
              </div>
            </div>
          ) : currentLevel.sequenceAndOrder.music == null &&
            currentLevel.sequenceAndOrder.video == null ? (
            <div className="md:h-[175px] md:w-[175px] flex justify-center items-center group/levelImage  relative">
              <img
                className="h-full"
                src={currentLevel.sequenceAndOrder.image["data_url"]}
                alt=""
              />
              <div className="absolute w-[300px] h-[175px] rounded-[20px] bg-neutral-300 bg-opacity-40  hidden group-hover/levelImage:flex items-center  gap-2 justify-center transition-all duration-500">
                <button
                  className="  rounded-[15px] px-5 py-2 bg-white border-[3px] border-white group/remove border-dashed hover:border-purple-500 transition-all duration-500"
                  onClick={handleLevelImageDelete}
                >
                  <p className="text-[20px] text-gray-400 group-hover/remove:text-purple-500 transition-all duration-500">
                    پاک کردن
                  </p>
                </button>
              </div>
            </div>
          ) : currentLevel.sequenceAndOrder.image == null &&
            currentLevel.sequenceAndOrder.video == null ? (
            <p>موزیک</p>
          ) : (
            <p>ویدیو</p>
          )}
        </div>
      </div>

      <div className="flex justify-between  w-full gap-5">
        <DragDropContext onDragEnd={handleDragDrop}>
          <Droppable droppableId="ROOT" type="group" direction="horizontal">
            {(provided) => (
              <div
                className="flex flex-auto justify-center items-center gap-3 "
                dir="ltr"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {answers.map((gozine, index) => (
                  <Draggable
                    draggableId={gozine.id}
                    key={gozine.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="flex "
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <SequenceAndOrderCard index={index} gozine={gozine} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {answers.length < 6 && (
          <div className="flex flex-col justify-center">
            <div
              className="cursor-pointer w-[38px] h-[70px] hover:scale-110 transition-all duration-300 rounded-[29px] bg-[#7900FF] border-[1px] border-black flex justify-center items-center "
              style={{ boxShadow: "4px 3px black" }}
              onClick={() =>
                handleAddAnswer({
                  id: uuidv4(),
                  text: "",
                  color: currentLevel.extraAnswers[0].color,
                  mask:currentLevel.extraAnswers[0].mask,
                  isSelected: false,
                })
              }
            >
              <p className="text-white text-[33px] font-bold">+</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center w-full gap-5">
        <div
          className="flex flex-auto justify-center items-center gap-3"
          dir={!currentLevel.sequenceAndOrder.isLtr ? "" : "ltr"}
        >
          {answers.map((ans, index) => (
            <div
              className={`transition-all duration-500 ${
                answers.length == 5 && " md:w-[170px] md:h-[37px]"
              } 
     ${
       answers.length == 6 && " md:w-[155px] md:h-[37px]"
     }  w-[175px] h-[37px] rounded-[12px] border-[2px] border-black ${
                colors[index]
              } flex items-center justify-center`}
              style={{ boxShadow: "4px 3px black" }}
            >
              <p
                className={`text-[25px]   ${textColors[index]}  font-bold `}
              >
                
                {index + 1}
              </p>
            </div>
          ))}
        </div>
        {answers.length < 6 && (
          <div className="flex flex-col justify-center">
            <div className="w-[38px] h-[30px]"></div>
          </div>
        )}
      </div>
      <div
        className="flex justify-center items-center w-[250px] h-[44px] hover:scale-105 transition-all duration-500 gap-5 bg-white rounded-[38px] border-[1px] border-black  "
        style={{ boxShadow: "4px 3px black" }}
      >
        <div
          className={`relative flex justify-end items-center w-[50px] h-[25px]  ${
            currentLevel.sequenceAndOrder.isLtr ? " bg-[#F03944] " : ""
          } rounded-[31px] border-[1px] border-black p-[6px] transition-all duration-500 cursor-pointer `}
          onClick={handleLtr}
        >
          <div
            className={`absolute ${
              currentLevel.sequenceAndOrder.isLtr
                ? "translate-x-[20px] bg-white "
                : ""
            }  w-[15px] h-[15px] border-[1px] border-black  bg-[#F03944] rounded-full transition-all duration-500`}
          ></div>
        </div>
        <p className="text-[17px] font-bold">حالت چپ به راست</p>
      </div>
    </div>
  );
};

export default SequenceAndOrder;
