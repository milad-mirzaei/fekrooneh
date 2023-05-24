import { HtmlHTMLAttributes } from "react";

interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    isTitle?:boolean;
    fontSize?:number
    ref?:React.RefObject<HTMLInputElement>;
  }
  
  const Input: React.FC<InputProps> = ({ placeholder, value, type = "text", onChange, disabled, label ,isTitle,ref}) => {
    return (
      <div className="w-full">
        {label && <p className="text-xl text-white font-semibold mb-2">{label}</p>}
        <input
          disabled={disabled}
          onChange={onChange}
          value={value}
          ref={ref}
          placeholder={placeholder}
          type={type}
          className={`
            w-full
            p-4 
            pr-8
            text-lg 
            bg-white 
            border-[#aaaaaa] border-[1px]
            rounded-full
            outline-none
            text-black
            ${isTitle && "font-['yekanbakhfat']"}
            focus:border-black
            focus:border-[2px]
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
          `}
        />
      </div>
     );
  }
   
  export default Input;