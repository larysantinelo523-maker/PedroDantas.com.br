import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Atendimento
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              Fale com nossos advogados agora mesmo
            </h3>
            <p className="text-lg text-slate-600 mb-10">
              Estamos prontos para analisar o seu caso. Escolha o canal de sua preferência. O atendimento pelo WhatsApp é a forma mais rápida de falar conosco.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">Telefone / WhatsApp</h4>
                  <p className="text-slate-600 mb-2">(81) 99658-7795</p>
                  <a 
                    href="https://wa.me/5581996587795" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-brand-gold hover:text-brand-gold-light"
                  >
                    Enviar mensagem <MessageCircle className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">Endereço</h4>
                  <p className="text-slate-600 leading-relaxed max-w-sm">
                    Av. Norte Miguel Arraes de Alencar, 4097<br/>
                    Tamarineira, Recife - PE<br/>
                    CEP: 52051-000
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-slate-600">Segunda a Sexta: 08h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            {/* Embedded Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.6033488796684!2d-34.9015949!3d-8.0323387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18fc30d9fb6f%3A0x6b840e6c27f71120!2sAv.%20Norte%20Miguel%20Arraes%20de%20Alencar%2C%204097%20-%20Tamarineira%2C%20Recife%20-%20PE%2C%2052051-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do Escritório Pedro Dantas Advocacia"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
