"use client";
import React from "react";
import { Boxes } from "../Components/ui/background-boxes";
import { TypewriterEffectDemo } from "../Components/TypewriterEffectDemo";
import { cn } from "../lib/utlis";

export function BackgroundBoxesDemo() {
  const words = [
    { text: "Crafting" },
    { text: "scalable", className: "text-green-500 dark:text-blue-500"  },
    { text: "and" },
    { text: "efficient" },
    { text: "solutions", className: "text-green-500 dark:text-blue-500"  },
    { text: "with" },
    { text: "cutting-edge" },
    { text: "technology.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesom
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
      <div>
        <TypewriterEffectDemo words={words} />
      </div>
    </div>
  );
}
