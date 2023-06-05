import React, { useRef, useState } from "react";
import Modal from "../Modal";


import GameBgAudioCard from "../GameBgAudioCard";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillPauseBtnFill,
  BsFillPauseFill,
  BsFillPlayFill,
} from "react-icons/bs";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";
import AudioModalHook from "../../hooks/useAudioModal";
import useGameVoices from "../../hooks/useGameVoices";
import useGameMusics from "../../hooks/useGameMusics";

const AudioModal = () => {
  const audioModal = AudioModalHook();
  const useVoices = useGameVoices();
  const voiceRef = useRef<HTMLAudioElement>(null);
  const voicePishRef = useRef<HTMLAudioElement>(null);
  const musicPishRef = useRef<HTMLAudioElement>(null);

  const MAX =20;

  const handleVolume = (e:React.ChangeEvent<HTMLInputElement>,ref:any):void=>{
    const {value} = e.target;
    const volume = Number(value)/MAX;
    ref.current.volume=volume;
  }

  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    if (useVoices.voices.length > 0) {
      useVoices.onChangeVoice({ voice: url, title: "ویس" });
    } else {
      useVoices.onAdd({ voice: url, title: "ویس" });
    }
  };

  const useMusics = useGameMusics();
  const selectedMusicIndex = useMusics.musics.findIndex(
    (music) => music.isSelected == true
  );

  const [step, setStep] = useState(1);

  const [play, setPlay] = useState(false);

  const [pishPlay, setPishPlay] = useState(false);

  const toggleAudio = () => {
    if (play) {
      voiceRef.current?.pause();
      setPlay(false);
    } else {
      voiceRef.current?.play();
      setPlay(true);
    }
  };

  const togglePishAudio = () => {
    if (pishPlay) {
      voicePishRef.current?.pause();
      musicPishRef.current?.pause();
      setPishPlay(false);
    } else {
      voicePishRef.current?.play();
      musicPishRef.current?.play();
      setPishPlay(true);
    }
  };

  const bodyContent1 = (
    <div className="w-full h-full p-7 flex flex-col items-center gap-2 transition-all duration-500 ">
      <h1 className="pb-[25px] font-bold text-[22px]  text-gray-400 ">
        موزیک پس زمینت رو انتخاب کن
      </h1>
      <div className="flex flex-row justify-center gap-2">
        {useMusics.musics.map((item, index) => (
          <GameBgAudioCard
            music={item.music}
            image={item.image}
            name={item.title}
            index={index}
            key={index}
          />
        ))}
      </div>
      <div className=" flex w-full justify-center items-center pt-[30px] gap-4">
        <div
          className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center gap-2 bg-black cursor-pointer"
          onClick={() => setStep(2)}
        >
          <BsFillArrowRightCircleFill color="white" size={25} />
          <p className="text-[20px] font-bold text-white">بعدی</p>
        </div>
        <div
          className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center bg-[#D7D7D7] cursor-pointer"
          onClick={audioModal.onClose}
        >
          <p className="text-[20px] font-bold text-black">انصراف</p>
        </div>
      </div>
    </div>
  );

  const bodyContent2 = (
    <div className="w-full h-full p-7 flex flex-col items-center gap-2 ">
      <h1 className="pb-[25px] font-bold text-[22px]  text-gray-400 ">
        با صدات راهنماییش کن
      </h1>
      <div className="flex flex-col justify-center items-center gap-5 ">
        {useVoices.voices.length == 0 && (
          <AudioRecorder
            onRecordingComplete={addAudioElement}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            downloadOnSavePress={false}
            downloadFileExtension="mp3"
            classes={{ AudioRecorderClass: "text-white" }}
          />
        )}
        {useVoices.voices.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row items-center gap-2 justify-center">
              <div
                className="w-[50px] h-[50px] group bg-neutral-200 rounded-[20px] cursor-pointer flex items-center justify-center"
                onClick={() => useVoices.onDelete(useVoices.voices[index])}
              >
                <AiFillDelete
                  className="text-gray-400 group-hover:text-red-600 transition-all duration-200 "
                  size={22}
                />
              </div>

              <div
                className="w-[50px] h-[50px] group bg-neutral-200 rounded-[20px] cursor-pointer flex items-center justify-center"
                onClick={toggleAudio}
              >
                {play ? (
                  <BsFillPauseFill
                    className="text-gray-400 group-hover:text-purple-600 transition-all duration-200 "
                    size={22}
                  />
                ) : (
                  <BsFillPlayFill
                    className="text-gray-400 group-hover:text-purple-600 transition-all duration-200 "
                    size={22}
                  />
                )}
              </div>
              <div className="relative w-[200px] h-[200px] rounded-[30px] border-[4px] border-neutral-300 flex items-center justify-center">
                <Image
                  src="/images/profile.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="rounded-[30px]"
                />
              </div>
              <audio src={item.voice} ref={voiceRef}></audio>
            </div>
          </div>
        ))}
        <div id="voice"></div>
      </div>
      <div className=" flex w-full justify-center items-center pt-[30px] gap-4">
        <div
          className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center gap-2 bg-black cursor-pointer"
          onClick={() => setStep(3)}
        >
          <BsFillArrowRightCircleFill color="white" size={25} />
          <p className="text-[20px] font-bold text-white">مرحله بعد</p>
        </div>
        <div
          className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center bg-[#D7D7D7] cursor-pointer gap-2"
          onClick={() => setStep(1)}
        >
          <p className="text-[20px] font-bold text-black">قبلی</p>
          <BsFillArrowLeftCircleFill color="black" size={25} />
        </div>
      </div>
    </div>
  );

  const bodyContent3 = (
    <div className="w-full h-full p-7 flex flex-col items-center gap-2 ">
      <h1 className="pb-[25px] font-bold text-[22px]  text-gray-400 ">
        پیش نمایش
      </h1>
      <div className="flex flex-row justify-center gap-2">
        <div className=" flex-1 w-[320px]">

        <div className="flex flex-col gap-5  h-full px-7 justify-center items-center ">
          <p className="font-bold text-[16px] text-gray-500">میزان صدا را تنظیم کنید</p>
          <div className="flex justify-start gap-3 items-center">
          <div className="h-[50px] bg-neutral-100 rounded-[20px] p-4 flex justify-start items-center ">
            <input type="range" min={0} max={20} onChange={(e)=>handleVolume(e,musicPishRef)} />
          </div>
          <p className="font-bold text-[16px]">موزیک پس زمینه</p>
          </div>
          <div className="flex justify-start gap-3 items-center">
          <div className="h-[50px] bg-neutral-100 rounded-[20px] p-4 flex justify-center items-center ">
            <input type="range" min={0} max={20} onChange={(e)=>handleVolume(e,voicePishRef)}/>
          </div>
          <p className="font-bold text-[16px]">صدای شما</p>
          </div>
        </div>
        </div>
        <div className=" w-[300px] flex justify-center ">

        <div className="relative w-[200px] h-[200px] group bg-purple-500 rounded-[30px] flex justify-center items-center">
        <Image
            src={`/${useMusics.musics[selectedMusicIndex].image}`}
            alt="image"
            className="w-[192px] h-[192px] rounded-[30px]"
          />
          <div className="absolute flex justify-center items-center group-hover:bg-gray-400 group-hover:bg-opacity-40 transition-all duration-400 w-[200px] h-[200px] rounded-[30px]">
            {pishPlay?
            <BsFillPauseFill className="hidden group-hover:flex cursor-pointer transition-all duration-400" size={70} color="white" onClick={togglePishAudio}  />
            :
            <BsFillPlayFill className="hidden group-hover:flex cursor-pointer transition-all duration-400" size={70} color="white" onClick={togglePishAudio}  />}
          </div>
          { useVoices.voices.length>0 && <div className="absolute w-[50px] h-[50px] rounded-[20px] bg-red-500 right-2 bottom-2">
            <Image src='/images/profile.jpg' alt="profile" width={50} height={50} className="rounded-[20px]" />
          </div>}
          
        </div>
        </div>
        
      </div>
      <div className=" flex w-full justify-center items-center pt-[30px] gap-4">
        <div
          className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center gap-2 bg-black cursor-pointer"
          onClick={audioModal.onClose}
        >
          <p className="text-[20px] font-bold text-white">تمام</p>
        </div>
        <div
          className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center bg-[#D7D7D7] cursor-pointer gap-2"
          onClick={() => {
            setStep(2);
          }}
        >
          <p className="text-[20px] font-bold text-black">قبلی</p>
          <BsFillArrowLeftCircleFill color="black" size={25} />
        </div>
      </div>
      <audio src={useVoices.voices.length>0 ? useVoices.voices[0].voice:''} ref={voicePishRef}/>
      <audio src={useMusics.musics[selectedMusicIndex].music} ref={musicPishRef}/>
    </div>
    
  );

  return (
    <Modal
      isOpen={audioModal.isOpen}
      body={step == 1 ? bodyContent1 : step == 2 ? bodyContent2 : bodyContent3}
      onClose={audioModal.onClose}
    />
  );
};

export default AudioModal;
