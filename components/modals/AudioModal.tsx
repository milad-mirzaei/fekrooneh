import React, { useState } from "react";
import Modal from "../Modal";
import useAudioModal from "@/hooks/useAudioModal";
import GameBgAudioCard from "../GameBgAudioCard";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import useGameMusics from "@/hooks/useGameMusics";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const AudioModal = () => {
  const audioModal = useAudioModal();

  // const ExampleComponent = () => {
  //   const recorderControls = useAudioRecorder()
  //   const addAudioElement = (blob) => {
  //     const url = URL.createObjectURL(blob);
  //     const audio = document.createElement("audio");
  //     audio.src = url;
  //     audio.controls = true;
  //     document.body.appendChild(audio);
  //   };

  // const {
  //   startRecording,
  //   stopRecording,
  //   togglePauseResume,
  //   recordingBlob,
  //   isRecording,
  //   isPaused,
  //   recordingTime,
  //   mediaRecorder
  // } = useAudioRecorder();

  const useMusics = useGameMusics();
  const selectedMusicIndex = useMusics.musics.findIndex(
    (music) => music.isSelected == true
  );

  // const audios = [
  //     {
  //         title:'موزیک 1',
  //         url:'musics/1.mp3',
  //         imgUrl:'images/music1.jpg',
  //     },
  //     {
  //         title:'موزیک 2',
  //         url:'musics/2.mp3',
  //         imgUrl:'images/music2.jpg'
  //     },
  //     {
  //         title:'موزیک 3',
  //         url:'musics/3.mp3',
  //         imgUrl:'images/music3.jpg'
  //     },
  //     {
  //         title:' موزیک 4',
  //         url:'musics/4.mp3',
  //         imgUrl:'images/music4.jpg'
  //     },
  //     {
  //         title:'موزیک 5',
  //         url:'musics/5.mp3',
  //         imgUrl:'images/music5.jpg'
  //     },
  // ]

  const [step, setStep] = useState(1);

  const bodyContent1 = (
    <div className="w-full h-full p-7 flex flex-col items-center gap-2 ">
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
        مرحله 2
      </h1>
      <div className="flex flex-row justify-center gap-2 bg-red-400">
        salam
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
        مرحله 3
      </h1>
      <div className="flex flex-row justify-center gap-2"></div>
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
    </div>
  );

  return (
    <Modal
      isOpen={audioModal.isOpen}
      body={step == 1 ? bodyContent1 : step == 2 ? bodyContent2 : bodyContent3}
    />
  );
};

export default AudioModal;
