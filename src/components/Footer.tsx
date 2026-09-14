import { Instagram, Facebook, MapPin, Phone, Mail, Heart } from 'lucide-react';
import { salonInfo } from '@/data/salonData';

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                <span className="font-serif text-2xl font-bold text-white">É</span>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-white">
                  Élégance Or
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400">
                  Coiffure Féminine
                </p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Votre salon de coiffure féminin haut de gamme. L'art de sublimer
              vos cheveux dans un cadre raffiné et apaisant.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-gold-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-gold-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-stone-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">
              Nos services
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-stone-400">Coupe Femme</li>
              <li className="text-sm text-stone-400">Balayage & Ombré</li>
              <li className="text-sm text-stone-400">Coloration & Mèches</li>
              <li className="text-sm text-stone-400">Soin Profond</li>
              <li className="text-sm text-stone-400">Lissage Brésilien</li>
              <li className="text-sm text-stone-400">Coiffure de Mariage</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{salonInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-400">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{salonInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-400">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{salonInfo.email}</span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-stone-800">
              <ul className="space-y-2">
                {salonInfo.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-xs text-stone-500"
                  >
                    <span>{h.day}</span>
                    <span className={h.time === 'Fermé' ? 'text-red-400' : 'text-gold-400'}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            © 2026 Élégance Or. Tous droits réservés.
          </p>
          <p className="text-xs text-stone-500 flex items-center gap-1.5">
            Conçu avec <Heart className="w-3 h-3 text-gold-500 fill-gold-500" /> à Paris
          </p>
        </div>
      </div>
    </footer>
  );
}
