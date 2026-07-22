import { MessageCircle, FileCheck, Gavel, ThumbsUp, Coffee } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Análise do Caso',
      description: 'Você conta sua história pelo WhatsApp. Nossa equipe avalia a viabilidade do seu direito de forma gratuita.',
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Reunião Presencial',
      description: 'Marcamos um encontro no escritório para nos conhecermos melhor, entender cada detalhe e tirar todas as suas dúvidas.',
      icon: <Coffee className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Documentação',
      description: 'Orientamos exatamente quais documentos médicos e trabalhistas você precisa reunir para fortalecer o pedido.',
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      id: 4,
      title: 'Ação ou Recurso',
      description: 'Damos entrada no processo no INSS ou na Justiça Federal, com a estratégia jurídica mais ágil e segura.',
      icon: <Gavel className="w-6 h-6" />,
    },
    {
      id: 5,
      title: 'Acompanhamento',
      description: 'Nós cuidamos de tudo. Você recebe atualizações constantes do seu processo até a implantação do benefício.',
      icon: <ThumbsUp className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Como Funciona
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Um processo simples e transparente
          </h3>
          <p className="text-lg text-slate-600">
            Sabemos que burocracia causa ansiedade. Por isso, desenhamos um fluxo de atendimento para tirar o peso das suas costas.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 lg:border-none lg:shadow-none text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-brand-navy text-brand-gold rounded-full flex items-center justify-center mb-6 shadow-lg shadow-brand-navy/20 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-gold text-brand-navy rounded-full text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
