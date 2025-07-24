import { NextResponse } from "next/server";
import { Project } from "@/models/Project";
import { connectDB } from "@/lib/connectDB";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  try {
    await connectDB();
    const { slug } = params;
    const project = await Project.findOne({ slug });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
