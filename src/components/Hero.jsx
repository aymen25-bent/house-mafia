import Image from "next/image";

import { Metal_Mania } from "next/font/google";
import Link from "next/link";
import Button from "./Button";

const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });

const Hero = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1
        className={
          metalMania.className + " text-9xl text-center text-[#FE1900]"
        }
      >
        Swedish House Mafia
      </h1>
      <h2
        className={
          metalMania.className + " text-6xl text-center text-[#FE1900]"
        }
      >
        The Best House Group
      </h2>

      <Button text="Check Events !" href="event1" />
    </div>
  );
};

export default Hero;
