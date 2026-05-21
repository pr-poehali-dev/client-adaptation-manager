import Icon from "@/components/ui/icon";
import { TG_LINK } from "@/components/NavBar";

export default function ApplySection() {
  return (
    <>
      {/* CTA */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-white/20" />
            <span className="text-white/40 font-ibm text-xs tracking-[0.25em] uppercase">Контакт</span>
            <div className="h-px w-10 bg-white/20" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Обсудим вашу<br />
            <span className="italic text-white/60">ситуацию?</span>
          </h2>
          <p className="text-white/50 font-ibm mb-10 text-base leading-relaxed max-w-lg mx-auto">
            Расскажите о своей команде — ответим на вопросы и предложим, 
            как можно выстроить адаптацию именно у вас. Без обязательств.
          </p>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 font-ibm font-semibold text-sm tracking-wider hover:bg-slate-100 transition-colors duration-200"
          >
            <Icon name="Send" size={18} />
            Написать в Telegram
          </a>
          <p className="text-white/25 font-ibm text-xs mt-5">
            Отвечаем в течение нескольких часов в рабочее время
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-cormorant text-2xl font-bold text-white tracking-wide">
            Advoprom
          </div>
          <p className="text-white/25 font-ibm text-xs text-center">
            Адаптация и онбординг для бизнеса
          </p>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 font-ibm text-sm hover:text-white/70 transition-colors"
          >
            <Icon name="Send" size={14} />
            Telegram
          </a>
        </div>
      </footer>
    </>
  );
}
