import React from "react";
import { BackgroundBoxesDemo } from "../../Components/BackgroundBoxesDemo";
import { WorldMapDemo } from "../../Components/WorldMapDemo";
import { SignupFormDemo } from "../../Components/SignupFormDemo";
import { TimelineDemo } from "../../Components/TimelineDemo";
import { SparklesPreview } from "../../Components/SparklesPreview";
import { ThreeDCardDemo } from "../../Components/ThreeDCardDemo";
import { LampDemo } from "../../Components/LampDemo";
// import { FloatingDockDemo } from "../../Components/FloatingDockDemo";

export default function page() {
  return (
    <div>
      <div>
        <BackgroundBoxesDemo />
        {/* <FloatingDockDemo/> */}
      </div>
     
      <div>

        <SparklesPreview />
      </div>
      <div className="md:grid grid-cols-2">

        <LampDemo />
        <ThreeDCardDemo />
      </div>
      <div>

        <TimelineDemo />
      </div>
      <div className="md:grid md:grid-cols-2  ">
        <WorldMapDemo />
        <SignupFormDemo />
      </div>
      <div>
      </div>
    </div>
  );
}
