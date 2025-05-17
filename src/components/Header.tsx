
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center mr-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5L5 19M5.00001 5L19 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold">Money.io</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">
              Login
            </Button>
            <Button className="font-medium">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary py-2 transition-colors"
                onClick={toggleMenu}
              >
                Funcionalidades
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-primary py-2 transition-colors"
                onClick={toggleMenu}
              >
                Como Funciona
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary py-2 transition-colors"
                onClick={toggleMenu}
              >
                Planos
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-primary py-2 transition-colors"
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full">
                  Começar Grátis
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
