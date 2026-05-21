export const TG_LINK = "https://t.me/YOUR_USERNAME";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-cormorant text-2xl font-bold text-slate-900 tracking-wide">
          Advoprom
        </div>
        <a
          href={TG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2.5 bg-slate-900 text-white font-ibm text-sm tracking-wider hover:bg-slate-700 transition-colors duration-200"
        >
          Написать в Telegram
        </a>
      </div>
    </nav>
  );
}
