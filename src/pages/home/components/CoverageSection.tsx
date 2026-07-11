import { partnersData } from '@/mocks/home';

export default function CoverageSection() {
  return (
    <section id="paises" className="bg-background-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-secondary-100 rounded-[2rem] p-8 md:p-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-primary-950 leading-tight">
              Más de <span className="text-primary-700">200+ formas y lugares</span>
              <br className="hidden md:block" />
              para enviar
            </h2>
            <p className="mt-4 text-foreground-700 md:text-lg max-w-2xl mx-auto">
              Envía desde Guyana a cuentas bancarias, billeteras móviles o para retirar efectivo en México, Venezuela, Colombia y mas, siempre puedes consultar disponibilidad con nuestro equipo de atencion en linea 24/7
            </p>
          </div>

          {/* Partners Grid */}
          <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
            {partnersData.map((partner) => (
              <div
                key={partner.name}
                className="aspect-[3/2] bg-background-50 rounded-2xl flex items-center justify-center border border-background-200/70 hover:-translate-y-1 transition-transform cursor-pointer p-3"
              >
                <img
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                  src={partner.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}