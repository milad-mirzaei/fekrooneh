import React from "react";
import AudioModal from "./components/modals/AudioModal";
import SettingsModal from "./components/modals/SettingsModal";
import AddImageModal from "./components/modals/AddImageModal";
import AddLevelModal from "./components/modals/AddLevelModal";
import Layout from "./components/Layout";
import ChaharGozine from "./components/levelTypes/fourChoice/ChaharGozine";
import useLevels from "./hooks/useLevels";
import TrueFalse from "./components/levelTypes/trueFalse/TrueFalse";
import SequenceAndOrder from "./components/levelTypes/sequenceAndOrder/SequenceAndOrder";
import Pairing from "./components/levelTypes/pairing/Pairing";
import Descriptive from "./components/levelTypes/descriptive/Descriptive";
import DragAndDrop from "./components/levelTypes/dragAndDrop/DragAndDrop";
import DialogBox from "./components/levelTypes/dialogBox/DialogBox";


const GameBuilderApp = () => {
  const levels = useLevels();
  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levelsList[selectedLevelIndex];

  return (
    < div className="font-['Shabnam']">
      <AudioModal />
      <SettingsModal />
      <AddImageModal />
      <AddLevelModal />
      <Layout>
        <div className="bg-canvasBg h-full">
          {currentLevel.type == "چهار گزینه ای" ||
          currentLevel.type == "چند گزینه ای" ? (
            <ChaharGozine />
          ) : currentLevel.type == "درست و غلط" ? (
            <TrueFalse />
          ) : currentLevel.type == "توالی و ترتیب" ? (
            <SequenceAndOrder />
          ) : currentLevel.type == "جفت سازی" ? (
            <Pairing /> )
            : currentLevel.type == "تشریحی" ?(
              <Descriptive />
            ): currentLevel.type == "کشیدن و رها کردن" ?(
              <DragAndDrop />
            ): currentLevel.type == "دیالوگ باکس" ?(
              <DialogBox/>
            ):
            <div></div>
          }
          {/* <GameBuilderBoard/> */}
        </div>
      </Layout>
    </div>
  );
};

export default GameBuilderApp;
