import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ApplySection() {
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
    <>
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
    </>
  );
}
