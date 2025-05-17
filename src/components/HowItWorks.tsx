
import React from "react";
import { MessageSquare, Calendar, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Envie uma mensagem",
    description:
      "Conecte-se com nosso assistente pelo WhatsApp sem precisar baixar nenhum aplicativo adicional.",
  },
  {
    number: "02",
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Registre seus gastos",
    description:
      "Simplesmente envie mensagens relatando suas despesas e receitas. Nosso assistente cuida de todo o resto.",
  },
  {
    number: "03",
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Receba o resumo financeiro",
    description:
      "Obtenha relatórios diários, semanais ou mensais sobre seus hábitos financeiros e dicas personalizadas.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24" id="how-it-works">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três passos simples para começar a controlar suas finanças sem esforço
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Line connecting the steps on larger screens */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-0.5 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex-1 relative z-10"
            >
              <div className="bg-white border border-gray-100 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                {/* Step number and icon */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                </div>
                
                {/* Step content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Pronto para experimentar a maneira mais simples de gerenciar suas finanças?
          </p>
          <a 
            href="#pricing" 
            className="btn-primary inline-block mx-auto"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
