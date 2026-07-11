import { useState, useRef, useEffect } from 'react';
import { priceList, heroStats, destinationCountries } from '@/mocks/home';

export default function HeroSection() {
  const [selectedPriceIndex, setSelectedPriceIndex] = useState(4); // default $25
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0); // default Venezuela
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const priceDropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isScrollingRef = useRef(false);

  const selectedPrice = priceList[selectedPriceIndex];
  const selectedCountry = destinationCountries[selectedCountryIndex];

  const resetTouchScrollState = () => {
    window.setTimeout(() => {
      isScrollingRef.current = false;
      touchStartRef.current = null;
    }, 80);
  };

  const dropdownScrollProps = {
    onTouchStart: (e: React.TouchEvent) => {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
      isScrollingRef.current = false;
    },
    onTouchMove: (e: React.TouchEvent) => {
      if (!touchStartRef.current) return;
      const dx = Math.abs(e.touches[0].clientX - touchStartRef.current.x);
      const dy = Math.abs(e.touches[0].clientY - touchStartRef.current.y);
      if (dx > 8 || dy > 8) {
        isScrollingRef.current = true;
      }
    },
    onTouchEnd: resetTouchScrollState,
    onTouchCancel: resetTouchScrollState,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
    },
  };

  const handleDropdownSelect = (selectFn: () => void) => {
    if (isScrollingRef.current) return;
    selectFn();
  };

  const selectPrice = (index: number) => {
    setSelectedPriceIndex(index);
    setShowPriceDropdown(false);
  };

  const selectCountry = (index: number) => {
    setSelectedCountryIndex(index);
    setShowCountryDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isScrollingRef.current) return;

      const target = e.target as Node;
      if (priceDropdownRef.current && !priceDropdownRef.current.contains(target)) {
        setShowPriceDropdown(false);
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(target)) {
        setShowCountryDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Format receive amount based on country currency
  const formatReceiveAmount = () => {
    const raw = selectedPrice.usd * selectedCountry.rate;
    const currency = selectedCountry.currency;

    const localeMap: Record<string, string> = {
      USD: 'en-US',
      MXN: 'es-MX',
      COP: 'es-CO',
      BRL: 'pt-BR',
      CUP: 'es-CU',
      PEN: 'es-PE',
      CLP: 'es-CL',
      BOB: 'es-BO',
      EUR: 'es-ES',
      GBP: 'en-GB',
      VES: 'es-VE',
    };

    const noDecimalCurrencies = ['COP', 'CLP', 'CUP', 'VES'];

    try {
      return new Intl.NumberFormat(localeMap[currency] || 'es-VE', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: noDecimalCurrencies.includes(currency) ? 0 : 2,
        maximumFractionDigits: noDecimalCurrencies.includes(currency) ? 0 : 2,
      }).format(raw);
    } catch {
      return `${currency} ${raw.toLocaleString('es-VE')}`;
    }
  };

  const formatNumber = (num: number) =>
    num.toLocaleString('es-VE');

  const renderStats = () => (
    <div className="mt-10 grid grid-cols-3 max-w-lg gap-6">
      {heroStats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl md:text-3xl font-bold font-heading flex items-center justify-center gap-1 text-yellow-400">
            {stat.value.includes('★') ? (
              <>
                {stat.value.replace('★', '')}
                <span className="text-yellow-400">★</span>
              </>
            ) : (
              stat.value
            )}
          </div>
          <div className="text-xs md:text-sm text-background-50 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );

  const renderCalculator = (isMobile: boolean) => (
    <div className={isMobile ? 'mt-10' : 'lg:col-span-5'} id="calculadora">
      <div
        className={`rounded-3xl p-3 md:p-3 w-full max-w-md mx-auto lg:mx-0 ${
          isMobile
            ? 'bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 shadow-xl border border-primary-800/40'
            : 'bg-background-50/60 backdrop-blur-xl shadow-[0_30px_60px_-20px_rgba(13,40,30,0.45)] border border-background-200/40'
        }`}
      >
        {/* Destination — Now a dropdown */}
        <div className={`rounded-2xl p-4 mb-2 relative ${isMobile ? 'bg-black/20' : 'bg-background-100/70'}`} ref={countryDropdownRef}>
          <label className={`text-xs font-medium ${isMobile ? 'text-white/80' : 'text-foreground-600'}`}>Destino</label>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowCountryDropdown(!showCountryDropdown);
              setShowPriceDropdown(false);
            }}
            className="w-full mt-1 flex items-center gap-3 cursor-pointer touch-manipulation"
          >
            <span className="w-7 h-7 rounded-full overflow-hidden border border-background-300/50 flex-shrink-0">
              <img
                alt={selectedCountry.name}
                className="w-full h-full object-cover"
                src={selectedCountry.flag}
              />
            </span>
            <span className={`font-semibold ${isMobile ? 'text-white' : 'text-foreground-950'}`}>Enviar a {selectedCountry.name}</span>
            <i
              className={`ri-arrow-down-s-line text-xl w-5 h-5 flex items-center justify-center ml-auto transition-transform ${showCountryDropdown ? 'rotate-180' : ''} ${isMobile ? 'text-white/80' : 'text-foreground-700'}`}
            ></i>
          </button>

          {showCountryDropdown && (
            <div
              className="absolute left-0 right-0 top-full mt-1 bg-background-50 border border-background-200 rounded-2xl shadow-lg z-50 max-h-64 overflow-y-auto overscroll-contain touch-pan-y dropdown-scroll"
              {...dropdownScrollProps}
            >
              {destinationCountries.map((country, i) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleDropdownSelect(() => selectCountry(i))}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer touch-manipulation ${selectedCountryIndex === i ? 'bg-accent-100' : 'hover:bg-background-100 active:bg-background-200'}`}
                >
                  <span className="w-6 h-6 rounded-full overflow-hidden border border-background-300/50 flex-shrink-0">
                    <img
                      alt={country.name}
                      className="w-full h-full object-cover"
                      src={country.flag}
                    />
                  </span>
                  <span className="text-foreground-950 font-medium">{country.name}</span>
                  <span className="text-foreground-600 text-sm ml-auto">{country.currency}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Send Amount — Dropdown with fixed prices */}
        <div className={`rounded-2xl p-4 mb-2 relative ${isMobile ? 'bg-black/20' : 'bg-background-100/70'}`} ref={priceDropdownRef}>
          <label className={`text-xs font-medium ${isMobile ? 'text-white/80' : 'text-foreground-600'}`}>
            ¿Cuánto quieres enviar?
          </label>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowPriceDropdown(!showPriceDropdown);
              setShowCountryDropdown(false);
            }}
            className="w-full mt-1 flex items-center justify-between cursor-pointer touch-manipulation"
          >
            <span className={`text-3xl font-bold font-heading ${isMobile ? 'text-white' : 'text-foreground-950'}`}>
              {formatNumber(selectedPrice.gyd)}
            </span>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full overflow-hidden border border-background-300/50 flex-shrink-0">
                <img
                  alt="Guyana"
                  className="w-full h-full object-cover"
                  src="https://flagcdn.com/w80/gy.png"
                />
              </span>
              <span className={`font-semibold ${isMobile ? 'text-white' : 'text-foreground-950'}`}>GYD</span>
              <i
                className={`ri-arrow-down-s-line text-xl w-5 h-5 flex items-center justify-center transition-transform ${showPriceDropdown ? 'rotate-180' : ''} ${isMobile ? 'text-white/80' : 'text-foreground-700'}`}
              ></i>
            </div>
          </button>

          {showPriceDropdown && (
            <div
              className="absolute left-0 right-0 top-full mt-1 bg-background-50 border border-background-200 rounded-2xl shadow-lg z-50 max-h-72 overflow-y-auto overscroll-contain touch-pan-y dropdown-scroll"
              {...dropdownScrollProps}
            >
              {priceList.map((item, i) => (
                <button
                  key={item.usd}
                  type="button"
                  onClick={() => handleDropdownSelect(() => selectPrice(i))}
                  className={`w-full flex items-center justify-between px-4 py-3 transition-colors cursor-pointer touch-manipulation ${selectedPriceIndex === i ? 'bg-accent-100' : 'hover:bg-background-100 active:bg-background-200'}`}
                >
                  <span className="text-foreground-950 font-bold text-lg font-heading">
                    {formatNumber(item.gyd)} GYD
                  </span>
                  <span className="text-foreground-600 text-xs">
                    = ${item.usd} USD
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Receive Amount */}
        <div className={`rounded-2xl p-4 mb-2 ${isMobile ? 'bg-black/20' : 'bg-background-100/70'}`}>
          <label className={`text-xs font-medium ${isMobile ? 'text-white/80' : 'text-foreground-600'}`}>
            ¿Cuánto recibirán?
          </label>
          <div className="flex items-center justify-between mt-1">
            <div className={`text-2xl md:text-3xl font-bold font-heading truncate max-w-[65%] ${isMobile ? 'text-white' : 'text-foreground-950'}`}>
              {formatReceiveAmount()}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="w-7 h-7 rounded-full overflow-hidden border border-background-300/50 flex-shrink-0">
                <img
                  alt={selectedCountry.name}
                  className="w-full h-full object-cover"
                  src={selectedCountry.flag}
                />
              </span>
              <span className={`font-semibold ${isMobile ? 'text-white' : 'text-foreground-950'}`}>{selectedCountry.currency}</span>
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0"></span>
            </div>
          </div>
        </div>

        {/* Rate Banner */}
        <div className="bg-accent-500 rounded-2xl px-4 py-3 mb-2 flex items-center justify-between">
          <span className="text-foreground-950 font-semibold text-sm">
            1 USD = {selectedCountry.rate.toLocaleString('es-VE')} {selectedCountry.currency}
          </span>
          <span className="text-foreground-950 font-bold text-sm whitespace-nowrap">
            {formatReceiveAmount()}
          </span>
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/5927585412"
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-background-50 font-semibold py-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap animate-glow"
        >
          <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center text-lg"></i>
          Consultar otras tarifas
        </a>

        <p className={`mt-3 text-xs text-center px-2 ${isMobile ? 'text-white/70' : 'text-foreground-600'}`}>
          El tipo de cambio puede variar durante el día. Aplican Términos y Privacidad.
        </p>
      </div>
    </div>
  );

  const renderHeroContent = () => (
    <>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-primary-900/80 border border-primary-800 px-4 py-1.5 rounded-full text-xs md:text-sm text-background-200 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
        Envíos en menos de 20 minutos a toda Latinoamérica
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-[0.95] tracking-tight">
        Aunque estés <span className="text-accent-500">lejos</span>,
        <br />
        tu amor llega a casa.
      </h1>

      {/* Subline */}
      <p className="mt-6 text-lg md:text-xl text-background-200 max-w-xl leading-relaxed">
        Envía dinero a Latinoamérica en minutos, con la mejor tasa del mercado y comisión cero en tu primer envío. Solo necesitas un mensaje de WhatsApp.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-lg">
        <a
          href="https://wa.me/5927585412"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-4 rounded-full flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center text-lg"></i>
          Empezar envío gratis
        </a>
        <a
          href="#como-funciona"
          className="border border-primary-700 hover:border-accent-500 text-background-50 font-semibold px-6 py-4 rounded-full flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap transition-colors"
        >
          <i className="ri-play-circle-line w-5 h-5 flex items-center justify-center text-lg"></i>
          Cómo funciona
        </a>
      </div>
    </>
  );

  return (
    <section className="relative text-background-50 overflow-hidden md:pt-32 md:pb-24 md:min-h-0 bg-primary-950">
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        {/* Hero area with video bg */}
        <div className="relative overflow-hidden pt-28 pb-8">
          {/* Video bg */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://storage.readdy-site.link/project_files/33ed597b-51ca-4aa6-975b-83a1f344525b/98488f3a-41e5-4fca-ad43-126d98936d7c_video-movil.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-primary-950/70"></div>
          </div>

          {/* Content */}
          <div className="relative px-4 max-w-7xl mx-auto">
            {renderHeroContent()}
          </div>
        </div>

        {/* Stats + Calculator */}
        <div className="px-4 pb-16 max-w-7xl mx-auto">
          <div className="rounded-[2rem]">
          {renderStats()}
          {renderCalculator(true)}
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:block">
        {/* Video bg */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://readdy.ai/api/search-image?query=Warm%20cozy%20latina%20mother%20sitting%20on%20sofa%20at%20home%20talking%20on%20smartphone%20video%20call%20with%20her%20child%2C%20smiling%20happily%2C%20warm%20afternoon%20light%20through%20window%2C%20everyday%20home%20interior%20with%20plants%20and%20soft%20neutral%20colors%2C%20emotional%20family%20connection%20from%20distance%2C%20candid%20lifestyle%20photography%2C%20soft%20bokeh%20background%2C%20no%20christmas%20decorations%2C%20natural%20warm%20tones&width=1920&height=1080&seq=hero-bg-mom-2026-v2&orientation=landscape"
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source
              src="https://storage.readdy-site.link/project_files/33ed597b-51ca-4aa6-975b-83a1f344525b/0e1e526a-3c55-487c-9c68-71c63825d5a7_dk-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-primary-950/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-12 gap-16 items-center pt-32 pb-24">
          <div className="col-span-7">
            {renderHeroContent()}
            {renderStats()}
          </div>

          {renderCalculator(false)}
        </div>
      </div>
    </section>
  );
}