import Image from "next/image";
import styles from "./event.module.css";

import { Metal_Mania } from "next/font/google";
import Button from "../Button";
import { useContext } from "react";
import { appContext } from "@/context/appContext";

const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });

const Event = ({ name, description, image, date, heure, place }) => {
  const { theme } = useContext(appContext);

  return (
    <div className="flex flex-wrap p-10 gap-10 ">
      <div>
        <Image src={image} alt={name} width={600} height={600} />
      </div>
      <div
        className="flex flex-col"
        style={{
          backgroundColor: theme === "dark" ? "#000" : "#fff",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <h1 className={metalMania.className + " text-6xl text-[#fe1900] "}>
          {name}
        </h1>
        <p className="text-2xl">{description}</p>
        <p>
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>
          {heure} at {place}
        </p>

        <Button text="Buy Tickets !" href="" />
      </div>
    </div>
  );
};

export default Event;
