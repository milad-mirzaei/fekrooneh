import usePreviewModal from '@/hooks/usePreviewModal';
import React from 'react'
import FourChoiceView from '../PlayView/FourChoiceView';

interface PreviewModalProps{
}


const PreviewModal:React.FC<PreviewModalProps> = () => {

    const previewModal = usePreviewModal();
    const isOpen = previewModal.isOpen;
    const onClose = previewModal.onClose;

    const currentLevel = previewModal.currentLevel;

    const body = currentLevel?.type=='چهار گزینه ای'?<FourChoiceView/>:<div></div>
     



    if (!isOpen) {
        return null;
      }
    
      return (
        <div
          className={`
              justify-center 
              items-center 
              flex 
              overflow-x-hidden 
              overflow-y-auto 
              fixed
              backdrop-blur-sm
              inset-0 
              z-50 
              outline-none 
              focus:outline-none
              bg-opacity-60
              bg-neutral-100
              transition-all
                duration-300
                ${
                  isOpen
                    ? "scale-100 opacity-100"
                    : " scale-0 opacity-0  bg-transparent -translate-x-[130px] -translate-y-[410px]"
                }
            `}
          dir="rtl"
          onClick={onClose}
        >
          <div className="relative w-full h-full p-[70px] ">
            <div
              className={`
                h-full
                lg:h-auto
                border-0 
                rounded-3xl 
                shadow-lg 
                relative 
                flex 
                flex-col 
                w-full 
                bg-white 
                outline-none 
                focus:outline-none
                
                `}
              onClick={(e) => e.stopPropagation()}
            >
              {body}
            </div>
          </div>
        </div>
      );
}

export default PreviewModal;