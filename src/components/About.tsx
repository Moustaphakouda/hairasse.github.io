import { Award, Heart, Sparkles, Users } from 'lucide-react';
import { aboutImage } from '@/data/salonData';

const stats = [
  { icon: Users, value: '2000+', label: 'Clientes satisfaites' },
  { icon: Award, value: '15', label: "Années d'expérience" },
  { icon: Sparkles, value: '8', label: 'Expertes coiffeuses' },
  { icon: Heart, value: '5/5', label: 'Note moyenne' },
];

export default function About() {
  return (
    <section
      id="apropos"
      className="py-24 lg:py-32 bg-cream-100 dark:bg-noir-500 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute top-20 right-0 w-72 h-72 bg-gold-100/40 dark:bg-gold-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative opacity-0-init animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-gold-lg img-zoom">
              <img
                src={aboutImage}
                alt="Intérieur du salon Élégance Or"
                className="w-full h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 max-w-xs bg-cream-50 dark:bg-noir-400 rounded-2xl shadow-gold-lg p-6">
              <p className="font-serif italic text-stone-700 dark:text-stone-200 text-lg leading-relaxed">
                « La beauté n'est pas un luxe, c'est une expression de soi. »
              </p>
              <p className="text-gold-600 dark:text-gold-400 text-sm font-medium mt-3">
                — Élodie, Fondatrice
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold-200 dark:border-gold-700 rounded-2xl -z-10" />
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6 opacity-0-init animate-fade-up delay-200">
            <div>
              <p className="text-gold-600 dark:text-gold-400 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
                Notre histoire
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-800 dark:text-cream-50 leading-tight">
                Un salon où chaque femme{' '}
                <span className="text-gold-gradient">se révèle</span>
              </h2>
            </div>

            <div className="gold-divider w-24" />

            <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed">
              Depuis 15 ans, Élégance Or est un lieu dédié à la beauté féminine.
              Dans un cadre raffiné aux touches dorées, notre équipe de
              expertes coiffeuses met leur passion et leur savoir-faire au
              service de votre image.
            </p>
            <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed">
              Nous croyons qu'une coiffure réussie est celle qui vous ressemble.
              C'est pourquoi nous prenons le temps de vous écouter, de vous
              conseiller et de créer une expérience sur-mesure, alliant
              techniques modernes et soins profonds.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-cream-50 dark:bg-noir-400 rounded-2xl p-5 border border-gold-100 dark:border-gold-900/40 hover-lift hover:shadow-gold"
                >
                  <stat.icon className="w-7 h-7 text-gold-500 mb-2" />
                  <p className="text-3xl font-serif font-bold text-stone-800 dark:text-cream-50">
                    {stat.value}
                  </p>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
