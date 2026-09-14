import { useState } from 'react';
import { galleryItems } from '@/data/salonData';
import { X } from 'lucide-react';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="galerie"
      className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 opacity-0-init animate-fade-up">
          <p className="text-gold-600 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Nos réalisations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-800 leading-tight">
            Galerie des <span className="text-gold-gradient">coiffures</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
          <p className="text-stone-500 text-lg mt-6">
            Découvrez l'art de nos coiffeuses à travers une sélection de nos
            plus belles réalisations.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] lg:auto-rows-[260px]">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item.image)}
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-stone-900/80 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cream-50/20 flex items-center justify-center text-white hover:bg-cream-50/40 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Coiffure en grand"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-gold-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
