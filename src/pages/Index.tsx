import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/bd2688f7-30b2-41f6-aae1-78f67c7f32d9/files/683acabf-4514-474f-ba4c-73e44a138325.jpg";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#060c1a] font-ibm text-white">

      {/* NAV */}
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

      {/* APPLY FORM */}
      <section id="apply" className="py-24 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase">Карьера</span>
              <div className="h-px w-12 bg-[#c9a84c]" />
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white leading-tight">
              Готовы присоединиться<br />
              <span className="italic text-[#c9a84c]">к нашей команде?</span>
            </h2>
            <p className="text-white/50 font-ibm mt-4 text-sm">
              Оставьте контакты — наш HR-специалист свяжется с вами в течение 1 рабочего дня.
            </p>
          </div>

          {submitted ? (
            <div className="border border-[#c9a84c]/40 bg-[#c9a84c]/10 p-12 text-center">
              <Icon name="CheckCircle" size={48} className="text-[#c9a84c] mx-auto mb-4" />
              <h3 className="font-cormorant text-3xl font-bold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-white/60 font-ibm">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 font-ibm text-xs tracking-widest uppercase mb-2">
                    Имя и фамилия *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-white/20 text-white font-ibm px-4 py-3 focus:border-[#c9a84c] outline-none transition-colors placeholder:text-white/20"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-white/50 font-ibm text-xs tracking-widest uppercase mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border border-white/20 text-white font-ibm px-4 py-3 focus:border-[#c9a84c] outline-none transition-colors placeholder:text-white/20"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/50 font-ibm text-xs tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-white/20 text-white font-ibm px-4 py-3 focus:border-[#c9a84c] outline-none transition-colors placeholder:text-white/20"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label className="block text-white/50 font-ibm text-xs tracking-widest uppercase mb-2">
                  Расскажите о себе
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-white/20 text-white font-ibm px-4 py-3 focus:border-[#c9a84c] outline-none transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Кратко об опыте и почему вас интересует эта позиция..."
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#c9a84c] hover:bg-[#e8c96a] text-[#060c1a] font-ibm font-semibold text-sm tracking-widest uppercase py-4 transition-all duration-300"
                >
                  <Icon name="Send" size={16} />
                  Отправить резюме
                </button>
              </div>
              <p className="text-white/30 font-ibm text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS & FOOTER */}
      <footer className="bg-[#060c1a] border-t border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <p className="font-cormorant text-3xl font-semibold text-white tracking-widest uppercase mb-3">
                Advoprom
              </p>
              <p className="text-white/40 font-ibm text-sm leading-relaxed">
                Профессиональная юридическая защита ваших интересов.
              </p>
            </div>
            <div>
              <h4 className="text-[#c9a84c] font-ibm text-xs tracking-[0.2em] uppercase mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/60 font-ibm text-sm">
                  <Icon name="Phone" size={14} className="text-[#c9a84c]" />
                  +7 (495) 000-00-00
                </li>
                <li className="flex items-center gap-3 text-white/60 font-ibm text-sm">
                  <Icon name="Mail" size={14} className="text-[#c9a84c]" />
                  hr@advoprom.ru
                </li>
                <li className="flex items-center gap-3 text-white/60 font-ibm text-sm">
                  <Icon name="MapPin" size={14} className="text-[#c9a84c]" />
                  Москва, ул. Тверская, 1
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c9a84c] font-ibm text-xs tracking-[0.2em] uppercase mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                {[
                  { icon: "Send", label: "Telegram" },
                  { icon: "Linkedin", label: "LinkedIn" },
                  { icon: "Globe", label: "Сайт" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] text-white/40 transition-all duration-300"
                    title={social.label}
                  >
                    <Icon name={social.icon as never} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-white/25 font-ibm text-xs">© 2025 Advoprom. Все права защищены.</p>
            <p className="text-white/25 font-ibm text-xs">Вакансия: Менеджер по адаптации</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
