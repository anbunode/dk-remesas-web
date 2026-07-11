import { useState } from 'react';
import { faqData } from '@/mocks/home';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-background-50 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-heading text-primary-950 leading-tight">
            Resolvemos todas tus dudas.
          </h2>
          <p className="mt-3 text-foreground-700">
            Si no encuentras lo que buscas, escríbenos por WhatsApp y te respondemos en minutos.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-primary-950 border-primary-950'
                    : 'bg-background-100 border-background-200/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-7 py-5 cursor-pointer"
                >
                  <h4 className={`font-bold text-base md:text-lg font-heading ${isOpen ? 'text-background-50' : 'text-primary-950'}`}>
                    {item.question}
                  </h4>
                  <div
                    className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                      isOpen
                        ? 'bg-accent-500 text-foreground-950'
                        : 'bg-background-50 text-primary-950'
                    }`}
                  >
                    <i
                      className={`${isOpen ? 'ri-subtract-line' : 'ri-add-line'} text-lg w-5 h-5 flex items-center justify-center`}
                    ></i>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 px-5 md:px-7 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-sm md:text-base leading-relaxed ${
                        isOpen ? 'text-background-200' : 'text-foreground-700'
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support CTA Box */}
        <div className="mt-10 bg-primary-100 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-500 text-foreground-950 flex items-center justify-center shrink-0">
              <i className="ri-question-answer-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div>
              <h4 className="font-bold text-primary-950">¿Aún tienes preguntas?</h4>
              <p className="text-sm text-foreground-700">
                Nuestro equipo de soporte está a un mensaje de distancia.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5927585412"
            className="bg-primary-950 hover:bg-primary-900 text-background-50 font-semibold px-5 py-3 rounded-full cursor-pointer whitespace-nowrap"
          >
            Hablar con soporte
          </a>
        </div>
      </div>
    </section>
  );
}