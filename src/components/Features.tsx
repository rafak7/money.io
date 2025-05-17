
import React from "react";
import { MessageSquare, Calendar, Users, FileText } from "lucide-react";

const featuresData = [
  {
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    title: "Registre despesas por texto",
    description: "Registre suas despesas facilmente enviando simples mensagens para o assistente no WhatsApp.",
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: "Consulte saldo e extrato",
    description: "Acesse seu saldo atual e extrato de transações rapidamente com simples comandos de texto.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" />,
    title: "Relatórios automáticos",
    description: "Receba relatórios periódicos sobre seus gastos e economias sem precisar solicitar.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Categorização automática",
    description: "Nunca esqueça de registrar seus gastos novamente. O sistema categoriza automaticamente suas despesas.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="features">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades Poderosas e Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um assistente financeiro que trabalha para você 24 horas por dia, direto no seu WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-success p-8 md:p-12 rounded-2xl text-white">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-6 lg:mb-0 lg:pr-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Experimente o futuro das finanças pessoais
              </h3>
              <p className="text-white/90">
                Comece a controlar suas finanças de forma inteligente hoje mesmo. Sem planilhas, sem apps complicados, apenas conversas naturais com seu assistente.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <a href="#pricing" className="bg-white text-primary py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                Ver planos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
