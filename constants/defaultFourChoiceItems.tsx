
import { v4 as uuidv4 } from "uuid";

export const defaultItems=[
    {
      id: uuidv4(),
      text: null,
      color: "bg-[#ffb72a]",
       mask:"images/GozineMask.svg",
      isSelected: true,
    },
    {
      id: uuidv4(),
      text: null,
      color: "bg-[#7900FF]",
       mask:"images/GozineMask2.svg",
      isSelected: false,
    },
    {
      id: uuidv4(),
      text: null,
      color: "bg-[#B2FFD6]",
       mask:"images/GozineMask3.svg",
      isSelected: false,
    },
    {
      id: uuidv4(),
      text: null,
      color: "bg-[#FFDDD1]",
       mask:"images/GozineMask1.svg",
      isSelected: false,
    },
  ];

  export const extraAnswers=[
    {
        color:"bg-[#FE4E13]",
        mask:"images/GozineMask.svg",
    },
    {
        color:"bg-[#6BD3F1]",
        mask:"images/GozineMask3.svg",
    },
]