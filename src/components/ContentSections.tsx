import Icon from "@/components/ui/icon";

export default function ContentSections() {
  return (
    <>
      {/* HOW WE WORK */}
      <section id="how" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-slate-300" />
            <span className="text-slate-400 font-ibm text-xs tracking-[0.25em] uppercase">Процесс</span>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-14 leading-tight">
            Как мы<br />
            <span className="italic text-slate-500">выстраиваем адаптацию</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "Search",
                title: "Диагностика",
                desc: "Изучаем вашу компанию, команду и процессы. Выясняем, где новички «буксуют» и почему уходят в первые месяцы.",
              },
              {
                step: "02",
                icon: "FileText",
                title: "Разработка системы",
                desc: "Создаём программу адаптации под ваш бизнес: онбординг-план, материалы, чек-листы, сценарии первых встреч.",
              },
              {
                step: "03",
                icon: "Rocket",
                title: "Запуск и поддержка",
                desc: "Внедряем систему вместе с вашей командой и остаёмся на связи, чтобы всё работало как надо.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-100 p-8 hover:border-slate-300 transition-colors group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 transition-colors duration-200">
                    <Icon name={item.icon as never} size={20} className="text-slate-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="font-cormorant text-5xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors">{item.step}</span>
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="font-ibm text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-slate-300" />
                <span className="text-slate-400 font-ibm text-xs tracking-[0.25em] uppercase">Результат</span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Что получает<br />
                <span className="italic text-slate-500">ваш бизнес</span>
              </h2>
              <p className="text-slate-500 font-ibm leading-relaxed mb-8">
                Хаотичный онбординг — одна из главных причин, почему новые люди 
                уходят в первые три месяца. Мы помогаем это исправить: 
                системно, без лишних затрат и с вниманием к каждому человеку.
              </p>
              <div className="space-y-4">
                {[
                  "Новые сотрудники быстрее выходят на результат",
                  "Снижается текучка в первые 90 дней",
                  "Команда тратит меньше времени на объяснения",
                  "Корпоративная культура передаётся правильно",
                  "Прозрачные метрики и контроль прогресса",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-slate-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                    <p className="text-slate-600 font-ibm text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "Users", title: "Для любого размера", desc: "Работаем с командами от 5 до 500 человек. Подход адаптируем под масштаб." },
                { icon: "Zap", title: "Быстрый старт", desc: "Первые результаты видны уже через 2–3 недели после начала работы." },
                { icon: "MessageCircle", title: "Всегда на связи", desc: "Не бросаем после сдачи — поддерживаем, корректируем, отвечаем на вопросы." },
                { icon: "BarChart3", title: "Измеримый эффект", desc: "Ставим конкретные цели и отслеживаем, насколько адаптация работает." },
              ].map((card, i) => (
                <div key={i} className="flex gap-5 p-6 bg-white border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="w-10 h-10 bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <Icon name={card.icon as never} size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-ibm font-semibold text-slate-900 text-sm mb-1">{card.title}</h4>
                    <p className="font-ibm text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
              {[
                { icon: "Flame", val: "Молодая\nкоманда", label: "Без устаревших методичек" },
                { icon: "Target", val: "Практика\nпрежде всего", label: "Никакой воды и шаблонов" },
                { icon: "Heart", val: "Вникаем\nв детали", label: "Каждый бизнес уникален" },
                { icon: "TrendingUp", val: "Растём\nвместе с вами", label: "Долгосрочное партнёрство" },
              ].map((stat, i) => (
                <div key={i} className="border border-slate-100 p-6 hover:border-slate-300 transition-colors">
                  <Icon name={stat.icon as never} size={22} className="text-slate-700 mb-3" />
                  <p className="font-cormorant text-xl font-bold text-slate-900 whitespace-pre-line leading-tight mb-1">{stat.val}</p>
                  <p className="text-slate-400 font-ibm text-xs">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-slate-300" />
                <span className="text-slate-400 font-ibm text-xs tracking-[0.25em] uppercase">О нас</span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Advoprom —<br />
                <span className="italic text-slate-500">новый подход к адаптации</span>
              </h2>
              <p className="text-slate-500 font-ibm leading-relaxed mb-5">
                Мы молодая команда специалистов в области адаптации и развития персонала. 
                Не приходим с готовыми шаблонами — вникаем в каждый бизнес и строим 
                систему, которая работает именно у вас.
              </p>
              <p className="text-slate-500 font-ibm leading-relaxed">
                Верим, что хороший онбординг — это не стопка бумаг в первый день, 
                а продуманный процесс, который помогает человеку почувствовать себя частью команды.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
