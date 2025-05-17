
import React from "react";

const testimonials = [
  {
    quote: "Nunca foi tão fácil controlar minhas finanças. Simplesmente mando mensagem para o assistente e tudo é registrado automaticamente.",
    author: "Carlos Silva",
    role: "Engenheiro de Software",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    quote: "Os relatórios automáticos me ajudaram a reduzir gastos desnecessários em 30% no primeiro mês. O melhor investimento que fiz!",
    author: "Ana Martins",
    role: "Arquiteta",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    quote: "A simplicidade do Money.io é seu maior diferencial. Sem apps complicados, apenas mensagens de WhatsApp que todo mundo já sabe usar.",
    author: "Rafael Costa",
    role: "Empresário",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o Money.io está transformando a maneira como as pessoas gerenciam suas finanças
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {/* Stars */}
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
