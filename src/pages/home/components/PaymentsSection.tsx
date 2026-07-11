import { paymentMethods, deliveryMethods } from '@/mocks/home';

export default function PaymentsSection() {
  return (
    <section id="tarifas" className="bg-secondary-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-block text-sm font-semibold text-primary-700 bg-background-50 px-3 py-1 rounded-full">
            PAGOS Y ENTREGA
          </span>
          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold font-heading text-primary-950 leading-[1.05]">
            Paga como <span className="text-primary-700">quieras</span>,
            <br className="hidden md:block" />
            entrega donde quieras.
          </h2>
          <p className="mt-4 text-foreground-700 md:text-lg">
            Con efectivo, en línea o vamos por el dinero a tu casa. Tú eliges cómo pagas y cómo lo recibe tu familia.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Payment Methods */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.title}
                className="bg-background-50 rounded-3xl p-6 border border-background-200/70 hover:border-primary-300 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
                  <i className={`${method.icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
                </div>
                <h3 className="mt-5 text-lg font-bold font-heading text-primary-950">
                  {method.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-700">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Delivery Panel */}
          <div className="lg:col-span-5 bg-primary-950 text-background-50 rounded-3xl p-7 md:p-8">
            <div className="text-xs font-semibold text-accent-500 tracking-wider">
              FORMAS DE ENTREGA
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-extrabold font-heading">
              Tu familia recibe como prefiera
            </h3>
            <div className="mt-6 space-y-3">
              {deliveryMethods.map((method) => (
                <div
                  key={method.title}
                  className="flex items-start gap-4 bg-primary-900 rounded-2xl p-4"
                >
                  <div className="w-11 h-11 rounded-full bg-accent-500 text-foreground-950 flex items-center justify-center shrink-0">
                    <i className={`${method.icon} text-xl w-5 h-5 flex items-center justify-center`}></i>
                  </div>
                  <div>
                    <div className="font-semibold">{method.title}</div>
                    <div className="text-sm text-background-300">{method.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#calculadora"
              className="mt-6 inline-flex items-center gap-2 bg-accent-500 text-foreground-950 font-bold px-5 py-3 rounded-full hover:bg-accent-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Cotizar mi envío
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}