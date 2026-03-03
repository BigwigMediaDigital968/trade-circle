import { connectDB } from "@/app/lib/mondodb";
import Lead from "@/app/models/Leads";
import Link from "next/link";

export default async function AdminDashboard() {
  await connectDB();

  const totalLeads = await Lead.countDocuments();
  const verifiedLeads = await Lead.countDocuments({ isPhoneVerified: true });
  const unverifiedLeads = await Lead.countDocuments({ isPhoneVerified: false });
  const convertedLeads = await Lead.countDocuments({ status: "converted" });

  return (
    <div className="min-h-screen bg-brand-dark text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-black/40 backdrop-blur-md border-r border-white/10 fixed h-screen p-6">
        <h2 className="text-xl font-semibold mb-6">Kwik Trade</h2>

        <nav className="space-y-2">
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            Dashboard
          </div>

          <Link
            href="/admin/leads"
            className="block px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Leads
          </Link>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-2xl font-semibold mb-8">Dashboard Overview</h1>

        <div className="grid md:grid-cols-4 gap-6">

          <StatCard title="Total Leads" value={totalLeads} />
          <StatCard title="Verified Leads" value={verifiedLeads} />
          <StatCard title="Unverified Leads" value={unverifiedLeads} />
          <StatCard title="Converted Leads" value={convertedLeads} />

        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }: any) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
}