import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();
    const saveData = await Education.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data Saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something is wrong!! Try again later!!",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something is wrong!! Try again later!!",
    });
  }
}
