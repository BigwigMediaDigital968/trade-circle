export default function Navbar() {
  return (
    <nav className="w-full z-50 bg-[var(--brand-dark)]/80 backdrop-blur-md text-white mt-2">

      <div className="w-full md:w-[70%] mx-auto flex justify-between items-center px-6 py-4">

        <div className="flex items-center">
          <img
            src="/trade-circle-logo.png"
            alt="Trade Circle Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <button className="bg-[var(--brand-gold)] hover:bg-[var(--brand-orange)] px-4 py-2 md:px-6 md:py-3 cursor-pointer rounded-lg font-semibold text-black transition text-sm md:text-base">
          Start Now
        </button>

      </div>

    </nav>
  );
}