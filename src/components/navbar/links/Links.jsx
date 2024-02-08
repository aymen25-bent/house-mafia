"use client";
import Link from "next/link";
import React from "react";
import Styles from "./links.module.css";
import { usePathname } from "next/navigation";

const tab = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Event 1",
    path: "/event1",
  },
  {
    title: "Event 2",
    path: "/event2",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = ({ setPage }) => {
  const pathname = usePathname();

  return (
    <div className={Styles.container}>
      {tab.map((element, index) => (
        <Link
          className={element.path === pathname ? `${Styles.active}` : ""}
          key={index}
          href="/"
          onClick={() => setPage(element.title)}
        >
          {element.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
