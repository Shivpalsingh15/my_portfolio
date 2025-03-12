"use client";
import { TypewriterEffect } from "../Components/ui/typewriter-effect";

export function TypewriterEffectDemo({words}) {

  return (
    
   
    (<><span className="flex flex-col items-center justify-center relative z-20  ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffect words={words} />
    </span> 
      <span
        className="flex justify-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10   relative z-20 mx-auto w-fit">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </span>
    </>)
  );
}
