import { connectDB } from "@/lib/connectDB";
import { Achievement } from "@/models/Achievement";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();

    const searchParams = req.nextUrl.searchParams;
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const query: any = {};

    if (category) query.category = category;

    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const achievements = await Achievement.find(query).sort({ createdAt: -1 });

    return NextResponse.json(achievements, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
