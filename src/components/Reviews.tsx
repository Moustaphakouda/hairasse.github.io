import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/salonData';

export default function Reviews() {
  return (
    <section
      id="avis"
      className="py-24 lg:py-32 bg-cream-50 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 opacity-0-init animate-fade-up">
          <p className="text-gold-600 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Témoignages
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-800 leading-tight">
            Ce que disent nos <span className="text-gold-gradient">clientes</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-stone-500 text-lg">
              4.9/5 sur la base de 200+ avis
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <article
              key={review.id}
              className="bg-cream-100 rounded-3xl p-7 border border-gold-100 hover-lift hover:shadow-gold relative opacity-0-init animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-gold-100">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-stone-600 leading-relaxed mb-6 relative z-10">
                « {review.comment} »
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gold-100">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-200"
                />
                <div>
                  <p className="font-serif font-semibold text-stone-800">
                    {review.name}
                  </p>
                  <p className="text-xs text-stone-400">
                    {review.service} · {review.date}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
