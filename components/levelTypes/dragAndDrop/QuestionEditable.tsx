
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

  interface QuestionEditableProps{
    index:number;
  }

const QuestionEditable:React.FC<QuestionEditableProps> = ({index}) => {


    const levels = useLevels();

  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const question = currentLevel.dragAndDrop.question;

  const handleChangeQuestion = (quest: string, index: number) => {
    const newLevel = currentLevel;
    newLevel.dragAndDrop.question[index].text = quest;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };



  const handleSetCaretPosition=(carPos:number,itmPos:number)=>{
    const newLevel = currentLevel;
    newLevel.dragAndDrop.caretPosition=carPos;
    newLevel.dragAndDrop.currentItemPosition=itmPos;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  }
  


  return (
    <div className='relative flex items-center justify-center '>
      {/* <input 
      type="text"
      className='focus:outline-none  focus:border-none border-none focus:ring-0 w-auto  bg-blue-500 '
      width='100%'
      value={question[index].text!}
      onChange={(e)=>{
        handleChangeQuestion(e.target.value, index);
        const caretPos = getCaretPosition(e.target!);
        handleSetCaretPosition(caretPos,index);
      }}
       /> */}
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

export default QuestionEditable