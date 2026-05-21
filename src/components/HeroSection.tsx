import Icon from "@/components/ui/icon";
import { TG_LINK } from "@/components/NavBar";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/bd2688f7-30b2-41f6-aae1-78f67c7f32d9/files/f5060c3c-1027-40b0-a973-69306c3d3bc4.jpg";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-slate-50">
        <div
          className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-cover bg-center bg-no-repeat opacity-20 md:opacity-100"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-gradient-to-l from-transparent to-slate-50 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 md:hidden" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-slate-400" />
              <span className="text-slate-500 font-ibm text-xs tracking-[0.25em] uppercase">Адаптация персонала</span>
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-slate-900">
              Помогаем людям<br />
              <span className="italic text-slate-600">влиться в команду</span>
            </h1>
            <p className="font-ibm text-base md:text-lg text-slate-600 mb-10 leading-relaxed">
              Выстраиваем систему адаптации новых сотрудников под ваш бизнес — 
              быстро, методично и без лишней бюрократии.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={TG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-ibm font-medium text-sm tracking-wider hover:bg-slate-700 transition-colors duration-200"
              >
                <Icon name="Send" size={16} />
                Написать в Telegram
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-3 px-8 py-4 border border-slate-300 text-slate-700 font-ibm text-sm tracking-wider hover:border-slate-500 transition-colors duration-200"
              >
                Как мы работаем
                <Icon name="ArrowDown" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3–7", label: "дней", sub: "средний срок онбординга" },
              { value: "2×", label: "быстрее", sub: "выход на результат" },
              { value: "0", label: "бюрократии", sub: "только практика" },
              { value: "100%", label: "под вас", sub: "индивидуальный подход" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="font-cormorant text-4xl md:text-5xl font-bold text-white">{item.value}</p>
                <p className="font-ibm text-white/80 font-medium text-sm uppercase tracking-wider mt-1">{item.label}</p>
                <p className="font-ibm text-white/40 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
