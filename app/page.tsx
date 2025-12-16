"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const TIME_LIMIT = 20000;
  let stopEvent: any;

  const [count, setCount] = useState(0);
  const [curtainColor, setCurtainColor] = useState('');
  const [isWholeCurtainVisible, setIsWholeCurtainVisible] = useState(true);
  const [isHidedWholeCurtain, setIsHidedWholeCurtain] = useState(false);

  const incrementCount = () => {
    setCount(c => c + 1);
  }

  const decrementCount = () => {
    setCount(c => Math.max(0, c - 1));
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
    setIsWholeCurtainVisible(true);
  }

  const hideWholeCurtain = () => {
    setIsWholeCurtainVisible(false);
    setIsHidedWholeCurtain(true);
  }


  const refresh = (event: KeyboardEvent) => {
    if (event.key === 'r') {
      setCount(0);
      setCurtainColor('');
      setIsWholeCurtainVisible(true);
      setIsHidedWholeCurtain(false);
      clearTimeout(stopEvent);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', refresh);

    return () => {
      document.removeEventListener('keydown', refresh);
    };
  }, []);

  return (
    <div className="">
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-neutral-500">
        <h1 className="text-white text-9xl font-semibold">{count}</h1>
      </div>
      <div className={`curtain w-screen h-screen fixed top-0 left-0 ${curtainColor}`}></div>
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
        <button
          className="dec-count w-full h-full focus:outline-none focus-visible:outline"
          onClick={decrementCount}
          onPointerDown={showBlueCurtain}
          onPointerUp={hideCurtain}
          onPointerLeave={hideCurtain}
        >
        </button>
        <button
          className="inc-count w-full h-full focus:outline-none focus-visible:outline"
          onClick={incrementCount}
          onPointerDown={showRedCurtain}
          onPointerUp={hideCurtain}
          onPointerLeave={hideCurtain}
        >
        </button>
      </div>
      <div
        className={`whole-curtain w-screen h-screen fixed top-0 left-0 bg-yellow-800/20 ${isWholeCurtainVisible ? '' : 'hidden'}`}
        onClick={() => {
          if (isHidedWholeCurtain) return;
          hideWholeCurtain();
          stopEvent = setTimeout(() => {showWholeCurtain();}, TIME_LIMIT);
        }}
      ></div>
    </div>
  );
}
