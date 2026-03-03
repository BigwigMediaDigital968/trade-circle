import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mondodb";
import Lead from "@/app/models/Leads";

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  const { phone } = await req.json();

  await connectDB();

  const user = await Lead.findOne({ phone });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const otp = generateOTP();

  user.otp = otp;
  user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
  await user.save();

  console.log("OTP:", otp); // Replace with SMS provider

  return NextResponse.json({ message: "OTP sent" });
}