import { useState } from 'react';
import {
  Scissors,
  Palette,
  Sparkles,
  Droplet,
  Wind,
  Crown,
  Flower2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { services } from '@/data/salonData';
import type { Service } from '@/data/salonData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scissors,
  Palette,
  Sparkles,
  Droplet,
  Wind,
  Crown,
  Flower2,
};

const categories = ['Tous', 'Coiffure', 'Couleur', 'Soins', 'Mariage'] as const;

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const filtered =
    activeCategory === 'Tous'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-cream-50 dark:bg-noir-600 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-50 dark:bg-gold-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 opacity-0-init animate-fade-up">
          <p className="text-gold-600 dark:text-gold-400 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Nos prestations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-800 dark:text-cream-50 leading-tight">
            Services de <span className="text-gold-gradient">beauté</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
          <p className="text-stone-500 dark:text-stone-400 text-lg mt-6">
            Une gamme complète de prestations pour sublimer vos cheveux, des
            classiques aux plus créatives.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-white shadow-gold'
                  : 'bg-cream-100 dark:bg-noir-400 text-stone-500 dark:text-stone-400 hover:bg-gold-100 dark:hover:bg-gold-900/30 hover:text-gold-700 dark:hover:text-gold-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service: Service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <article
                key={service.id}
                className="group bg-cream-50 dark:bg-noir-400 rounded-3xl overflow-hidden border border-gold-100 dark:border-gold-900/40 hover-lift hover:shadow-gold-lg opacity-0-init animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 img-zoom">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-cream-50/90 dark:bg-noir-500/90 backdrop-blur flex items-center justify-center shadow-gold">
                    <Icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cream-50/90 dark:bg-noir-500/90 backdrop-blur text-xs font-medium text-gold-700 dark:text-gold-300">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-serif font-semibold text-stone-800 dark:text-cream-50">
                      {service.name}
                    </h3>
                    <span className="text-gold-700 dark:text-gold-400 font-serif font-semibold whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gold-100 dark:border-gold-900/40">
                    <span className="flex items-center gap-1.5 text-sm text-stone-400 dark:text-stone-500">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                    <button
                      onClick={() => {
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex items-center gap-1 text-sm font-medium text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors group/btn"
                    >
                      Réserver
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
