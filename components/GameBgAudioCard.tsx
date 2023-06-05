
import React, { useRef, useState } from "react";

import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import useGameMusics from "../hooks/useGameMusics";

interface GameBgAudioCardPops {
  music: string;
  image: string;
  name: string;
  index: number;
}

const GameBgAudioCard: React.FC<GameBgAudioCardPops> = ({
  music,
  image,
  name,
  index,
}) => {
  const [play, setPlay] = useState(false);
  const musicRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (play) {
      musicRef.current?.pause();
      setPlay(false);
    } else {
      musicRef.current?.play();
      setPlay(true);
    }
  };

  const useMusics = useGameMusics();
  const selectedIndex = useMusics.musics.findIndex(
    (music) => music.isSelected == true
  );

  const selectHandle = (index: number) => {
    const newList = useMusics.musics;
    newList[selectedIndex].isSelected = false;
    newList[index].isSelected = true;
    useMusics.onChangeMusic(newList);
  };

  return (
    <div
      className={`w-[120px] h-[220px] hover:-translate-y-3 transition-all duration-500 bg-neutral-100 rounded-[22px] flex flex-col items-center justify-start gap-2 border-[3px] overflow-hidden ${
        selectedIndex == index && "border-purple-600"
      }  cursor-pointer`}
      onClick={() => selectHandle(index)}
    >
      <div className="w-[120px] h-[120px] px-[2px]">
        <img className="rounded-t-[20px]" src={image} alt="image" />
      </div>
      <p className="font-bold text-[17px]">{name}</p>
      <div
        className="w-[40px] h-[40px] rounded-[15px] bg-neutral-200 flex justify-center items-center cursor-pointer"
        onClick={toggleAudio}
      >
        {play ? (
          <AiOutlinePauseCircle size={25} color="purple" />
        ) : (
          <AiOutlinePlayCircle size={25} color="purple" />
        )}
      </div>
      <audio src={music} ref={musicRef} />
    </div>
  );
};

export default GameBgAudioCard;
