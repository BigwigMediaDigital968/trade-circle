import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mondodb";
import Lead from "@/app/models/Leads";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, countryCode, language, password } = body;

    if (!fullName || !phone || !language || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    await connectDB();

    // Check existing user
    const existing = await Lead.findOne({ phone });
    if (existing) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newLead = await Lead.create({
      fullName,
      phone,
      countryCode,
      language,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}