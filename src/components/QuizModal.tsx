import { useState } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Answers = {
  nome: string;
  beneficio: string;
  statusINSS: string;
  idade: string;
};

const QuizModal = ({ isOpen, onClose }: QuizModalProps) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    nome: '',
    beneficio: '',
    statusINSS: '',
    idade: '',
  });
  
  // State to track if user selected "Outros" and is typing a custom benefit
  const [isCustomBeneficio, setIsCustomBeneficio] = useState(false);
  const [customBeneficioText, setCustomBeneficioText] = useState('');

  if (!isOpen) return null;

  const handleAnswer = (field: keyof Answers, value: string) => {
    if (field === 'beneficio' && value === 'Outro (Revisões, etc)') {
      setIsCustomBeneficio(true);
      setAnswers((prev) => ({ ...prev, beneficio: '' })); // clear to allow custom text
      return;
    }
    
    // If selecting a standard option while custom input was open, close it
    if (field === 'beneficio' && value !== 'Outro (Revisões, etc)') {
      setIsCustomBeneficio(false);
    }

    setAnswers((prev) => ({ ...prev, [field]: value }));
    
    if (field !== 'nome') {
      setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 300);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answers.nome.trim().length > 1) {
      setStep(2);
    }
  };

  const handleCustomBeneficioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customBeneficioText.trim().length > 2) {
      setAnswers((prev) => ({ ...prev, beneficio: customBeneficioText }));
      setStep(3);
    }
  };

  const formatName = (name: string) => {
    return name
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleFinish = () => {
    const formattedName = formatName(answers.nome);
    const text = `Olá, Dr. Pedro! Meu nome é *${formattedName}* e gostaria de uma análise gratuita do meu caso.%0A%0A*Informações:*%0A- Benefício que busco: ${answers.beneficio}%0A- Situação no INSS: ${answers.statusINSS}%0A- Minha idade: ${answers.idade}%0A%0APodemos conversar?`;
    window.open(`https://wa.me/5581996587795?text=${text}`, '_blank');
    onClose();
    // Reset state after a short delay
    setTimeout(() => {
      setStep(1);
      setIsCustomBeneficio(false);
      setCustomBeneficioText('');
      setAnswers({ nome: '', beneficio: '', statusINSS: '', idade: '' });
    }, 500);
  };

  const renderOptions = (field: keyof Answers, options: string[]) => {
    return (
      <div className="flex flex-col gap-3 mt-6">
        {options.map((option) => {
          const isSelected = field === 'beneficio' && isCustomBeneficio 
            ? option === 'Outro (Revisões, etc)' 
            : answers[field] === option;

          return (
            <button
              key={option}
              onClick={() => handleAnswer(field, option)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                isSelected 
                  ? 'border-brand-navy bg-brand-navy/5' 
                  : 'border-slate-200 hover:border-brand-gold hover:bg-slate-50'
              }`}
            >
              <span className={`font-medium ${isSelected ? 'text-brand-navy' : 'text-slate-700 group-hover:text-brand-navy'}`}>
                {option}
              </span>
              {isSelected && (
                <CheckCircle2 className="w-5 h-5 text-brand-navy" />
              )}
            </button>
          )
        })}
      </div>
    );
  };

  const firstName = answers.nome.split(' ')[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold">
              {step <= 4 ? step : 4}
            </span>
            <span className="text-sm font-semibold text-slate-500">
              de 4 perguntas
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-500 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-100">
          <div 
            className="h-full bg-brand-gold transition-all duration-500 ease-out"
            style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
          ></div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {step === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-brand-navy leading-tight mb-6">
                Para começarmos, como podemos te chamar?
              </h3>
              <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  placeholder="Digite seu nome"
                  value={answers.nome}
                  onChange={(e) => handleAnswer('nome', e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-brand-navy focus:outline-none transition-colors text-lg"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={answers.nome.trim().length < 2}
                  className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-navy px-6 py-4 rounded-xl font-bold text-lg hover:bg-brand-gold-light transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  Continuar
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-brand-navy leading-tight">
                <span className="text-brand-gold">{firstName}</span>, qual o benefício que você está buscando?
              </h3>
              {renderOptions('beneficio', [
                'Aposentadoria',
                'Auxílio-Doença',
                'BPC / LOAS',
                'Pensão por Morte',
                'Salário-Maternidade',
                'Outro (Revisões, etc)'
              ])}
              
              {isCustomBeneficio && (
                <form onSubmit={handleCustomBeneficioSubmit} className="mt-4 animate-fade-in flex flex-col gap-4">
                  <input 
                    type="text" 
                    placeholder="Qual benefício ou serviço?"
                    value={customBeneficioText}
                    onChange={(e) => setCustomBeneficioText(e.target.value)}
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-brand-navy focus:outline-none transition-colors"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={customBeneficioText.trim().length < 3}
                    className="w-full flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-navy-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirmar
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-brand-navy leading-tight">
                <span className="text-brand-gold">{firstName}</span>, você já fez o pedido no INSS?
              </h3>
              {renderOptions('statusINSS', [
                'Sim, e foi negado',
                'Sim, e está em análise',
                'Não, ainda vou pedir'
              ])}
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-brand-navy leading-tight">
                <span className="text-brand-gold">{firstName}</span>, qual a sua idade?
              </h3>
              {renderOptions('idade', [
                'Menos de 60 anos',
                'Entre 60 e 65 anos',
                'Mais de 65 anos'
              ])}
            </div>
          )}

          {step === 5 && (
            <div className="animate-fade-in text-center py-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                Tudo certo, {firstName}!
              </h3>
              <p className="text-slate-600 mb-8">
                Já preparamos a sua mensagem. Clique no botão abaixo para falar direto com o Dr. Pedro no WhatsApp.
              </p>
              <button
                onClick={handleFinish}
                className="w-full flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-brand-navy-light transition-all hover:scale-105"
              >
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
        
        {/* Footer actions for step back */}
        {step > 1 && step < 5 && (
          <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-start">
            <button
              onClick={() => {
                if (step === 2 && isCustomBeneficio) {
                  setIsCustomBeneficio(false);
                  setCustomBeneficioText('');
                } else {
                  setStep(step - 1);
                }
              }}
              className="text-sm font-semibold text-slate-500 hover:text-brand-navy transition-colors"
            >
              ← Voltar
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuizModal;
