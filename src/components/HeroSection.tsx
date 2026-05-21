import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/bd2688f7-30b2-41f6-aae1-78f67c7f32d9/files/683acabf-4514-474f-ba4c-73e44a138325.jpg";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a] via-[#060c1a]/85 to-[#060c1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a] via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] font-ibm text-xs tracking-[0.3em] uppercase">Открытая вакансия</span>
            </div>
            <h1 className="font-cormorant text-5xl md:text-7xl font-bold leading-none mb-4 text-white">
              Менеджер
              <br />
              <span className="italic text-[#c9a84c]">по адаптации</span>
            </h1>
            <p className="font-ibm text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
              Строите карьеру в правовой сфере? Мы ищем специалиста, который поможет клиентам
              пройти путь от первого обращения до результата — уверенно и с поддержкой на каждом шаге.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a84c] text-[#060c1a] font-ibm font-semibold text-sm tracking-widest uppercase hover:bg-[#e8c96a] transition-all duration-300"
              >
                <Icon name="Send" size={16} />
                Откликнуться
              </a>
              <a
                href="#role"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-ibm text-sm tracking-widest uppercase hover:border-white/60 transition-all duration-300"
              >
                Узнать больше
                <Icon name="ArrowDown" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-16 hidden lg:block">
          <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/40 backdrop-blur-sm p-6 text-center">
            <p className="text-[#c9a84c] text-xs tracking-[0.2em] uppercase mb-2">Доход</p>
            <p className="font-cormorant text-4xl font-bold text-white">120–200 тыс.</p>
            <p className="text-white/50 text-xs mt-1">рублей в месяц</p>
          </div>
        </div>
      </section>

      {/* INCOME HIGHLIGHT */}
      <section className="py-16 bg-[#c9a84c]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "120–200", label: "тыс. руб.", sub: "ежемесячный доход" },
              { value: "30%", label: "бонус", sub: "от результата" },
              { value: "×2", label: "надбавка", sub: "за перевыполнение плана" },
              { value: "100%", label: "офиц. оформление", sub: "ТК РФ + соц. пакет" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="font-cormorant text-4xl md:text-5xl font-bold text-[#060c1a]">{item.value}</p>
                <p className="font-ibm text-[#060c1a] font-semibold text-sm uppercase tracking-wider mt-1">{item.label}</p>
                <p className="font-ibm text-[#060c1a]/70 text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
