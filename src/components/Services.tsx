import { Stethoscope, UserX, Briefcase, FileText, Baby, FileSearch } from 'lucide-react';

interface ServicesProps {
  onOpenQuiz: () => void;
}

const Services = ({ onOpenQuiz }: ServicesProps) => {
  const services = [
    {
      id: 1,
      title: 'Auxílio-Doença Negado',
      description: 'Revertemos a decisão do perito do INSS. Analisamos seus laudos e entramos com recurso ou ação judicial para garantir seu benefício enquanto você não pode trabalhar.',
      icon: <Stethoscope className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'BPC/LOAS Indeferido',
      description: 'Atuamos na concessão do Benefício de Prestação Continuada para idosos e pessoas com deficiência que tiveram o pedido negado por questões de renda ou perícia.',
      icon: <UserX className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Aposentadoria Recusada',
      description: 'Revisamos o cálculo do tempo de contribuição, averbação de tempo rural ou especial, e corrigimos erros do INSS para garantir a melhor aposentadoria possível.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'Pensão por Morte',
      description: 'Garantimos o direito dos dependentes, resolvendo problemas de falta de qualidade de segurado do falecido ou não reconhecimento de união estável.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: 5,
      title: 'Salário-Maternidade',
      description: 'Ajudamos mães, gestantes, adotantes e até mães desempregadas a conseguirem o benefício negado indevidamente pelo INSS.',
      icon: <Baby className="w-8 h-8" />,
    },
    {
      id: 6,
      title: 'Outros Pedidos INSS',
      description: 'Análise completa de CNIS, planejamento previdenciário, acertos de contribuição e acompanhamento de recursos administrativos e judiciais.',
      icon: <FileSearch className="w-8 h-8" />,
    },
  ];

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
            Áreas de Atuação
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-6">
            Especialistas em causas contra o INSS
          </h3>
          <p className="text-lg text-slate-600">
            Nossa equipe atua focada em resolver os principais problemas que os segurados enfrentam com a Previdência Social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-slate-50 text-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={onOpenQuiz}
            className="inline-flex justify-center items-center gap-2 bg-brand-navy text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-brand-navy-light shadow-lg"
          >
            Quero analisar meu caso
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
