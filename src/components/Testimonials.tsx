import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria José Santos',
      role: 'Aposentadoria Concedida',
      text: 'Depois de ter meu auxílio negado duas vezes, procurei o escritório. Fui super bem acolhida e em poucos meses conseguiram reverter minha situação na justiça. Profissionais excelentes!',
      rating: 5,
    },
    {
      id: 2,
      name: 'João Pedro Silva',
      role: 'Benefício BPC/LOAS',
      text: 'Fizemos o processo do meu filho com eles. A equipe é muito humana, explicaram tudo sem usar palavras difíceis e nos deram total suporte. Nota mil.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ana Cláudia Mendes',
      role: 'Pensão por Morte',
      text: 'Num momento de tanta dor, foi fundamental ter advogados que cuidaram de toda a burocracia com o INSS pra mim. Recomendo de olhos fechados.',
      rating: 5,
    }
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          <div className="lg:col-span-1">
            <h2 className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-3">
              Depoimentos
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              A confiança de quem já teve seu direito garantido
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Nosso maior orgulho não são apenas os processos vencidos, mas a tranquilidade devolvida a cada família que atendemos.
            </p>
            
            <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl border border-white/10">
              <div className="text-5xl font-bold text-brand-gold">4.9</div>
              <div>
                <div className="flex text-brand-gold mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-300">Baseado em 58 avaliações no Google</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id} 
                className={`bg-white text-slate-800 rounded-2xl p-8 shadow-xl relative ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Quote className="w-10 h-10 text-brand-gold/20 absolute top-6 right-6" />
                <div className="flex text-brand-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-brand-navy">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy">{testimonial.name}</h5>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
