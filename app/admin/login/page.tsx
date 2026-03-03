"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // ✅ VERY IMPORTANT
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      console.log("Login success — redirecting...");

      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white">
      <form
        onSubmit={handleLogin}
        className="glass-card p-10 rounded-2xl w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center">Admin Login</h1>

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border border-white/20 bg-transparent p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-white/20 bg-transparent p-3 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full gold-gradient py-3 cursor-pointer rounded-lg text-black font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}