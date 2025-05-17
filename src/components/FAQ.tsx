
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como funciona o Money.io?",
    answer:
      "O Money.io é um assistente financeiro que opera via WhatsApp. Você registra seus gastos e receitas enviando mensagens simples, como 'Gastei R$45 no almoço hoje'. O assistente processa essa informação, categoriza automaticamente e armazena em sua conta. Você pode consultar saldo, extratos e relatórios a qualquer momento.",
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer:
      "Não! Essa é a beleza do Money.io. Você usa apenas o WhatsApp, que provavelmente já está instalado no seu celular. Basta iniciar uma conversa com nosso número e começar a usar.",
  },
  {
    question: "É seguro informar meus dados financeiros?",
    answer:
      "Sim, a segurança é nossa prioridade. Utilizamos criptografia de ponta a ponta nas conversas via WhatsApp e armazenamos seus dados em servidores seguros com as melhores práticas de proteção de dados. Não solicitamos informações sensíveis como senhas bancárias ou números de cartão.",
  },
  {
    question: "Como faço para mudar de plano?",
    answer:
      "É simples! Dentro da conversa com o assistente, você pode digitar 'mudar plano' a qualquer momento. O sistema irá mostrar as opções disponíveis e guiará você pelo processo de upgrade ou downgrade do seu plano atual.",
  },
  {
    question: "Posso exportar meus dados financeiros?",
    answer:
      "Com certeza! No plano Premium, você pode solicitar a exportação dos seus dados em formato Excel ou PDF a qualquer momento. Basta enviar o comando 'exportar dados' seguido do período desejado para o assistente no WhatsApp.",
  },
  {
    question: "O que acontece se eu exceder o limite de transações do plano gratuito?",
    answer:
      "No plano gratuito, você tem direito a 50 transações por mês. Se exceder esse limite, você ainda poderá conversar com o assistente, mas não poderá registrar novas transações até o próximo ciclo mensal. Você receberá notificações quando estiver se aproximando do limite.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre o Money.io
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato com nossa equipe de suporte.
          </p>
          <a
            href="mailto:suporte@money.io"
            className="text-primary hover:underline"
          >
            suporte@money.io
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
