import { whyStats, testimonialsData } from '@/mocks/home';

export default function WhyDKSection() {
  return (
    <section className="bg-background-50 pb-20 md:pb-28">
      {/* Full-width Banner Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#052e15] via-[#0a3d1f] to-[#0f5e2e] h-[420px] md:h-[580px] rounded-[2rem] mx-4 md:mx-8">
        <img
          alt="Equipo DK Remesas"
          className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-center"
          src="https://storage.readdy-site.link/project_files/33ed597b-51ca-4aa6-975b-83a1f344525b/52a96068-ec1f-48ee-a3e5-704f25f6aae3_Diseo-sin-ttulo.svg"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#052e15]/80 via-transparent to-transparent"></div>

        {/* Mobile top text */}
        <div className="absolute top-0 left-0 right-0 p-6 z-10 md:hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl font-extrabold font-heading text-background-50 leading-[0.95]">
              ¿Por qué <span className="text-accent-500">DK Remesas</span>?
            </h2>
            <p className="mt-3 text-background-200 max-w-lg">
              Una casa de cambio creada por y para la comunidad latina. Honestos, rápidos y siempre del lado de tu familia.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="hidden md:block">
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-background-50 leading-[0.95]">
                ¿Por qué <span className="text-accent-500">DK Remesas</span>?
              </h2>
              <p className="mt-3 text-background-200 max-w-lg">
                Una casa de cambio creada por y para la comunidad latina. Honestos, rápidos y siempre del lado de tu familia.
              </p>
            </div>
            <a
              href="#calculadora"
              className="inline-flex items-center gap-2 bg-accent-500 text-foreground-950 font-bold px-5 py-3 rounded-full hover:bg-accent-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Cotiza tu primer envío
              <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats Grid */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {whyStats.map((stat) => (
            <div key={stat.label} className="bg-black text-background-50 rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-extrabold font-heading text-accent-500 flex items-center gap-1">
                {stat.value}
                {stat.value === '4.9' && <i className="ri-star-fill text-amber-400 text-lg w-5 h-5 flex items-center justify-center"></i>}
              </div>
              <div className="mt-1 text-sm text-background-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Header */}
        <div className="mt-16 flex items-end justify-between gap-4 mb-6 flex-wrap">
          <div>
            <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
              RESEÑAS
            </span>
            <h3 className="mt-3 text-3xl md:text-4xl font-extrabold font-heading text-primary-950">
              Más de 100+ familias nos eligen cada mes
            </h3>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-background-100 rounded-3xl p-6 border border-background-200/70 flex flex-col"
            >
              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover object-top"
                  src={t.avatar}
                />
                <div>
                  <div className="font-semibold text-primary-950">{t.name}</div>
                  <div className="text-xs text-foreground-600">{t.location}</div>
                </div>
                <i className="ri-star-fill text-accent-700 ml-auto w-4 h-4 flex items-center justify-center"></i>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mt-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className="ri-star-fill text-sm w-4 h-4 flex items-center justify-center"
                  ></i>
                ))}
              </div>

              {/* Text */}
              <p className="mt-3 text-sm text-foreground-800 leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}