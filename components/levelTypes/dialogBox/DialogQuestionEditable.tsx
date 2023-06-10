
import useLevels from '@/hooks/useLevels';
import React  from 'react'


function getCaretPosition(element: HTMLElement): number {
    let caretPosition = 0;
    const selection = window.getSelection();
  
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretPosition = preCaretRange.toString().length;
    }
  
    return caretPosition;
  }

  interface DialogQuestionEditableProps{
    index:number;
  }

const DialogQuestionEditable:React.FC<DialogQuestionEditableProps> = ({index}) => {


    const levels = useLevels();

  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const question = currentLevel.dialogBox.question;

  const handleChangeQuestion = (quest: string, index: number) => {
    const newLevel = currentLevel;
    newLevel.dialogBox.question[index].text = quest;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };



  const handleSetCaretPosition=(carPos:number,itmPos:number)=>{
    const newLevel = currentLevel;
    newLevel.dialogBox.caretPosition=carPos;
    newLevel.dialogBox.currentItemPosition=itmPos;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  }
  


  return (
    <div className='relative flex items-center justify-center my-2'>
    <div
    className='focus:outline-none p-[10px] font-bold text-[16px]'
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={(e)=>{
        if(e.key === 'Enter'){
          e.preventDefault();
        }
      }}
      onBlur={(e) => {
        handleChangeQuestion(e.currentTarget.textContent!, index);
        const caretPos = getCaretPosition(e.target!);
        handleSetCaretPosition(caretPos,index);
          
        
      }}
     
    >
      {question[index].text} 
    </div>
    
   
    </div>
  )
}

export default DialogQuestionEditable