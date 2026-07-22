import { HeartHandshake, Scale, Award } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <RevealOnScroll className="order-2 lg:order-1 relative max-w-[392px] mx-auto lg:ml-auto lg:mr-8 w-full">
            <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform -rotate-3 z-0"></div>
            <img 
              src="/assets/reuniao.jpg" 
              alt="Reunião com cliente" 
              className="relative z-10 rounded-2xl shadow-xl w-full aspect-[392/671] object-cover bg-slate-200"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                // Carrega um pixel transparente para não mostrar ícone quebrado, deixando apenas o fundo cinza
                target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
              }}
            />
            
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 lg:left-auto lg:translate-x-0 lg:-right-8 lg:-bottom-6 bg-brand-navy text-white p-4 sm:p-5 rounded-2xl shadow-2xl z-20 flex items-start gap-3 sm:gap-4 w-[290px] sm:w-[320px]">
              <div className="bg-brand-gold/10 p-3 rounded-xl shrink-0">
                <HeartHandshake className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">Acolhimento real</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nosso escritório é um espaço seguro. Acolhemos a diversidade e tratamos cada caso com a humanidade que ele exige.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1} className="order-1 lg:order-2">
            <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Sobre o Escritório
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              Experiência sólida e compromisso inabalável com os seus direitos
            </h3>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                O escritório <strong>Pedro Dantas Advocacia</strong> nasceu da necessidade de oferecer um atendimento jurídico previdenciário que vá além da técnica. Entendemos que por trás de cada benefício negado, existe uma vida, uma família e um momento de vulnerabilidade.
              </p>
              <p>
                Somos orgulhosamente uma equipe comprometida com a ética e a excelência. Acreditamos que a justiça deve ser acessível, transparente e, acima de tudo, humana. Trabalhamos para que cada cliente se sinta acolhido e seguro durante todo o processo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-brand-gold" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Ética e Transparência</h4>
                  <p className="text-sm text-slate-500">Falamos a sua língua, sem juridiquês complicado. Você entende cada passo do processo.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-navy" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Alta Taxa de Êxito</h4>
                  <p className="text-sm text-slate-500">Nossa especialização focada garante as melhores estratégias para reverter negativas do INSS.</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
};

export default About;
