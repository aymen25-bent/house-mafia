import connectDB from "@/config/mongoDb";
import Event from "@/models/event";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();

    const events = await Event.find();

    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const { title, description, date, place } = await request.json();

    const newEvent = new Event({
      title,
      description,
      date: new Date(date),
      place,
    });

    await newEvent.save();

    return NextResponse.json({ msg: "Event created successfully" });
  } catch (error) {
    return NextResponse.error(error);
  }
}

export async function DELETE(request) {
  try {
    await connectDB();

    const { id } = await request.json();

    console.log("id", id);

    await Event.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Event deleted successfully" });
  } catch (error) {
    return NextResponse.error(error);
  }
}
