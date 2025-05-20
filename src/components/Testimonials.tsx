import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "O Money.io mudou completamente minha relação com finanças. Antes, eu perdia horas em planilhas complicadas e mesmo assim não conseguia manter o controle. Agora, com apenas algumas mensagens no WhatsApp, tenho um panorama completo dos meus gastos e economizo 25% mais todo mês.",
    author: "Carlos Silva",
    role: "CTO na TechBrasil",
    company: "TechBrasil",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Silva&background=3B82F6&color=fff&size=200",
    rating: 5,
    tags: ["Controle Financeiro", "Economia"]
  },
  {
    quote: "Como empreendedora, preciso de soluções que não consumam meu tempo. Os relatórios automáticos do Money.io me ajudaram a identificar padrões de gastos que eu jamais notaria sozinha. Em três meses, consegui direcionar R$ 15.000 para investimentos que antes eram desperdiçados.",
    author: "Ana Martins",
    role: "Fundadora",
    company: "Studio Arquitetura",
    avatar: "https://ui-avatars.com/api/?name=Ana+Martins&background=10B981&color=fff&size=200",
    rating: 5,
    tags: ["Relatórios", "Investimentos"]
  },
  {
    quote: "Tentei diversos aplicativos de finanças, mas sempre abandonava depois de algumas semanas. Com o Money.io, já estou há 8 meses utilizando diariamente. A integração com WhatsApp elimina qualquer barreira de uso e as categorizações automáticas são impressionantemente precisas.",
    author: "Rafael Costa",
    role: "Diretor Comercial",
    company: "Global Ventures",
    avatar: "https://ui-avatars.com/api/?name=Rafael+Costa&background=6366F1&color=fff&size=200", 
    rating: 5,
    tags: ["Facilidade", "IA"]
  },
  {
    quote: "Minha equipe de 12 pessoas adotou o Money.io para controle de gastos empresariais. A transparência e facilidade de categorização nos permitiu reduzir despesas operacionais em 18% no primeiro trimestre. O suporte é excepcional e as atualizações frequentes mostram o compromisso da equipe.",
    author: "Juliana Mendes",
    role: "CFO",
    company: "Nexus Inovação",
    avatar: "https://ui-avatars.com/api/?name=Juliana+Mendes&background=EC4899&color=fff&size=200",
    rating: 5,
    tags: ["Empresarial", "Equipes"]
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Histórias de sucesso
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como nossos usuários estão transformando suas finanças com o Money.io
          </p>
        </div>

        {/* Versão desktop: mostrar todos os cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-6 md:p-8 flex-grow">
                <div className="mb-4 relative">
                  <Quote className="absolute -top-1 -left-1 w-8 h-8 text-primary/10" />
                  <blockquote className="text-gray-700 relative z-10 pl-4 md:pl-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 p-6 bg-gray-50 flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Versão mobile: mostrar carrossel */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="p-6 md:p-8">
              <div className="mb-4 relative">
                <Quote className="absolute -top-1 -left-1 w-8 h-8 text-primary/10" />
                <blockquote className="text-gray-700 relative z-10 pl-4 md:pl-6 italic">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {testimonials[activeIndex].tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 p-6 bg-gray-50 flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].role} • {testimonials[activeIndex].company}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 text-primary border border-primary/10 rounded-full">
            <span className="text-base">⭐ 4.9/5 média de satisfação</span>
            <span className="ml-2 px-2 py-0.5 bg-white rounded-full text-sm shadow-sm">+2.400 usuários</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
