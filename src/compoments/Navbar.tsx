"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#About" },
  { label: "Nos produits", href: "#collection" },
  { label: "L'équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Affiche/cache la navbar selon la direction du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 10);

      // En haut de page : toujours visible
      if (currentY < 10) {
        setHidden(false);
      } else if (currentY > lastScrollY.current) {
        // Scroll vers le bas → cacher
        setHidden(true);
      } else {
        // Scroll vers le haut → afficher
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Si le menu mobile est ouvert, on garde la navbar visible
  useEffect(() => {
    if (isOpen) setHidden(false);
  }, [isOpen]);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-[#ffe9d4] transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`w-full mx-auto h-16 md:h-20 flex items-center justify-evenly px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled
            ? "bg-[#ffe9d4]/80 backdrop-blur-md shadow-sm"
            : "bg-[#ffe9d4]"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width={64}
            height={64}
            priority
            className="w-16 h-auto"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="hidden md:inline-flex relative text-xl text-[#794022] px-4 py-3 font-ma-police-2 mt-2 group"
              >
                {link.label}
                <span className="absolute left-4 right-4 bottom-2 h-[3px] bg-[#52592D]/60 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton burger mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-lg text-[#142335] hover:text-[#F5AA32] transition-colors duration-300"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
              size={24}
            />
            <X
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
              size={24}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-4 py-4 border-t border-gray-100">
          {navLinks.map((link, i) => (
            <li
              key={link.label}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
              className={`transform transition-all duration-300 ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#142335] hover:text-[#F5AA32] hover:bg-[#F5AA32]/10 px-4 py-3 rounded-xl text-lg font-semibold transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}