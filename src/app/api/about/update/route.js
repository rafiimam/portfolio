import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const extractData = await req.json();
    const { _id, about, noofprojects, yearofexperience, noofclients, skills } =
      extractData;

    const updateData = await About.findOneAndUpdate(
      {
        _id: _id,
      },
      { about, noofprojects, yearofexperience, noofclients, skills },
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
