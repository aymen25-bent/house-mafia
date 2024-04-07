"use client";
import { appContext } from "@/context/appContext";
import React, { useState, useEffect, useContext } from "react";

const Admin = () => {
  const { theme } = useContext(appContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    place: "",
  });
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.title.trim()) {
      errors.title = "Title is required";
    }
    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required";
    }
    if (!formData.place.trim()) {
      errors.place = "Place is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddEvent = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setMessage("Event added successfully");
        setFormData({
          title: "",
          description: "",
          date: "",
          place: "",
        });
        fetchEvents(); // Update events list
      } else {
        setMessage("Failed to add event");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      const response = await fetch(`/api/events`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setMessage("Event deleted successfully");
        fetchEvents(); // Update events list
      } else {
        setMessage("Failed to delete event");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
    }
  };

  return (
    <div
      className="container mx-auto py-8"
      style={{ color: theme !== "dark" ? "#000" : "#fff" }}
    >
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add Event</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              className={`border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 w-full text-black`}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <input
              className={`border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 w-full text-black`}
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date:</label>
            <input
              className={`border ${
                errors.date ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 w-full text-black`}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Place:</label>
            <input
              className={`border ${
                errors.place ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 w-full text-black`}
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
            />
            {errors.place && <p className="text-red-500">{errors.place}</p>}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            type="button"
            onClick={handleAddEvent}
          >
            Add Event
          </button>
        </form>
      </div>
      {/* Render events list */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Events List</h2>
        <ul>
          {events.map((event) => (
            <li
              key={event._id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                {event.title} - {event.date}
              </span>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => handleDeleteEvent(event._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Admin;
