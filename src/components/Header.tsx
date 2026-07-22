import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function smoothScroll(targetY: number, duration: number) {
  const startY = window.scrollY;
  const difference = targetY - startY;
  const startTime = performance.now();

  function step() {
    const time = performance.now();
    let elapsed = (time - startTime) / duration;
    if (elapsed > 1) elapsed = 1;

    // easeInOutQuad
    const ease = elapsed < 0.5 ? 2 * elapsed * elapsed : -1 + (4 - 2 * elapsed) * elapsed;

    window.scrollTo(0, startY + difference * ease);

    if (elapsed < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;
        smoothScroll(offsetTop, 800); // 800ms duration (slow & smooth)
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-brand-navy py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/logo.png" 
              alt="PD Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none'; // Esconde se a imagem não existir ainda
              }}
            />
            <div>
              <h1 
                className={`font-bold text-2xl leading-tight tracking-tight ${isScrolled ? 'text-brand-navy' : 'text-white'}`}
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Pedro Dantas
              </h1>
              <p className={`text-xs uppercase tracking-widest ${isScrolled ? 'text-brand-gold' : 'text-brand-gold-light'}`}>
                Advocacia
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`font-medium text-sm hover:text-brand-gold transition-colors ${
                      isScrolled ? 'text-slate-700' : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href="https://wa.me/5581996587795" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-5 py-2.5 rounded-md font-semibold text-sm transition-all hover:scale-105 ${
                isScrolled 
                  ? 'bg-brand-navy text-white hover:bg-brand-navy-light' 
                  : 'bg-brand-gold text-brand-navy hover:bg-brand-gold-light'
              }`}
            >
              Falar com Advogado
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 transition-colors ${isScrolled ? 'text-brand-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors ${isScrolled ? 'text-brand-navy' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block px-6 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-brand-navy"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="px-6 pt-4 mt-2 border-t border-slate-100">
            <a 
              href="https://wa.me/5581996587795" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full bg-brand-navy text-white px-5 py-3 rounded-md font-semibold"
            >
              Falar com Advogado
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
