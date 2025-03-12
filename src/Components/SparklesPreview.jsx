"use client";
import React from "react";
import { SparklesCore } from "../Components/ui/sparkles";

export function SparklesPreview() {
  return (
    (<div
      className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1
        className="md:text-xl text-xl lg:text-5xl font-bold text-center text-white relative z-20">
        I'm a Frontend & Backend Devloper.🚀✨
      </h1>
      <p
        className="md:text-xl text-xl lg:text-2xl font-bold text-center text-white relative z-20 my-5">
        Eat logic, Sleep syntax, Code dreams.🧠💻✨
      </p>
      <p
        className="md:text-xl text-xl lg:text-xl font-bold text-center text-white relative z-20">
        Live to Code, Code to Live. ⚡💻
      </p>
      
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>)
  );
}
