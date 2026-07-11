export default function CTABanner() {
  return (
    <section className="bg-background-50 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative bg-primary-950 text-background-50 rounded-[2rem] overflow-hidden p-8 md:p-16">
          {/* Decorative blur */}
          <div className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-accent-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -left-20 bottom-0 w-[20rem] h-[20rem] rounded-full bg-primary-700/30 blur-3xl pointer-events-none"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading leading-[0.95]">
                Tu primer envío es <span className="text-accent-500">sin retrasos</span>.
              </h2>
              <p className="mt-4 text-background-200 md:text-lg max-w-xl">
                Únete a cientos de familias que ya confían en DK Remesas para enviar dinero a casa. Sin instalar nada, en menos de 5 minutos.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md">
                <a
                  href="https://wa.me/5927585412"
                  className="bg-accent-500 hover:bg-accent-600 text-foreground-950 font-bold px-6 py-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center text-lg"></i>
                  Empezar gratis
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 text-sm text-background-300">
                <i className="ri-shield-check-line text-accent-500 w-4 h-4 flex items-center justify-center"></i>
                Sin tarjeta requerida para registrarte
              </div>
            </div>

            {/* Right: App Box */}
            <div className="lg:col-span-5">
              <div className="bg-primary-900/70 border border-primary-800 rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-background-300">Valoracion</div>
                  <div className="flex items-center gap-1 text-accent-500">
                    <i className="ri-star-fill text-sm w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill text-sm w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill text-sm w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-fill text-sm w-4 h-4 flex items-center justify-center"></i>
                    <i className="ri-star-half-fill text-sm w-4 h-4 flex items-center justify-center"></i>
                    <span className="text-xs ml-1">4.9</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 bg-primary-950 rounded-2xl p-4">
                  <i className="ri-whatsapp-line text-3xl text-accent-500 w-8 h-8 flex items-center justify-center"></i>
                  <div>
                    <div className="text-sm font-semibold">Envía directo desde WhatsApp</div>
                    <div className="text-xs text-background-300">Sin descargas, sin registros largos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}