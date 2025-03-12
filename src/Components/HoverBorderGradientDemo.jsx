"use client";
import React from "react";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";
import Link from 'next/link'

export function HoverBorderGradientDemo() {
  return (
    (<Link href="/portfolio"><div className="my-10  flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-md"
        as="button"
        className=" dark:bg-black bg-white text-black dark:text-white flex items-center space-x-1">
       
        <p  >View Journey</p>
       
      </HoverBorderGradient>
    </div></Link>)
  );
}
 
