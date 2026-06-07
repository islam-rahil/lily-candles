"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "#About" },
  { label: "Nos produits", href: "#collection" },
  { label: "L'équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

const collections = [
  { label: "Bougies parfumées", href: "#" },
  { label: "Édition limitée", href: "#" },
  { label: "Coffrets cadeaux", href: "#" },
  { label: "Recharges", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#52592D] text-[#EDE6D6]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.jpeg"
                alt="Leila Candles"
                width={56}
                height={56}
                className="h-14 w-auto rounded-md"
              />
            </Link>
            <p className="mt-5 max-w-xs font-ma-police-2 text-sm leading-relaxed text-[#EDE6D6]/80">
              Bougies artisanales en cire d&apos;abeille — lumière douce, parfum
              naturel, façonnées à la main en petites séries.
            </p>
           
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-ma-police text-xs uppercase tracking-[0.2em] text-[#D8CC34]">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-ma-police-2 text-sm text-[#EDE6D6]/80 transition hover:text-[#FFE9D4]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-ma-police text-xs uppercase tracking-[0.2em] text-[#D8CC34]">
              Collections
            </h3>
            <ul className="mt-5 space-y-3">
              {collections.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-ma-police-2 text-sm text-[#EDE6D6]/80 transition hover:text-[#FFE9D4]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-ma-police text-xs uppercase tracking-[0.2em] text-[#D8CC34]">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 font-ma-police-2 text-sm text-[#EDE6D6]/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D8CC34]" />
                <span>El Biar, Alger, Algérie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#D8CC34]" />
                <a href="tel:+213000000000" className="transition hover:text-[#FFE9D4]">
                  +213 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#D8CC34]" />
                <a
                  href="mailto:contact@leilacandles.com"
                  className="transition hover:text-[#FFE9D4]"
                >
                  contact@leilacandles.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#FFE9D4]/15 pt-8 sm:flex-row">
          <p className="font-ma-police-2 text-xs text-[#EDE6D6]/60">
            © {year} Leila Candles. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="font-ma-police-2 text-xs text-[#EDE6D6]/60 transition hover:text-[#FFE9D4]"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="font-ma-police-2 text-xs text-[#EDE6D6]/60 transition hover:text-[#FFE9D4]"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}