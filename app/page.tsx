"use client"
import { useState } from "react";

export default function Home() {

  const TIME_LIMIT = 20000;

  const [count, setCount] = useState(0);
  const [curtainColor, setCurtainColor] = useState('');
  const [wholeCurtainFlag, setWholeCurtainFlag] = useState(1);
  const [isHidedWholeCurtain, setIsHidedWholeCurtain] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    if (count <= 0) return;
    setCount(count -1);
  }

  const showCurtain = (color: string) => {
    setCurtainColor(color);
  }

  const showBlueCurtain = () => {
    showCurtain('bg-blue-800/10');
  }

  const showRedCurtain = () => {
    showCurtain('bg-red-800/10');
  }

  const hideCurtain = () => {
    setCurtainColor('');
  }

  const showWholeCurtain = () => {
    setWholeCurtainFlag(1);
  }

  const hideWholeCurtain = () => {
    setWholeCurtainFlag(0);
    setIsHidedWholeCurtain(1);
  }

  return (
    <div className="">
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-neutral-500">
        <h1 className="text-white text-9xl font-semibold">{count}</h1>
      </div>
      <div className={`curtain w-screen h-screen fixed top-0 left-0 ${curtainColor}`}></div>
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
        <button 
          className="dec-count w-full h-full"
          onClick={decrementCount}
          onMouseDown={showBlueCurtain}
          onMouseUp={hideCurtain}
        >
        </button>
        <button
          className="inc-count w-full h-full"
          onClick={incrementCount}
          onMouseDown={showRedCurtain}
          onMouseUp={hideCurtain}
        >
        </button>
      </div>
      <div
        className={`whole-curtain w-screen h-screen fixed top-0 left-0 bg-yellow-800/20 ${wholeCurtainFlag ? '' : 'hidden'}`}
        onClick={() => {
          if (isHidedWholeCurtain) return;
          hideWholeCurtain();
          setTimeout(() => {showWholeCurtain();}, TIME_LIMIT);
        }}
      ></div>
    </div>
  );
}
