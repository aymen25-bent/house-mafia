import React from "react";
import Links from "./links/Links";
import Styles from "./navbar.module.css";

import { Metal_Mania } from "next/font/google";

const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });

const Navbar = ({ setPage }) => {
  return (
    <div className={Styles.container}>
      <h1 className={metalMania.className + " text-2xl text-[#fe1900]"}>
        House Mafia
      </h1>
      <Links setPage={setPage} />
    </div>
  );
};

export default Navbar;
