import { securityFeatures } from '@/mocks/home';

export default function SecuritySection() {
  return (
    <section id="seguridad" className="bg-background-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5">
          <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
            SEGURIDAD
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-heading text-primary-950 leading-tight">
            Tu dinero protegido como en{' '}
            <span className="text-primary-700">caja fuerte</span>.
          </h2>
          <p className="mt-4 text-foreground-700 md:text-lg leading-relaxed">
            Construimos DK Remesas con la mentalidad de un banco y la velocidad de una app de mensajería. Tu dinero y tus datos están protegidos.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-background-100 border border-background-200 rounded-2xl px-4 py-3">
            <i className="ri-medal-line text-2xl text-accent-700 w-6 h-6 flex items-center justify-center"></i>
            <div className="text-sm">
              <div className="font-semibold text-primary-950">Calificado AAA por TrustScore</div>
              <div className="text-foreground-600"></div>
            </div>
          </div>
        </div>

        {/* Right: Feature Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-background-100 border border-background-200/70 rounded-3xl p-6 hover:border-accent-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary-950 text-accent-500 flex items-center justify-center">
                <i className={`${feature.icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
              </div>
              <h3 className="mt-5 text-lg font-bold font-heading text-primary-950">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-foreground-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}