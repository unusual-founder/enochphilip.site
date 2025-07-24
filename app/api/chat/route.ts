import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Message } from "@/models/Message";

export const GET = async () => {
  try {
    await connectDB();

    const messages = await Message.find({ is_show: true }).sort({
      created_at: -1,
    });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  try {
    await connectDB();

    const body = await req.json();
    const {
      name,
      email,
      image,
      message,
      is_reply = false,
      reply_to = null,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 },
      );
    }

    const newMessage = new Message({
      name,
      email,
      image,
      message,
      is_reply,
      reply_to,
    });

    await newMessage.save();

    return NextResponse.json("Data saved successfully", { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
