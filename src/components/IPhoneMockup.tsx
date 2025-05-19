import React, { useEffect, useRef, useState } from 'react';

interface IPhoneMockupProps {
  className?: string;
}

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Tentar iniciar o vídeo quando o componente montar
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.error("Erro ao iniciar o vídeo:", e);
      });
    }
    
    // Impedir rolagem do corpo quando modal estiver aberto
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div 
        className={`relative mx-auto cursor-pointer group ${className}`} 
        style={{ width: '300px' }}
        onClick={toggleFullscreen}
      >
        {/* iPhone frame */}
        <div className="relative border-[14px] border-black rounded-[40px] h-[600px] w-full overflow-hidden shadow-xl bg-white">
          {/* Screen Content - Video */}
          <div className="h-full w-full overflow-hidden">
            <video 
              ref={videoRef}
              className="h-full w-full object-cover" 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
            >
              <source src="/images/video_moneyio.mov" type="video/mp4" />
              <source src="/images/video_moneyio.mov" type="video/quicktime" />
              Seu navegador não suporta vídeos.
            </video>
            
            {/* Ícone de ampliação */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
              <div className="w-16 h-16 bg-white bg-opacity-0 group-hover:bg-opacity-70 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Home Bar */}
          <div className="absolute bottom-1 inset-x-0 h-[4px] w-[100px] mx-auto bg-gray-800 rounded-full"></div>
          
          {/* Side Button */}
          <div className="absolute right-[-14px] top-[100px] h-[60px] w-[3px] bg-gray-700 rounded-r-sm"></div>
          
          {/* Volume Buttons */}
          <div className="absolute left-[-14px] top-[100px] h-[35px] w-[3px] bg-gray-700 rounded-l-sm"></div>
          <div className="absolute left-[-14px] top-[150px] h-[35px] w-[3px] bg-gray-700 rounded-l-sm"></div>
        </div>
      </div>

      {/* Modal de tela cheia */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-0 animate-fadeIn" 
          onClick={toggleFullscreen}
          style={{
            animation: 'fadeIn 0.3s ease forwards',
            backdropFilter: 'blur(5px)'
          }}
        >
          <div 
            className="relative w-full max-w-4xl px-4 transform scale-95 opacity-0 animate-scaleIn"
            style={{animation: 'scaleIn 0.3s ease forwards 0.1s'}}
          >
            <button 
              className="absolute -right-2 -top-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 text-gray-800 hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="rounded-xl overflow-hidden bg-gradient-to-r from-primary to-success p-4 shadow-2xl">
              <div className="bg-black bg-opacity-30 rounded-lg p-3">
                <div className="mb-3 text-white flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">M</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Money.io Assistente</h3>
                      <p className="text-sm text-white/80">Seu assistente financeiro pessoal</p>
                    </div>
                  </div>
                </div>
                <video 
                  className="w-full object-contain max-h-[70vh] rounded-lg" 
                  autoPlay 
                  loop 
                  muted 
                  controls
                  playsInline
                >
                  <source src="/images/video_moneyio.mov" type="video/mp4" />
                  <source src="/images/video_moneyio.mov" type="video/quicktime" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from {
            background-color: rgba(0, 0, 0, 0);
          }
          to {
            background-color: rgba(0, 0, 0, 0.9);
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}} />
    </>
  );
};

export default IPhoneMockup; 