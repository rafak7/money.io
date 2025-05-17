import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden" id="hero">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-[10%] w-80 h-80 bg-blue-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-green-50/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-50/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 md:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 mb-8 text-base font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles size={18} className="mr-2" /> Novo assistente financeiro
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Seu dinheiro sob controle.
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">Sua vida simplificada.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 md:pr-10 leading-relaxed">
              Gerencie suas finanças sem sair do WhatsApp. Controle, registre e acompanhe seus gastos com um assistente 
              inteligente disponível 24h por dia.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
              <Button className="text-xl py-7 px-8 font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" size="lg">
                Começar agora - É grátis!
              </Button>
              
              <a href="#features" className="flex items-center justify-center px-8 py-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-all hover:border-gray-400 group text-lg">
                <span className="mr-2 group-hover:mr-3 transition-all">Saiba mais</span>
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-all" />
              </a>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-${i % 2 ? 'blue' : 'purple'}-400 to-${i % 3 ? 'indigo' : 'green'}-500`}></div>
                ))}
              </div>
              <p className="ml-4 text-base text-gray-600">
                <span className="font-semibold">+1.240</span> pessoas gerenciando finanças
              </p>
            </div>
            
            <p className="mt-6 text-base text-gray-500 flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              Sem instalação. Sem complicação. Pronto para usar.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative scale-110">
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-32 -right-16 w-24 h-24 bg-yellow-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-green-200 rounded-full opacity-60 animate-pulse animation-delay-1000"></div>
              
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-4 backdrop-blur-sm bg-white/80 max-w-md">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-green-500 flex items-center justify-center mr-4 shadow-md">
                      <span className="text-white text-2xl font-semibold">M</span>
                    </div>
                    <div>
                      <p className="font-medium text-lg">Assistente Money.io</p>
                      <div className="flex items-center">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-1.5"></span>
                        <p className="text-sm text-gray-500">Online agora</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat messages */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-white p-4 rounded-lg rounded-tl-none max-w-[80%] shadow-sm border border-gray-100">
                      <p className="text-base">Como posso ajudar com suas finanças hoje?</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary to-primary/90 p-4 rounded-lg rounded-tr-none max-w-[80%] ml-auto shadow-sm">
                      <p className="text-base text-white">Registrar gasto de R$45 no almoço hoje</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg rounded-tl-none max-w-[80%] shadow-sm border border-gray-100">
                      <p className="text-base">Registrado! Sua despesa de R$45 foi adicionada na categoria "Alimentação".</p>
                      <div className="mt-3 p-3 bg-gray-50 rounded-md border border-gray-200">
                        <div className="flex justify-between items-center mb-2 text-sm">
                          <span className="font-medium">Alimentação: R$320/R$500</span>
                          <span className="text-amber-600">64%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "64%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input */}
                  <div className="flex items-center bg-white rounded-full px-5 py-3.5 shadow-sm border border-gray-200">
                    <input
                      type="text"
                      className="flex-1 bg-transparent border-none outline-none text-base"
                      placeholder="Digite uma mensagem..."
                    />
                    <button className="ml-2 w-11 h-11 bg-gradient-to-r from-primary to-primary/90 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
