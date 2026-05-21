import Icon from "@/components/ui/icon";

export default function ContentSections() {
  return (
    <>
      {/* ROLE */}
      <section id="role" className="py-24 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Роль</span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Описание<br />
                <span className="italic text-[#c9a84c]">должности</span>
              </h2>
              <p className="text-white/60 font-ibm leading-relaxed mb-8">
                Менеджер по адаптации — это ключевое звено между клиентом и командой юристов.
                Вы обеспечиваете плавный, понятный и комфортный процесс взаимодействия клиента
                с компанией от первого контакта до закрытия дела.
              </p>

              <div className="space-y-4">
                {[
                  "Сопровождение клиентов на каждом этапе работы",
                  "Координация между клиентом и юридической командой",
                  "Контроль сроков и качества обратной связи",
                  "Работа с CRM — ведение клиентской базы",
                  "Проведение вводных консультаций и онбординг",
                  "Разрешение спорных ситуаций и работа с возражениями",
                ].map((task, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full border border-[#c9a84c]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                    </div>
                    <p className="text-white/75 font-ibm text-sm leading-relaxed">{task}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-white/10 p-8 hover:border-[#c9a84c]/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Target" size={20} className="text-[#c9a84c]" />
                  <h3 className="font-cormorant text-2xl font-semibold text-white">Цель роли</h3>
                </div>
                <p className="text-white/60 font-ibm text-sm leading-relaxed">
                  Обеспечить максимальную удовлетворённость клиента на протяжении всего пути работы
                  с компанией, снизить отток и увеличить долгосрочную лояльность.
                </p>
              </div>
              <div className="border border-white/10 p-8 hover:border-[#c9a84c]/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="BarChart3" size={20} className="text-[#c9a84c]" />
                  <h3 className="font-cormorant text-2xl font-semibold text-white">Зона роста</h3>
                </div>
                <p className="text-white/60 font-ibm text-sm leading-relaxed">
                  Через 6–12 месяцев — возможность перейти на позицию старшего менеджера
                  или руководителя отдела клиентского сервиса.
                </p>
              </div>
              <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Clock" size={20} className="text-[#c9a84c]" />
                  <h3 className="font-cormorant text-2xl font-semibold text-white">График</h3>
                </div>
                <p className="text-white/60 font-ibm text-sm leading-relaxed">
                  5/2, офис в Москве. Гибридный формат после испытательного срока.
                  Испытательный срок — 2 месяца.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-24 bg-[#060c1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Требования</span>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-14 leading-tight">
            Идеальный<br />
            <span className="italic text-[#c9a84c]">кандидат</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-ibm text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-6 pb-3 border-b border-[#c9a84c]/30">
                Обязательно
              </h3>
              <ul className="space-y-3">
                {[
                  "Опыт работы с клиентами от 1 года",
                  "Грамотная устная и письменная речь",
                  "Уверенное владение ПК и CRM",
                  "Стрессоустойчивость и эмпатия",
                  "Ответственность и самоорганизация",
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 font-ibm text-sm">
                    <Icon name="Check" size={14} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-ibm text-xs tracking-[0.2em] uppercase text-white/50 mb-6 pb-3 border-b border-white/10">
                Преимущество
              </h3>
              <ul className="space-y-3">
                {[
                  "Опыт в юридической или финансовой сфере",
                  "Знание основ делопроизводства",
                  "Навыки работы в конфликтных ситуациях",
                  "Ведение нескольких проектов одновременно",
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/50 font-ibm text-sm">
                    <Icon name="Plus" size={14} className="text-white/30 mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#c9a84c]/15 to-transparent border border-[#c9a84c]/20 p-6">
              <h3 className="font-ibm text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-6 pb-3 border-b border-[#c9a84c]/30">
                Мы предлагаем
              </h3>
              <ul className="space-y-3">
                {[
                  "Официальное трудоустройство по ТК РФ",
                  "Оклад от 80 000 руб. + бонусы",
                  "ДМС после испытательного срока",
                  "Корпоративное обучение и развитие",
                  "Дружная команда профессионалов",
                  "Карьерный рост внутри компании",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/75 font-ibm text-sm">
                    <Icon name="Star" size={14} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">О компании</span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Advoprom —<br />
                <span className="italic text-[#c9a84c]">ваш путь в право</span>
              </h2>
              <p className="text-white/60 font-ibm leading-relaxed mb-6">
                Advoprom — юридическая компания с более чем 10-летним опытом работы на рынке.
                Мы специализируемся на защите прав граждан и бизнеса, предоставляя полный спектр
                юридических услуг: от консультаций до представительства в судах высших инстанций.
              </p>
              <p className="text-white/60 font-ibm leading-relaxed">
                В нашей команде — более 50 профессионалов: адвокаты, юристы, аналитики.
                Мы выстраиваем культуру взаимоуважения, постоянного роста и высоких стандартов работы.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Users", val: "50+", label: "Специалистов в команде" },
                { icon: "Award", val: "10+", label: "Лет на рынке" },
                { icon: "Briefcase", val: "3 000+", label: "Закрытых дел" },
                { icon: "TrendingUp", val: "94%", label: "Успешных исходов" },
              ].map((stat, i) => (
                <div key={i} className="border border-white/10 p-6 hover:border-[#c9a84c]/30 transition-colors">
                  <Icon name={stat.icon as never} size={24} className="text-[#c9a84c] mb-3" />
                  <p className="font-cormorant text-3xl font-bold text-white">{stat.val}</p>
                  <p className="text-white/50 font-ibm text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL DETAILS */}
      <section className="py-24 bg-[#060c1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#c9a84c] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#c9a84c] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Финансовые условия</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white leading-tight">
              Прозрачная система<br />
              <span className="italic text-[#c9a84c]">мотивации</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 p-8 text-center hover:border-[#c9a84c]/40 transition-colors">
              <Icon name="Wallet" size={32} className="text-[#c9a84c] mx-auto mb-4" />
              <p className="font-cormorant text-4xl font-bold text-white mb-2">80 000 ₽</p>
              <p className="text-[#c9a84c] font-ibm text-xs tracking-widest uppercase mb-3">Фиксированный оклад</p>
              <p className="text-white/50 font-ibm text-sm">Стабильная база вне зависимости от результата</p>
            </div>
            <div className="bg-[#c9a84c] p-8 text-center relative">
              <div className="absolute top-3 right-3 bg-[#060c1a]/20 px-2 py-1 text-[#060c1a] text-xs font-ibm font-semibold">
                ОСНОВНОЙ
              </div>
              <Icon name="TrendingUp" size={32} className="text-[#060c1a] mx-auto mb-4" />
              <p className="font-cormorant text-4xl font-bold text-[#060c1a] mb-2">+30%</p>
              <p className="text-[#060c1a]/80 font-ibm text-xs tracking-widest uppercase mb-3">Бонус за выполнение плана</p>
              <p className="text-[#060c1a]/70 font-ibm text-sm">Ежемесячная премия при достижении KPI</p>
            </div>
            <div className="border border-white/10 p-8 text-center hover:border-[#c9a84c]/40 transition-colors">
              <Icon name="Zap" size={32} className="text-[#c9a84c] mx-auto mb-4" />
              <p className="font-cormorant text-4xl font-bold text-white mb-2">×2</p>
              <p className="text-[#c9a84c] font-ibm text-xs tracking-widest uppercase mb-3">За перевыполнение</p>
              <p className="text-white/50 font-ibm text-sm">Двойной коэффициент при 120%+ плана</p>
            </div>
          </div>

          <div className="mt-8 border border-[#c9a84c]/20 bg-[#c9a84c]/5 p-6 flex flex-wrap gap-6 items-center justify-center md:justify-between">
            <p className="font-cormorant text-2xl text-white italic">
              Совокупный доход при стабильной работе:
            </p>
            <p className="font-cormorant text-4xl font-bold text-[#c9a84c]">120 — 200 000 ₽/мес</p>
          </div>
        </div>
      </section>
    </>
  );
}
