"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import Accueil from "@/components/Accueil";
import Event from "@/components/event/Event";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [page, setPage] = useState("accueil");

  return (
    <html lang="en">
      <body className={inter.className + " bg-[#000]"}>
        <Navbar setPage={setPage} />
        {page === "Home" ? (
          <Accueil setPage={setPage} />
        ) : page === "Event 1" ? (
          <Event
            description={"Event 1"}
            date={"2021-01-01"}
            heure={"10:00"}
            image={"/event1.jpg"}
            name={"Event 1"}
            place={"Place 1"}
          />
        ) : page === "Event 2" ? (
          <Event
            description={"Event 2"}
            date={"2021-01-01"}
            heure={"10:00"}
            image={"/event2.jpg"}
            name={"Event 2"}
            place={"Place 2"}
          />
        ) : (
          <div>404 page not found</div>
        )}
        <Footer />
      </body>
    </html>
  );
}
