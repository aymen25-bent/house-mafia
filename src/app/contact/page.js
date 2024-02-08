import React from "react";
import { Metal_Mania } from "next/font/google";
import Button from "@/components/Button";

const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className={metalMania.className + " text-4xl text-[#fe1900]"}>
        ContactUs
      </h1>
      <form className="flex flex-col gap-5 justify-center items-center">
        <label className="text-[#fe1900] text-2xl">Name</label>
        <input
          className="border-2 border-[#fe1900] rounded-md p-4"
          type="text"
          placeholder="Name"
        />
        <label className="text-[#fe1900] text-2xl">Email</label>
        <input
          className="border-2 border-[#fe1900] rounded-md p-4"
          type="email"
          placeholder="Email"
        />
        <label className="text-[#fe1900] text-2xl">Message</label>
        <textarea
          className="border-2 border-[#fe1900] rounded-md p-4"
          type="text"
          placeholder="Message"
        />
        <Button text="Send Message" href={""} />
      </form>
    </div>
  );
};

export default Contact;
