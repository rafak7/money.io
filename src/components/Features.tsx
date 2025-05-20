import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, Calendar, Users, FileText } from "lucide-react";
import IPhoneMockup from "./IPhoneMockup";

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

// Sequência das mensagens do chat
const chatSequence = [
  { sender: "assistant", text: "Olá! Qual despesa você quer registrar hoje?" },
  { sender: "user", text: "Café da manhã R$ 25,00" },
  { sender: "assistant", text: "Registrei R$ 25,00 para \"Café da manhã\" na categoria Alimentação! Seu saldo atual é R$ 1.245,50" }
];

const ChatSimulation = () => {
  const [messages, setMessages] = useState([]);
  const [currentTyping, setCurrentTyping] = useState(null);
  const chatContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  // Limpar todos os timeouts quando necessário
  const clearAllTimeouts = () => {
    const id = window.setTimeout(function() {}, 0);
    for (let i = 0; i < id; i++) {
      window.clearTimeout(i);
    }
  };

  // Função para reiniciar a simulação
  const restartChat = () => {
    setMessages([]);
    setCurrentTyping(null);
    
    // Pequeno atraso antes de reiniciar
    timeoutRef.current = setTimeout(() => {
      simulateTyping(chatSequence[0], 0);
    }, 2000);
  };

  // Simular a digitação de uma mensagem com animação
  const simulateTyping = (message, index) => {
    setCurrentTyping({ 
      index,
      sender: message.sender,
      text: "",
      fullText: message.text
    });

    // Digitar cada caractere com um pequeno atraso
    let i = 0;
    const typeInterval = setInterval(() => {
      setCurrentTyping(current => {
        if (!current || i >= message.text.length) {
          clearInterval(typeInterval);
          return current;
        }
        
        return {
          ...current,
          text: message.text.substring(0, i + 1)
        };
      });
      
      i++;
      
      // Quando terminar de digitar, adicionar mensagem e iniciar próxima
      if (i >= message.text.length) {
        clearInterval(typeInterval);
        
        timeoutRef.current = setTimeout(() => {
          setMessages(prev => [...prev, message]);
          setCurrentTyping(null);
          
          // Verificar se há mais mensagens para mostrar
          if (index + 1 < chatSequence.length) {
            timeoutRef.current = setTimeout(() => simulateTyping(chatSequence[index + 1], index + 1), 1000);
          } else {
            // Quando chegar ao fim da sequência, aguardar e reiniciar
            timeoutRef.current = setTimeout(() => {
              // Fade out das mensagens antes de reiniciar
              setMessages(prev => prev.map(msg => ({ ...msg, fadeOut: true })));
              
              // Limpar mensagens e reiniciar após a animação de fade out
              timeoutRef.current = setTimeout(restartChat, 1500);
            }, 3000);
          }
        }, 500);
      }
    }, 40 + Math.random() * 30);
  };

  // Iniciar a simulação quando o componente montar
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      simulateTyping(chatSequence[0], 0);
    }, 1000);
    
    // Limpar timeouts quando o componente desmontar
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearAllTimeouts();
    };
  }, []);
  
  // Rolagem automática para a parte inferior do chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, currentTyping]);
  
  return (
    <div className="p-4 h-full flex flex-col">
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto">
        {/* Mensagens já enviadas */}
        {messages.map((message, index) => (
          message.sender === "assistant" ? (
            <div 
              key={index} 
              className={`bg-white p-4 rounded-lg shadow-sm mb-4 transition-opacity duration-1000 ${
                message.fadeOut ? 'opacity-0' : 'animate-fade-in opacity-100'
              }`}
            >
              <div className="font-medium mb-1">Assistente</div>
              <div>{message.text}</div>
            </div>
          ) : (
            <div 
              key={index} 
              className={`bg-blue-100 p-4 rounded-lg shadow-sm mb-4 ml-auto mr-2 max-w-[80%] transition-opacity duration-1000 ${
                message.fadeOut ? 'opacity-0' : 'animate-slideIn opacity-100'
              }`}
            >
              <div>{message.text}</div>
            </div>
          )
        ))}
        
        {/* Mensagem sendo digitada */}
        {currentTyping && (
          currentTyping.sender === "assistant" ? (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 animate-fade-in">
              <div className="font-medium mb-1">Assistente</div>
              <div>
                {currentTyping.text}
                <span className="animate-blink ml-[1px] inline-block w-[2px] h-[16px] bg-gray-400 align-middle"></span>
              </div>
            </div>
          ) : (
            <div className="bg-blue-100 p-4 rounded-lg shadow-sm mb-4 ml-auto mr-2 max-w-[80%] animate-slideIn">
              <div>
                {currentTyping.text}
                <span className="animate-blink ml-[1px] inline-block w-[2px] h-[16px] bg-gray-400 align-middle"></span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

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

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="flex flex-col items-center">
              <IPhoneMockup />
              <p className="mt-4 text-gray-600 font-medium text-center">Vídeo demonstração</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-primary to-success p-8 md:p-12 rounded-2xl text-white">
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
