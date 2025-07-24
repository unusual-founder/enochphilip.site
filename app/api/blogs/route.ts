import { NextResponse } from "next/server";
import { BlogPost } from "@/models/BlogPost";
import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    await connectDB();

    const posts = await BlogPost.find({}).sort({ created_at: -1 });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
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
      title,
      slug,
      content,
      tags = [],
      description,
      category,
      cover_image,
      is_published = false,
      is_featured = false,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { message: "Title, slug, and content are required." },
        { status: 400 },
      );
    }

    const exists = await BlogPost.findOne({ slug });
    if (exists) {
      return NextResponse.json(
        { message: "A post with this slug already exists." },
        { status: 409 },
      );
    }

    const newPost = new BlogPost({
      title,
      slug,
      content,
      tags,
      description,
      category,
      cover_image,
      is_published,
      is_featured,
    });

    await newPost.save();

    return NextResponse.json(
      { message: "Post created successfully." },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
