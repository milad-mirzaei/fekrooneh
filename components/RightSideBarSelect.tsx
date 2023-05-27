import useLevels, { Level } from "@/hooks/useLevels";
import useSelectedLevel from "@/hooks/useSelectedLevel";
import React, { useEffect, useState } from "react";

interface RightSideBarSelectProps {
  titleIcon: string;
  title: string;
  selectedIcon?: string;
  isOpen: boolean;
  choices: string[];
  handleOpen: () => void;
}

const RightSideBarSelect: React.FC<RightSideBarSelectProps> = ({
  title,
  selectedIcon,
  titleIcon,
  isOpen,
  choices,
  handleOpen,
}) => {

  const levels = useLevels();
  const [levelsList, setLevelsList] = useState(levels.levels);
  const selectedLevelIndex = levelsList.findIndex((level)=>level.isSelected == true);
  // const levelsList = levels.levels;
  const currentLevel = levelsList[selectedLevelIndex];

  const [selectedModel, setSelectedModel] = useState(currentLevel.name);
  const [selectedZaman, setSelectedZaman] = useState(currentLevel.zaman);
  const [selectedEmtiaz, setSelectedEmtiaz] = useState(currentLevel.emtiaz);
  const [selectedSakhti, setSelectedSakhti] = useState(currentLevel.sakhti);

  const handleChangeName = (name: string) => {
    const index = levelsList.indexOf(currentLevel);
    const newLevel = currentLevel;
    newLevel.name = name;
    setLevelsList(levelsList.splice(index, 1, newLevel));
    levels.onChangeLevel(levelsList);
  };
  const handleChangeZaman = (zaman: number) => {
    const index = levelsList.indexOf(currentLevel);
    const newLevel = currentLevel;
    newLevel.zaman = zaman;
    setLevelsList(levelsList.splice(index, 1, newLevel));
    levels.onChangeLevel(levelsList);
  };
  const handleChangeEmtiaz = (emtiaz: number) => {
    const index = levelsList.indexOf(currentLevel);
    const newLevel = currentLevel;
    newLevel.emtiaz = emtiaz;
    setLevelsList(levelsList.splice(index, 1, newLevel));
    levels.onChangeLevel(levelsList);
  };
  const handleChangeSakhti = (sakhti: string) => {
    const index = levelsList.indexOf(currentLevel);
    const newLevel = currentLevel;
    newLevel.sakhti = sakhti;
    setLevelsList(levelsList.splice(index, 1, newLevel));
    levels.onChangeLevel(levelsList);
  };

  useEffect(() => {
    setLevelsList(levels.levels);
    setSelectedModel(currentLevel.name);
    setSelectedEmtiaz(currentLevel.emtiaz);
    setSelectedZaman(currentLevel.zaman);
    setSelectedSakhti(currentLevel.sakhti);
  }, [
    currentLevel,
    currentLevel.name,
    currentLevel.emtiaz,
    currentLevel.zaman,
    currentLevel.sakhti,
    levels.levels,
    selectedLevelIndex
  ]);
  return (
    <div className="flex flex-col justify-start items-start w-full gap-2  ">
      <div className="flex justify-start items-center gap-2 pr-5">
        <img src={titleIcon} alt="gamepad" />
        <p className="font-bold">{title}</p>
      </div>
      <div
        className="flex justify-between items-center px-4 md:w-[240px] md:h-[52px] w-[280px] h-[62px] border-[1px] border-black rounded-[50px] cursor-pointer "
        onClick={handleOpen}
      >
        <div className="flex gap-4 items-center">
          {selectedIcon && (
            <div className="relative w-[52px] h-[34px] ">
              <div className="absolute w-[34px] h-[34px] rounded-full mr-4  bg-[#eaeefb]"></div>
              <img
                className="absolute -left-2"
                src={selectedIcon}
                alt="4gozine"
              />
            </div>
          )}
          <p className={`${!selectedIcon && "pr-3"} font-['yekanbakhfat'] `}>
            {title == "مدل بازی"
              ? selectedModel
              : title == "امتیاز"
              ? `${selectedEmtiaz} امتیاز`
              : title == "درجه سختی"
              ? selectedSakhti
              : `${selectedZaman} ثانیه`}
          </p>
        </div>
        <div className="relative w-[31px] h-[24px] rounded-[14px] bg-[#dddddd] border-black border-[1px] flex items-center justify-center">
          <img
            className={`${isOpen && "rotate-180"} transition-all duration-300`}
            src="images/VectorDown.svg"
            style={{}}
            alt="vectorDown"
          />
           
            <div className={` absolute w-[235px]  bg-white border-[1px] border-black rounded-[30px] p-6 -bottom-[257px] z-40 -right-[190px] flex flex-col gap-2 items-center justify-start transition-all duration-200 ${isOpen ? 'opacity-100 scale-100':'scale-0'} `}>
              {choices.map((item, index) => {
                return (
                  <div
                    className="w-full h-[57px] rounded-[30px] border-[1px] border-black px-4  flex items-center justify-start hover:bg-black hover:text-white transition-all duration-300"
                    onClick={() => {
                      title == "مدل بازی"
                        ? handleChangeName(item)
                        : title == "امتیاز"
                        ? handleChangeEmtiaz((index + 1) * 5)
                        : title == "درجه سختی"
                        ? handleChangeSakhti(item)
                        : handleChangeZaman((index + 1) * 30);
                    }}
                  >
                    <p className="font-bold">
                      {title == "مدل بازی"
                        ? item
                        : title == "امتیاز"
                        ? `${item} امتیاز`
                        : title == "درجه سختی"
                        ? item
                        : `${item} ثانیه`}
                    </p>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBarSelect;
