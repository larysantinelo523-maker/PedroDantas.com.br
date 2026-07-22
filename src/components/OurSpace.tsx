import { useState } from 'react';
import { MapPin, Hand } from 'lucide-react';

const OurSpace = () => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const [activeTab, setActiveTab] = useState<'entrada' | 'waiting_room' | 'office'>('entrada');

  return (
    <section id="nosso-espaco" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Nosso Espaço
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Sinta-se em casa
          </h3>
          <p className="text-lg text-slate-600">
            Preparamos um ambiente acolhedor, moderno e discreto para receber você. Faça um tour virtual pelo nosso escritório antes mesmo de chegar.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <div className="p-4 sm:p-8 flex flex-col lg:flex-row items-center justify-between bg-brand-navy text-white">
            <div className="flex items-center gap-4 mb-6 lg:mb-0 w-full lg:w-auto">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Faça um Tour 360º</h4>
                <p className="text-slate-300 text-sm">Navegue pelo nosso escritório usando o mapa</p>
              </div>
            </div>
            
            {/* Tabs for maps */}
            <div className="flex flex-wrap sm:flex-nowrap p-1 bg-white/10 rounded-lg w-full lg:w-auto gap-1">
              <button 
                onClick={() => { setActiveTab('entrada'); setIsMapInteractive(false); }}
                className={`flex-1 px-3 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${activeTab === 'entrada' ? 'bg-brand-gold text-brand-navy shadow' : 'text-white hover:bg-white/5'}`}
              >
                Entrada Principal
              </button>
              <button 
                onClick={() => { setActiveTab('waiting_room'); setIsMapInteractive(false); }}
                className={`flex-1 px-3 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${activeTab === 'waiting_room' ? 'bg-brand-gold text-brand-navy shadow' : 'text-white hover:bg-white/5'}`}
              >
                Recepção
              </button>
              <button 
                onClick={() => { setActiveTab('office'); setIsMapInteractive(false); }}
                className={`flex-1 px-3 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all ${activeTab === 'office' ? 'bg-brand-gold text-brand-navy shadow' : 'text-white hover:bg-white/5'}`}
              >
                Sala de Reunião
              </button>
            </div>
          </div>
          
          {/* Iframe Container - Google Maps Street View */}
          <div 
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-slate-200 overflow-hidden relative group"
          >
            {/* Mobile Interaction Overlay */}
            {!isMapInteractive && (
              <div 
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 md:hidden cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMapInteractive(true);
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  setIsMapInteractive(true);
                }}
              >
                <div className="bg-brand-navy/90 text-white px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-sm shadow-lg animate-pulse">
                  <Hand className="w-5 h-5" />
                  <span className="font-semibold text-sm">Toque para explorar</span>
                </div>
              </div>
            )}
            <iframe 
              src={
                activeTab === 'entrada'
                  ? "https://www.google.com/maps/embed?pb=!4v1784701414998!6m8!1m7!1sCAoSHENJQUJJaENxQ24xeG1tNEhUSjh3Wk5mc2RzdE0.!2m2!1d-8.028379613322597!2d-34.90302264441019!3f292.22642587521716!4f-11.405232926314682!5f0.4000000000000002"
                  : activeTab === 'waiting_room'
                    ? "https://www.google.com/maps/embed?pb=!4v1784701250577!6m8!1m7!1sCAoSHENJQUJJaEJmWm5XazY5blhIZjJ2eTQyd0pGY2w.!2m2!1d-8.028337096106572!2d-34.90310848891932!3f157.97117709682442!4f-16.910456005821786!5f0.4000000000000002"
                    : "https://www.google.com/maps/embed?pb=!4v1784700550969!6m8!1m7!1sCAoSHENJQUJJaEI5MFljS29FX1VyYnVmaVVMaEtvUFo.!2m2!1d-8.028433374534435!2d-34.9030655666756!3f115.48440007002918!4f-12.15030867770092!5f0.4000000000000002"
              }
              width="100%" 
              style={{ border: 0, top: '-65px', height: 'calc(100% + 65px)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute left-0 w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSpace;
