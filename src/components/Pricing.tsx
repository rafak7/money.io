
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    title: "Gratuito",
    price: "R$0",
    period: "/mês",
    description: "Perfeito para começar a controlar suas finanças",
    features: [
      "Registre até 50 transações por mês",
      "Relatório mensal básico",
      "Categorização automática",
      "Suporte via WhatsApp (horário comercial)"
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    title: "Premium",
    price: "R$19,90",
    period: "/mês",
    description: "Ideal para quem quer controle financeiro completo",
    features: [
      "Transações ilimitadas",
      "Relatórios diários, semanais e mensais",
      "Alertas personalizados de orçamento",
      "Categorização avançada com IA",
      "Exportação para Excel/PDF",
      "Suporte prioritário 24/7"
    ],
    cta: "Assinar Premium",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano perfeito para suas finanças
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`flex-1 bg-white rounded-2xl border ${
                plan.popular ? "border-primary shadow-lg" : "border-gray-200"
              } overflow-hidden`}
            >
              {plan.popular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                  Mais Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular ? "" : "bg-white text-primary border border-primary hover:bg-gray-50"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Todos os planos incluem acesso ao assistente via WhatsApp.</p>
          <p className="mt-1">Cancele a qualquer momento sem multas ou taxas adicionais.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
