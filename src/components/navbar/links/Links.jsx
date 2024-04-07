"use client";
import Link from "next/link";
import React, { useContext } from "react";
import Styles from "./links.module.css";
import { usePathname } from "next/navigation";

import { appContext } from "@/context/appContext";
import { FaSun, FaMoon } from "react-icons/fa";

const tab = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Evenements",
    path: "/evenements",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Admin",
    path: "/admin",
  },
];

const Links = ({}) => {
  const pathname = usePathname();

  const { theme, toggleTheme } = useContext(appContext);

  return (
    <div className={Styles.container}>
      {tab.map((element, index) => (
        <Link
          className={element.path === pathname ? `${Styles.active}` : ""}
          key={index}
          href={element.path}
        >
          {element.title}
        </Link>
      ))}
      {theme === "dark" ? (
        <FaSun
          size={20}
          onClick={toggleTheme}
          style={{ color: "#fe1900", cursor: "pointer" }}
        />
      ) : (
        <FaMoon
          size={20}
          onClick={toggleTheme}
          style={{ color: "#fe1900", cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default Links;
