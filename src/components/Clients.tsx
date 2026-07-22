import { useState, useEffect, useRef } from 'react';

const clients = [
  { id: 1, image: '/assets/clientes/cliente-01.jpg', alt: 'Cliente atendido pelo advogado Pedro Dantas' },
  { id: 2, image: '/assets/clientes/cliente-02.jpg', alt: 'Cliente com benefício concedido' },
  { id: 3, image: '/assets/clientes/cliente-03.jpg', alt: 'Cliente satisfeita com o atendimento' },
  { id: 4, image: '/assets/clientes/cliente-04.jpg', alt: 'Cliente no escritório Pedro Dantas Advocacia' },
  { id: 5, image: '/assets/clientes/cliente-05.jpg', alt: 'Cliente satisfeito após concessão do benefício' },
  { id: 6, image: '/assets/clientes/cliente-06.jpg', alt: 'Cliente em atendimento presencial' },
  { id: 7, image: '/assets/clientes/cliente-07.jpg', alt: 'Cliente na recepção do escritório' },
  { id: 8, image: '/assets/clientes/cliente-08.jpg', alt: 'Cliente apresentando documentação' },
  { id: 9, image: '/assets/clientes/cliente-09.jpg', alt: 'Cliente comemorando benefício concedido' },
];

const Clients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 lg:py-32 bg-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Nossos Clientes
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Quem já confiou no nosso trabalho
          </h3>
          <p className="text-lg text-slate-600">
            Cada caso é único, e cada cliente atendido é motivo de orgulho para nós. Nossa maior recompensa é ver seu direito garantido.
          </p>
        </div>

        {/* Mobile Horizontal Scroll / Desktop Grid */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="snap-center shrink-0 w-[85vw] sm:w-auto relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 bg-slate-50 aspect-[3/4]"
              >
                <img 
                  src={client.image} 
                  alt={client.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle overlay for better blending */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Clients;
