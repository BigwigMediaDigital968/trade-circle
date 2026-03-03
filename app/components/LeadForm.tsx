"use client";

import { useState } from "react";
import {
    BarChart3,
    Eye,
    EyeOff,
    Shield,
    Zap,
    CheckCircle,
} from "lucide-react";

export default function LeadForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <section className="section-padding">
            <div className="max-w-3xl mx-auto">

                {/* Main Card */}
                <div className="glass-card rounded-3xl border border-white/20 p-8 md:p-12">

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                            <BarChart3 className="text-black" size={24} />
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold">
                                Open Your Kwik Trade Account
                            </h2>
                            <p className="text-gray-400 text-sm">
                                Start Trading in 2 Minutes | Completely Free
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">

                        {/* Full Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name*"
                                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-(--brand-gold) transition"
                            />
                        </div>

                        {/* Mobile + OTP Row */}
                        <div className="grid md:grid-cols-[1fr_auto] gap-4">

                            {/* Phone Input Wrapper */}
                            <div className="flex items-center border border-white/20 rounded-lg overflow-hidden focus-within:border-(--brand-gold) transition">

                                {/* Country Code Selector */}
                                <div className="relative">
                                    <select
                                        className="appearance-none bg-transparent px-4 py-3 pr-8 text-white focus:outline-none"
                                    >
                                        <option value="+91" className="bg-(--brand-dark)">
                                            🇮🇳 +91
                                        </option>
                                        <option value="+1" className="bg-(--brand-dark)">
                                            🇺🇸 +1
                                        </option>
                                        <option value="+44" className="bg-(--brand-dark)">
                                            🇬🇧 +44
                                        </option>
                                    </select>

                                    {/* Arrow */}
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                                        ▼
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-6 w-px bg-white/20" />

                                {/* Phone Input */}
                                <input
                                    type="tel"
                                    placeholder="Mobile Number*"
                                    className="flex-1 bg-transparent px-4 py-3 focus:outline-none text-white"
                                />
                            </div>

                            {/* Send OTP Button */}
                            <button
                                type="button"
                                className="gold-gradient text-black cursor-pointer px-6 rounded-lg font-medium hover:opacity-90 transition"
                            >
                                Send OTP
                            </button>

                        </div>

                        {/* OTP Row */}
                        <div className="grid md:grid-cols-[1fr_auto] gap-4">
                            <input
                                type="text"
                                placeholder="Enter OTP*"
                                className="bg-transparent border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-(--brand-gold) transition"
                            />

                            <button
                                type="button"
                                className="gold-gradient cursor-pointer text-black px-6 rounded-lg font-medium hover:opacity-90 transition"
                            >
                                Verify OTP
                            </button>
                        </div>

                        {/* Language */}
                        <div className="relative">
                            <select
                                className="w-full appearance-none bg-transparent border border-white/20 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:border-(--brand-gold) transition"
                            >
                                <option value="" className="bg-(--brand-dark) text-white">
                                    Select Language*
                                </option>
                                <option className="bg-(--brand-dark) text-white">
                                    English
                                </option>
                                <option className="bg-(--brand-dark) text-white">
                                    Hindi
                                </option>
                            </select>

                            {/* Custom Arrow */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                ▼
                            </div>
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Create Password*"
                                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-(--brand-gold) transition"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm Password*"
                                className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-(--brand-gold) transition"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3 text-sm text-gray-400">
                            <input type="checkbox" className="mt-1 accent-(--brand-gold)" />
                            <p>
                                I agree to the{" "}
                                <span className="text-(--brand-gold)">
                                    Privacy Policies
                                </span>{" "}
                                and{" "}
                                <span className="text-(--brand-gold)">
                                    Terms and Conditions
                                </span>
                                , and I consent to receive SMS and RCS messages from Kwik
                                Trade.
                            </p>
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full gold-gradient text-black py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
                        >
                            Register
                        </button>
                    </form>
                </div>

                {/* Bottom Trust Indicators */}
                <div className="flex justify-center gap-8 mt-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <CheckCircle size={16} />
                        100% Free
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield size={16} />
                        Secure
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={16} />
                        Instant Access
                    </div>
                </div>

            </div>
        </section>
    );
}