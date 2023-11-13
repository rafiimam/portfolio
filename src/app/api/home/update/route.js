
import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, heading, summary} =
      extractData;

    const updateData = await Home.findOneAndUpdate(
      {
        _id: _id,
      },
      { heading, summary },
      { new: true }
    );

    if (updateData) {
      return NextResponse({
        success: true,
        message: "updated successfully",
      });
    } else {
      return NextResponse({
        success: false,
        message: "something went wrong",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse({
      success: false,
      message: "something went wrong",
    });
  }
}
