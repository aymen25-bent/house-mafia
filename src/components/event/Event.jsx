import Image from "next/image";
import styles from "./event.module.css";

import { Metal_Mania } from "next/font/google";
import Button from "../Button";

const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });

const Event = ({ name, description, image, date, heure, place }) => {
  return (
    <div className="flex flex-wrap p-10 gap-10 h-screen">
      <div>
        <Image src={image} alt={name} width={600} height={600} />
      </div>
      <div className="flex flex-col">
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

        <Button text="Buy Tickets !" href="event1" />
      </div>
    </div>
  );
};

export default Event;
