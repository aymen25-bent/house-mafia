"use client";

import Event from "@/components/event/Event";
import { appContext } from "@/context/appContext";
import { useState, useEffect, useContext } from "react";

const EventsPage = () => {
  const { theme } = useContext(appContext);
  const [events, setEvents] = useState([]);

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

  return (
    <div className="container mx-auto px-4 py-8 h-screen">
      <h1
        className="text-3xl font-bold mb-4"
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        Événements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <Event
            key={event._id}
            name={event.title}
            date={event.date}
            description={event.description}
            heure={"10:00 PM"} // Example heure, replace with actual event time
            image={"/event1.jpg"} // Example image, replace with actual event image
            place={event.place}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
