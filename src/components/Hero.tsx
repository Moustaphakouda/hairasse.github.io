import { Star, ArrowRight, MapPin } from 'lucide-react';
import { heroImages, salonInfo } from '@/data/salonData';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cream-50 dark:bg-noir-600 transition-colors duration-500"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-100/30 dark:bg-gold-900/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-50 dark:bg-gold-900/10 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div className="flex flex-col gap-6 opacity-0-init animate-fade-up">
            {/* Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-sm text-stone-500 dark:text-stone-400 font-medium">
                Noté 5/5 par plus de 200 clientes
              </span>
            </div>

            {/* Title */}
            <div>
              <p className="text-gold-600 dark:text-gold-400 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
                Bienvenue chez
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-stone-800 dark:text-cream-50 leading-[1.05]">
                Élégance <span className="text-gold-gradient">Or</span>
              </h1>
              <p className="text-xl md:text-2xl font-serif italic text-stone-500 dark:text-stone-400 mt-3">
                {salonInfo.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed max-w-xl">
              Un salon de coiffure féminin où l'art de sublimer vos cheveux
              rencontre le luxe et la détente. Coupez, colorez, soignez — et
              ressortez transformée.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button
                onClick={() => scrollTo('#contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-white font-medium rounded-full shadow-gold hover:shadow-gold-lg transition-all duration-400 hover:scale-105"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo('#services')}
                className="px-8 py-4 border-2 border-gold-300 text-gold-700 dark:text-gold-300 font-medium rounded-full hover:bg-gold-50 dark:hover:bg-gold-900/30 transition-all duration-300"
              >
                Voir nos services
              </button>
            </div>

            {/* Address */}
            <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mt-4">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>{salonInfo.address}</span>
            </div>
          </div>

          {/* Right: image collage */}
          <div className="relative h-[500px] lg:h-[620px] opacity-0-init animate-fade-up delay-300">
            {/* Main image */}
            <div className="absolute top-0 right-0 w-[68%] h-[72%] rounded-3xl overflow-hidden shadow-gold-lg img-zoom">
              <img
                src={heroImages.primary}
                alt="Salon de coiffure élégant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 left-0 w-[52%] h-[48%] rounded-3xl overflow-hidden shadow-gold-lg img-zoom border-4 border-cream-50 dark:border-noir-500">
              <img
                src={heroImages.secondary}
                alt="Coiffure élégante"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-cream-50 dark:bg-noir-400 rounded-2xl shadow-gold-lg p-5 max-w-[180px] animate-float">
              <p className="text-3xl font-serif font-bold text-gold-gradient leading-none">
                15+
              </p>
              <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 leading-tight">
                années d'expertise au service de votre beauté
              </p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -bottom-4 right-8 w-24 h-24 rounded-full border-2 border-gold-200 dark:border-gold-700 -z-10" />
            <div className="absolute top-8 -left-2 w-16 h-16 rounded-full border-2 border-gold-200 dark:border-gold-700 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
