"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import Accueil from "@/components/Accueil";
import Event from "@/components/event/Event";
import AppContext from "@/context/appContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContext>
        <Navbar />
        {children}
        <Footer />
      </AppContext>
    </html>
  );
}
