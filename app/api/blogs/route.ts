import { NextResponse } from "next/server";

import { getBlogssData } from "@/services/blogs";
import { createClient } from "@/common/utils/server";

export const GET = async () => {
  try {    
    const data = await getBlogssData();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};

export const POST = async (req: Request) => {
  const supabase = createClient();
  try {
    const body = await req.json();
    await supabase.from("blog_posts").insert([body]);
    return NextResponse.json("Data saved successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
