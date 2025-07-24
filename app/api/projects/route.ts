import { NextResponse } from "next/server";
import { Project } from "@/models/Project";
import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    await connectDB();

    const projects = await Project.find().sort({ created_at: -1 });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
