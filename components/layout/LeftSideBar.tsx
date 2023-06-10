import React from "react";
import LevelCard from "../LevelCard";
import useLevels from "../../hooks/useLevels";
import useAddLevelModal from "../../hooks/useAddLevelModal";

const LeftSideBar = () => {
  const levels = useLevels();
  const levelsList = levels.levels;
  const addLevelModal = useAddLevelModal();

  return (
    <div className=" h-full col-span-2 bg-white flex flex-col gap-2 items-center justify-start pt-4">
      <div
        className="w-[202px] h-[44px] rounded-[100px] hover:scale-95 transition-all duration-300 flex items-center justify-start gap-7 px-4 bg-[#E6E8FD] border-black border-[1px] cursor-pointer"
        style={{ boxShadow: "3px 2px black" }}
        onClick={()=>{addLevelModal.onOpen();console.log(levels.levels)}}
      >
        <div className="w-[17.5px] h-[17.5px] rounded-full bg-[#d9d9d9]"></div>
        <p className="font-bold">افزودن مرحله</p>
      </div>
      <div
        className="w-[202px] h-[44px] rounded-[100px] hover:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-start gap-7 px-4 bg-white border-black border-[1px]"
        style={{ boxShadow: "3px 2px black" }}
      >
        <div className="w-[17.5px] h-[17.5px] rounded-full bg-[#d9d9d9]"></div>
        <p className="font-bold">افزودن اسلاید</p>
      </div>
      <div className="levelsScroll  flex flex-col pt-2 items-center gap-2  w-[237px] mr-2 h-[557px] md:h-[475px] overflow-y-scroll">
        {levelsList.map((item, index) => (
          <div className="h-[225px]" key={index}>
            <LevelCard index={index} level={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
