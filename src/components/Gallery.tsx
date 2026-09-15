import { useState, useEffect } from 'react';
import { galleryItems } from '@/data/salonData';
import type { GalleryItem } from '@/data/salonData';
import { X, Clock, Tag, ArrowRight, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const handleBook = () => {
    setSelected(null);
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section
      id="galerie"
      className="py-24 lg:py-32 bg-cream-100 dark:bg-noir-500 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-100/30 dark:bg-gold-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 opacity-0-init animate-fade-up">
          <p className="text-gold-600 dark:text-gold-400 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Nos réalisations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-800 dark:text-cream-50 leading-tight">
            Galerie des <span className="text-gold-gradient">coiffures</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
          <p className="text-stone-500 dark:text-stone-400 text-lg mt-6">
            Découvrez l'art de nos coiffeuses à travers une sélection de nos
            plus belles réalisations.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] lg:auto-rows-[260px]">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`group relative rounded-2xl overflow-hidden shadow-gold img-zoom cursor-pointer opacity-0-init animate-scale-in ${
                item.span ? 'row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="text-xs uppercase tracking-wider text-gold-200 font-medium">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif font-semibold text-white mt-1">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-stone-900/80 dark:bg-noir-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-cream-50/20 dark:bg-noir-400/40 flex items-center justify-center text-white hover:bg-cream-50/40 dark:hover:bg-gold-900/60 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative bg-cream-50 dark:bg-noir-400 rounded-3xl shadow-gold-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[500px]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900/10" />
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 flex flex-col gap-5">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-100 dark:bg-gold-900/40 text-xs font-medium text-gold-700 dark:text-gold-300 uppercase tracking-wider">
                    {selected.category}
                  </span>
                  <h3 className="text-3xl font-serif font-semibold text-stone-800 dark:text-cream-50 mt-3">
                    {selected.title}
                  </h3>
                </div>

                <div className="gold-divider w-20" />

                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  {selected.description}
                </p>

                {/* Info row */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span>{selected.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
                    <span className="text-gold-700 dark:text-gold-400 font-serif font-semibold">
                      {selected.price}
                    </span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-cream-100 dark:bg-noir-300 border border-gold-100 dark:border-gold-900/40 text-xs text-stone-500 dark:text-stone-400"
                    >
                      <Tag className="w-3 h-3 text-gold-500" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={handleBook}
                  className="group mt-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-gradient text-white font-medium rounded-full shadow-gold hover:shadow-gold-lg transition-all duration-400 hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4" />
                  Réserver cette prestation
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
