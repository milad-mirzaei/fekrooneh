
import Descriptive from "@/components/levelTypes/descriptive/Descriptive";
import DialogBox from "@/components/levelTypes/dialogBox/DialogBox";
import DragAndDrop from "@/components/levelTypes/dragAndDrop/DragAndDrop";
import ChaharGozine from "@/components/levelTypes/fourChoice/ChaharGozine";
import Pairing from "@/components/levelTypes/pairing/Pairing";
import SequenceAndOrder from "@/components/levelTypes/sequenceAndOrder/SequenceAndOrder";
import TrueFalse from "@/components/levelTypes/trueFalse/TrueFalse";
import LevelsHook from "@/hooks/useLevels";

export default function Home() {

  const levels = LevelsHook();
  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levelsList[selectedLevelIndex];



  return (
    <div className="bg-canvasBg h-full">
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
    </div>
  )
}
