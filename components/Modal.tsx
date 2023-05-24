import React from 'react'

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    body?: React.ReactElement;
}

const Modal:React.FC<ModalProps> = ({isOpen,onClose,onSubmit,body}) => {
  if (!isOpen) {
    return null;
  }
  
  return (
    <div
      className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-700
          bg-opacity-60
        "
        dir="rtl"
    >
      <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
        {/*content*/}
        <div
          className="
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
            
            "
        > 
        {body}
        </div>
        </div>
      </div>
  );
}

export default Modal