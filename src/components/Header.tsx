import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Instagram, Linkedin, Youtube, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({ code: "pt", name: "Português", flag: "🇧🇷" });
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const selectLanguage = (code: string, name: string, flag: string) => {
    setCurrentLanguage({ code, name, flag });
    setLanguageDropdownOpen(false);
  };

  // Controla o efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Fecha o dropdown quando clica fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Barra superior branca - vai de ponta a ponta */}
      <div className={`bg-white border-b border-gray-100 transition-transform duration-300 ease-in-out transform ${scrolled ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-6 justify-center flex-1">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-center justify-end flex-1">
            <div className="relative" ref={languageDropdownRef}>
              <button 
                onClick={toggleLanguageDropdown}
                className="flex items-center text-gray-600 hover:text-gray-900 text-xs focus:outline-none py-1 px-2"
              >
                <span className="mr-1">{currentLanguage.flag}</span>
                <span className="mr-1">{currentLanguage.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-md py-1 w-32 z-50">
                  <button 
                    className="flex items-center px-3 py-1.5 hover:bg-gray-100 w-full text-left text-xs"
                    onClick={() => selectLanguage("pt", "Português", "🇧🇷")}
                  >
                    <span className="mr-2">🇧🇷</span>
                    <span>Português</span>
                  </button>
                  <button 
                    className="flex items-center px-3 py-1.5 hover:bg-gray-100 w-full text-left text-xs"
                    onClick={() => selectLanguage("en", "English", "🇺🇸")}
                  >
                    <span className="mr-2">🇺🇸</span>
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header principal - flutuante centralizado e mais grosso */}
      <div className="flex justify-center">
        <div className={`transition-all duration-300 ease-in-out max-w-4xl w-[90%] bg-white border border-gray-200 rounded-full ${scrolled ? "mt-1" : "mt-2"} py-2.5 px-6 flex items-center justify-between shadow-sm`}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-7 h-7 mr-2 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <span className="text-base font-bold">$</span>
            </div>
            <span className="text-base font-bold text-gray-900">Money.io</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Como Funciona
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              Planos
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-1.5 text-sm h-auto">
              Fale com especialista <ChevronRight className="w-3 h-3 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex justify-center">
          <div className="md:hidden bg-white mt-1 shadow-sm border border-gray-200 animate-fade-in rounded-lg w-[90%] max-w-4xl">
            <div className="px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 py-1 transition-colors text-sm"
                  onClick={toggleMenu}
                >
                  Funcionalidades
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-blue-600 py-1 transition-colors text-sm"
                  onClick={toggleMenu}
                >
                  Como Funciona
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-blue-600 py-1 transition-colors text-sm"
                  onClick={toggleMenu}
                >
                  Planos
                </a>
                <a
                  href="#faq"
                  className="text-gray-700 hover:text-blue-600 py-1 transition-colors text-sm"
                  onClick={toggleMenu}
                >
                  FAQ
                </a>
                <div className="pt-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm py-1.5">
                    Fale com especialista <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
