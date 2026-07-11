import { stepsData } from '@/mocks/home';

export default function StepsSection() {
  return (
    <section
      id="como-funciona"
      className="relative py-20 pb-12 md:pb-28 bg-background-50"
    >
      {/* Desktop background image */}
      <img
        src="https://storage.readdy-site.link/project_files/33ed597b-51ca-4aa6-975b-83a1f344525b/f916ef39-0c21-415d-8e21-232b8eb338da_chica-DK.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-[-24px] right-0 h-full w-auto object-contain object-bottom-right pointer-events-none select-none hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold text-primary-700 bg-primary-100 px-3 py-1 rounded-full">
            CÓMO FUNCIONA
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-heading text-primary-950 leading-tight">
            Enviar dinero nunca había sido{' '}
            <span className="text-primary-700">tan fácil</span>.
          </h2>
          <p className="mt-4 text-foreground-700 text-lg">
            En 4 pasos súper simples, tu dinero ya está cruzando fronteras. Sin papeleo, sin esperas absurdas.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stepsData.map((step) => (
            <div
              key={step.step}
              className="relative bg-background-100/60 backdrop-blur-sm rounded-3xl p-6 border border-background-200/40 hover:bg-background-100/80 transition-colors duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-foreground-950">
                <i className={`${step.icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
              </div>
              <div className="mt-6 text-sm font-bold text-foreground-600 group-hover:text-primary-700">
                PASO {step.step}
              </div>
              <h3 className="mt-2 text-xl font-bold font-heading text-primary-950 group-hover:text-primary-800">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-700 group-hover:text-foreground-900 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}