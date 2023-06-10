import React from "react";
import useLevels, { Level } from "../hooks/useLevels";

interface LevelCardProps {
  index: number;
  level: Level;
}

const LevelCard: React.FC<LevelCardProps> = ({ index, level }) => {
  const levels = useLevels();
  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );

  const selectHandle = (index: number) => {
    const newList = levelsList;
    newList[selectedLevelIndex].isSelected = false;
    newList[index].isSelected = true;
    levels.onChangeLevel(newList);
  };

  const handleDelete = (level: Level) => {

    if (index == selectedLevelIndex && selectedLevelIndex > 0) {
      selectHandle(selectedLevelIndex-1);
      console.log(levels);
      console.log(level);
      levels.onDelete(level);
    } else {
      levels.onDelete(level);
    }
  };

  const handleCopy = (level: Level) => {
    if (index == selectedLevelIndex) {
      level.isSelected = false;
      console.log(level);
      levels.onCopy(level);
    } else {
      levels.onCopy(level);
    }
  };

  return (
    <div
      className={`relative w-[202px] hover:scale-95 transition-all duration-500 flex flex-col justify-start pt-3 h-[165px] ${
        level.isSelected ? "bg-[#6B00E2]" : "bg-[#E6E7F6]"
      } cursor-pointer rounded-[20px] border-[1px] border-black`}
      draggable
      style={{ boxShadow: "3px 2px black" }}
      onClick={() => selectHandle(index)}
    >
      <div className="flex items-center  justify-center px-4 ">
        <div className="w-[55px] flex justify-start pt-[2px]">
          <p
            className={`text-black text-[12px] ${
              level.isSelected && "text-white"
            }`}
          >
            مرحله {index + 1} :
          </p>
        </div>
        <div className="w-[110px] flex justify-start">
          <p
            className={`text-black font-bold text-[13px] line-clamp-1 ${
              level.isSelected && "text-white"
            }`}
          >
            {level.type}
          </p>
        </div>
        <div className="flex gap-2 justify-end  mr-0 mt-1">
          <img
            onClick={(event) =>{event.stopPropagation(); handleCopy(level)}}
            src={`${
              level.isSelected ? "images/copyWhite.svg" : "images/copy.svg"
            }`}
            alt="copy"
          />
          <img
            onClick={(event) =>{event.stopPropagation(); handleDelete(level)}}
            src={`${
              level.isSelected
                ? "images/closesquareWhite.svg"
                : "images/closesquare.svg"
            }`}
            alt="delete"
          />
        </div>
      </div>
      <div className="absolute bottom-0 w-[202px] h-[117px] bg-[#F5F5F5] bg-levelCard border-[1px] border-black rounded-[20px] flex justify-center items-center">
        <img src={level.icon} alt="4gozine" />
      </div>
      {level.rahnamaColor && level.rahnamaIcon && (
        <div
          className="absolute -right-5 bottom-14 flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#f03944] border-[2px] border-black"
          style={{ boxShadow: "3px 2px black" }}
        >
          <img src="images/infocircle.svg" alt="info" />
        </div>
      )}
    </div>
  );
};

export default LevelCard;
