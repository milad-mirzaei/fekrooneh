import React, { useRef } from "react";
import useLevels from "../hooks/useLevels";
import {
  eightXtwo,
  fiveXtwo,
  fourXtwo,
  sixXtwo,
  threeXtwo,
  twoXtow,
} from "../constants/defaultPairingItems";

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
  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levelsList[selectedLevelIndex];

  const handleChangeType = (type: string) => {
    const newLevel = currentLevel;
    newLevel.type = type;
    if (type == "چند گزینه ای") {
      newLevel.fourChoice.isMultipleChoice = true;
    } else if (type == "چهار گزینه ای") {
      newLevel.fourChoice.isMultipleChoice = false;
    }
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleChangeZaman = (zaman: number) => {
    const newLevel = currentLevel;
    newLevel.zaman = zaman;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleChangeEmtiaz = (emtiaz: number) => {
    const newLevel = currentLevel;
    newLevel.emtiaz = emtiaz;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleChangeSakhti = (sakhti: string) => {
    const newLevel = currentLevel;
    newLevel.sakhti = sakhti;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleChangeArrangeModel = (arngModel: string) => {
    const newLevel = currentLevel;
    newLevel.pairing.arrangeModel = arngModel;
    arngModel == "2 دسته 2 تایی"
      ? (newLevel.pairing.pairingItems = twoXtow)
      : arngModel == "3 دسته 2 تایی"
      ? (newLevel.pairing.pairingItems = threeXtwo)
      : arngModel == "4 دسته 2 تایی"
      ? (newLevel.pairing.pairingItems = fourXtwo)
      : arngModel == "5 دسته 2 تایی"
      ? (newLevel.pairing.pairingItems = fiveXtwo)
      : arngModel == "6 دسته 2 تایی"
      ? (newLevel.pairing.pairingItems = sixXtwo)
      : arngModel == "8 دسته 2 تایی"
      ? (newLevel.pairing.pairingItems = eightXtwo)
      : null;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const divRef = useRef<HTMLInputElement>(null);
  // const dropdownRef = useRef<HTMLInputElement>(null);

  // const handleScroll = ()=>{
  //   const divTop =divRef.current?.parentElement?.scrollTop;
  //   dropdownRef.current!.style.transform =`translateY(${divTop}px)`;
  // }

  // useEffect(() => {
  //   if (divRef.current) {
  //     divRef.current.parentNode?.addEventListener('scroll',handleScroll);
  //   }
  //   return ()=> divRef.current?.parentNode?.removeEventListener('scroll',handleScroll);
  // }, [])

  const handleOpenSelect = () => {
    divRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    handleOpen();
  };

  console.log(currentLevel.pairing.arrangeModel);

  return (
    <div
      ref={divRef}
      className="flex flex-col justify-start items-start w-full gap-2  transition-all duration-300 "
    >
      <div className="flex justify-start items-center gap-2 pr-5 transition-all duration-300">
        <img src={titleIcon} alt="gamepad" />
        <p className="text-[13px] font-semibold">{title}</p>
      </div>
      <div
        className={`relative flex justify-between items-center rounded-[25px]  pr-2 pt-3  md:w-[220px]  w-[280px]  ${
          isOpen ? "border-[3px] rounded-[10px] py-3" : "border-[1px] h-[50px]"
        }  border-black hover:border-[3px] transition-all duration-100  cursor-pointer `}
        onClick={handleOpenSelect}
      >
        <div className=" flex flex-col items-center">
          <div className="flex justify-between items-center  md:w-[210px] py-1 ">
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
              <p
                className={`${!selectedIcon && "pr-3"} text-[14px]  font-bold `}
              >
                {title == "مدل بازی"
                  ? currentLevel.type
                  : title == "امتیاز"
                  ? `${currentLevel.emtiaz} امتیاز`
                  : title == "درجه سختی"
                  ? currentLevel.sakhti
                  : title == "مدل چینش دسته ها"
                  ? currentLevel.pairing.arrangeModel
                  : `${currentLevel.zaman} ثانیه`}
              </p>
            </div>
            <div className=" w-[30px] h-[22px] ml-4 mt-1 rounded-[14px] bg-[#ffffff] border-black border-[1px] flex items-center justify-center">
              <img
                className={`${
                  isOpen && "rotate-180"
                } transition-all duration-300`}
                src="images/VectorDown.svg"
                style={{}}
                alt="vectorDown"
              />
            </div>
          </div>
          <div className="flex flex-col w-[200px] gap-2 py-2 ml-3 items-center max-h-[250px] overflow-auto transition-all duration-300">
            {isOpen &&
              choices.map((item, index) => {
                return (
                  <div
                    className={` w-full md:h-[45px] py-3 rounded-[30px] border-[1px] border-black px-4  flex items-center justify-start hover:bg-black hover:text-white transition-all duration-300 ${
                     ( parseInt(item) == currentLevel.zaman ||
                        parseInt(item) == currentLevel.emtiaz ||
                        item == currentLevel.sakhti ||
                        item == currentLevel.type ||
                        item == currentLevel.pairing.arrangeModel) &&
                      "bg-neutral-500 text-white"
                    } `}
                    onClick={() => {
                      title == "مدل بازی"
                        ? handleChangeType(item)
                        : title == "امتیاز"
                        ? handleChangeEmtiaz((index + 1) * 5)
                        : title == "درجه سختی"
                        ? handleChangeSakhti(item)
                        : title == "مدل چینش دسته ها"
                        ? handleChangeArrangeModel(item)
                        : handleChangeZaman((index + 1) * 30);
                    }}
                  >
                    <p className={`font-bold text-[14px]`}>
                      {title == "مدل بازی"
                        ? item
                        : title == "امتیاز"
                        ? `${item} امتیاز`
                        : title == "درجه سختی"
                        ? item
                        : title == "مدل چینش دسته ها"
                        ? item
                        : `${item} ثانیه`}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        {/* <div
          // ref={dropdownRef}
          className={` absolute  top-[50px] right-0 w-[235px]  max-h-[243px] overflow-auto scrollbar-hide bg-white border-[1px] border-black rounded-[30px] p-3 pt-7  z-40  flex flex-col gap-2 items-center justify-start transition-all duration-500   ${
            isOpen ? "opacity-100 scale-y-100" : "scale-y-0"
          } `}
          style={{ transformOrigin: "top" }}
        >
          {choices.map((item, index) => {
            return (
              <div
                className=" w-full md:h-[50px] py-3 rounded-[30px] border-[1px] border-black px-4  flex items-center justify-start hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => {
                  title == "مدل بازی"
                    ? handleChangeType(item)
                    : title == "امتیاز"
                    ? handleChangeEmtiaz((index + 1) * 5)
                    : title == "درجه سختی"
                    ? handleChangeSakhti(item)
                    : title == "مدل چینش دسته ها"
                    ? handleChangeArrangeModel(item)
                    : handleChangeZaman((index + 1) * 30);
                }}
              >
                <p className="font-bold text-[14px]">
                  {title == "مدل بازی"
                    ? item
                    : title == "امتیاز"
                    ? `${item} امتیاز`
                    : title == "درجه سختی"
                    ? item
                    : title == "مدل چینش دسته ها"
                    ? item
                    : `${item} ثانیه`}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default RightSideBarSelect;
