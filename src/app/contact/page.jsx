"use client";

import React, { useState } from "react";
import { Metal_Mania } from "next/font/google";
import Button from "@/components/Button";

const metalMania = Metal_Mania({ subsets: ["latin"], weight: "400" });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Form Submitted");
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className={metalMania.className + " text-4xl text-[#fe1900]"}>
        Contact Us
      </h1>
      <form
        className="flex flex-col gap-5 justify-center items-center"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="text-[#fe1900] text-2xl">Name</label>
        <input
          className="border-2 border-[#fe1900] rounded-md p-4 text-black"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
        <label className="text-[#fe1900] text-2xl">Email</label>
        <input
          className="border-2 border-[#fe1900] rounded-md p-4 text-black"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
        <label className="text-[#fe1900] text-2xl">Message</label>
        <textarea
          className="border-2 border-[#fe1900] rounded-md p-4 text-black"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        {errors.message && (
          <span className="text-red-500">{errors.message}</span>
        )}
        {/* <Button text="Send Message" /> */}
        <button
          className="bg-[#FE1900] text-white px-10 py-4 rounded-full shadow-2xl font-bold mt-10 hover:bg-[#FE1900] hover:text-black transition duration-300 ease-in-out"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
