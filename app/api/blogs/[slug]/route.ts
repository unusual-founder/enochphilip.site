import { NextResponse } from "next/server";
import { BlogPost } from "@/models/BlogPost";
import { connectDB } from "@/lib/connectDB";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  try {
    await connectDB();
    const { slug } = params;

    const post = await BlogPost.findOne({ slug });

    if (!post) {
      return NextResponse.json(
        { message: "Blog post not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
