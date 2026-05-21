export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060c1a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-cormorant text-2xl font-semibold tracking-widest text-white uppercase">
          Advoprom
        </div>
        <a
          href="#apply"
          className="hidden md:block px-6 py-2 border border-[#c9a84c] text-[#c9a84c] font-ibm text-sm tracking-widest uppercase hover:bg-[#c9a84c] hover:text-[#060c1a] transition-all duration-300"
        >
          Откликнуться
        </a>
      </div>
    </nav>
  );
}
