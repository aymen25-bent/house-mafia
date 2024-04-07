// models/Event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  place: { type: String },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
