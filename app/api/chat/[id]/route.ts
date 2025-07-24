import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import { Message } from "@/models/Message";

export const DELETE = async (
  req: Request,
  context: { params: Promise<{ id: string }> },
) => {
  try {
    await connectDB();

    const { id } = await context.params;

    const deleted = await Message.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "Message not found." },
        { status: 404 },
      );
    }

    return NextResponse.json("Data deleted successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
