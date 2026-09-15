import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-gold shadow-gold py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#accueil')}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-110">
              <span className="font-serif text-2xl font-bold text-white">É</span>
            </div>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-serif text-xl font-semibold tracking-wide text-stone-800 dark:text-cream-50 transition-colors duration-500">
              Élégance Or
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400 font-sans font-medium">
              Coiffure Féminine
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-medium tracking-wide text-stone-600 dark:text-stone-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Theme toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="tel:+33142658990"
            className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">01 42 65 89 90</span>
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className="px-6 py-2.5 bg-gold-gradient text-white text-sm font-medium rounded-full shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
          >
            Prendre RDV
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-cream-100 dark:bg-noir-300 text-stone-700 dark:text-stone-200 hover:bg-gold-100 dark:hover:bg-gold-900/40 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 bg-cream-50 dark:bg-noir-400 shadow-gold-lg">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-stone-700 dark:text-stone-200 hover:text-gold-600 dark:hover:text-gold-400 font-medium text-lg w-full text-left transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 bg-gold-gradient text-white font-medium rounded-full shadow-gold"
              >
                Prendre Rendez-vous
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
