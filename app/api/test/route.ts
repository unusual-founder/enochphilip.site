import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({ message: "API is working!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 },
    );
  }
};
