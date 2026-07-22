import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5581996587795"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-2xl animate-bounce-slow group"
      aria-label="Falar conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip that shows on hover for desktop */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block border border-slate-100">
        Fale com um advogado agora
        <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45 border-r border-t border-slate-100"></div>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
