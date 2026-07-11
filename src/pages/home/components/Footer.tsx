import { footerLinks } from '@/mocks/home';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-background-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-8">
        <div className="flex flex-col items-center text-center">
          {/* Brand Column */}
          <div className="max-w-md">
            <img
              alt="DK Remesas"
              className="h-20 md:h-24 w-auto object-contain mx-auto"
              src="https://storage.readdy-site.link/project_files/33ed597b-51ca-4aa6-975b-83a1f344525b/85552f8b-8504-49d8-ba44-460efe297869_compressed_dk.remesas.logo.webp"
            />
            <p className="mt-4 text-background-300 text-sm leading-relaxed">
              La casa de cambio digital para enviar dinero a Latinoamérica en segundos. Sin filas, sin comisiones ocultas, con tasa de cambio honesta.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
                        <a
            href="https://www.facebook.com/profile.php?id=100054897142809&mibextid=wwXIfr"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-900 hover:bg-accent-500 hover:text-primary-950 text-background-50 transition-colors cursor-pointer"
          >
            <i className="ri-facebook-fill text-base w-4 h-4 flex items-center justify-center"></i>
          </a>
          <a
            href="https://www.tiktok.com/@daniel.alejandro4601?_r=1&_t=ZS-97qEBx62gZr"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-900 hover:bg-accent-500 hover:text-primary-950 text-background-50 transition-colors cursor-pointer"
          >
            <i className="ri-tiktok-line text-base w-4 h-4 flex items-center justify-center"></i>
          </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 bg-primary-900 border border-primary-800 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              <span className="text-sm text-background-200">Soporte 24/7 activo</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-primary-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-background-300 text-xs">
            © 2026 DK Remesas. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-background-300 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-accent-500"></i>
              Cifrado
            </span>
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-bank-line w-4 h-4 flex items-center justify-center text-accent-500"></i>
              Regulados
            </span>
            <span className="inline-flex items-center gap-1.5">
              <i className="ri-global-line w-4 h-4 flex items-center justify-center text-accent-500"></i>
              Español · English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}