import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Países', href: '#paises' },
    { label: 'Tarifas', href: '#tarifas' },
    { label: 'Seguridad', href: '#seguridad' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background-50/70 backdrop-blur-sm border-b border-background-200/50'
            : 'bg-transparent'
        }`}
      >
        {/* Announcement Bar - hidden by default per reference */}
        <div className="w-full bg-accent-500 text-foreground-950 text-sm py-2 px-4 flex items-center justify-center gap-2 font-medium transition-all hidden">
          <i className="ri-gift-line w-4 h-4 flex items-center justify-center"></i>
          <span>Tu primer envío sin comisión</span>
          <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center"></i>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <a
            className="flex items-center gap-2 cursor-pointer"
            href="/"
          >
            <img
              alt="DK Remesas"
              className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]"
              src="https://storage.readdy-site.link/project_files/33ed597b-51ca-4aa6-975b-83a1f344525b/85552f8b-8504-49d8-ba44-460efe297869_compressed_dk.remesas.logo.webp"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  scrolled
                    ? 'text-foreground-800 hover:text-primary-950'
                    : 'text-background-50 hover:text-background-200'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5927585412"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-background-50 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <i className="ri-whatsapp-line w-4 h-4 flex items-center justify-center"></i>
              Empezar envío
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Menú"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors ${
              scrolled
                ? 'bg-background-100 text-primary-950'
                : 'bg-background-50/20 text-background-50'
            }`}
          >
            <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl w-5 h-5 flex items-center justify-center`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background-50 border-t border-background-200/70 px-4 py-6">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground-800 hover:text-primary-950 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#calculadora"
                onClick={() => setMobileOpen(false)}
                className="bg-[#25D366] hover:bg-[#20bd5a] text-background-50 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2 mt-2"
              >
                <i className="ri-whatsapp-line w-4 h-4 flex items-center justify-center"></i>
                Empezar envío
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}