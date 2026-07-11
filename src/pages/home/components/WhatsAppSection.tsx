export default function WhatsAppSection() {
  return (
    <section className="bg-background-50 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* WhatsApp Card */}
        <div className="bg-accent-500 rounded-[2rem] p-5 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-md">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-950 leading-tight">
              Todo es desde
              <br className="hidden md:block" />
              WhatsApp
              <i className="ri-whatsapp-fill text-primary-950 ml-2 text-3xl md:text-4xl w-10 h-10 inline-flex items-center justify-center"></i>
            </h2>
            <p className="mt-4 text-foreground-900 md:text-lg leading-relaxed">
              Tan rápido como mandar un mensaje. No necesitas hacer filas ni descargar aplicaciones.
            </p>
            <a
              href="https://wa.me/5927585412"
              className="mt-6 inline-flex items-center gap-2 bg-primary-950 hover:bg-primary-900 text-background-50 font-semibold px-6 py-3.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center text-lg"></i>
              Enviar por WhatsApp
            </a>
          </div>
          <div className="mt-8 md:mt-12 relative mx-auto w-full bg-background-50/60 backdrop-blur-xl rounded-3xl p-2 md:p-6 shadow-[0_30px_60px_-20px_rgba(13,40,30,0.25)] border border-background-200/40">
            <img
              alt="WhatsApp chat"
              className="w-full h-auto rounded-2xl object-contain"
              src="https://storage.readdy-site.link/project_files/33ed597b-51ca-4aa6-975b-83a1f344525b/12484bff-d503-4168-a63b-627d888a218d_compressed_fisico.webp"
            />
          </div>
        </div>

        {/* 24/7 Card */}
        <div className="bg-primary-950 text-background-50 rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading leading-tight">
              Disponibles <span className="text-accent-500">24/7</span> para ti
            </h2>
            <p className="mt-4 text-background-200 md:text-lg leading-relaxed">
              Nuestro servicio está disponible las 24 horas con atención personalizada cuando la necesites.
            </p>
            <a
              href="#calculadora"
              className="mt-6 inline-flex items-center gap-2 border border-primary-700 hover:bg-accent-500 hover:text-foreground-950 hover:border-accent-500 text-background-50 font-semibold px-6 py-3.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              Empieza tu primer envio
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>

          {/* Support Icons */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 gap-3">
            {[
              { icon: 'ri-customer-service-2-line', label: 'Chat en vivo' },
              { icon: 'ri-whatsapp-line', label: 'WhatsApp' },
            ].map((item) => (
              <div key={item.label} className="bg-primary-900 rounded-2xl p-4 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-accent-500 text-foreground-950 flex items-center justify-center">
                  <i className={`${item.icon} text-xl w-5 h-5 flex items-center justify-center`}></i>
                </div>
                <div className="mt-2 text-sm font-medium text-background-50">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-6 flex items-center gap-2 text-sm text-background-300">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span>Tiempo de respuesta promedio: 1 min 42 s</span>
          </div>
        </div>
      </div>
    </section>
  );
}