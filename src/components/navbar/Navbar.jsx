import React, { useContext } from "react";
import Links from "./links/Links";
import Styles from "./navbar.module.css";

import { Metal_Mania } from "next/font/google";
import { appContext } from "@/context/appContext";
const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });

const Navbar = ({}) => {
  const { theme } = useContext(appContext);

  return (
    <div
      className={Styles.container}
      style={{
        backgroundColor: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h1 className={metalMania.className + " text-2xl text-[#fe1900]"}>
        House Mafia
      </h1>
      <Links />
    </div>
  );
};

export default Navbar;
