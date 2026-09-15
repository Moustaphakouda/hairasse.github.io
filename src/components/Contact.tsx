import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from 'lucide-react';
import { salonInfo } from '@/data/salonData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-cream-100 dark:bg-noir-500 relative overflow-hidden transition-colors duration-500"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-100/30 dark:bg-gold-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 opacity-0-init animate-fade-up">
          <p className="text-gold-600 dark:text-gold-400 font-sans text-sm uppercase tracking-[0.3em] mb-3 font-medium">
            Prendre rendez-vous
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-800 dark:text-cream-50 leading-tight">
            Réservez votre <span className="text-gold-gradient">moment</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mt-6" />
          <p className="text-stone-500 dark:text-stone-400 text-lg mt-6">
            Réservez en ligne ou contactez-nous directement. Nous vous
            répondrons dans les meilleurs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5 opacity-0-init animate-fade-up">
            <div className="bg-cream-50 dark:bg-noir-400 rounded-3xl p-8 border border-gold-100 dark:border-gold-900/40 shadow-gold">
              <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-cream-50 mb-6">
                Informations
              </h3>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold-100 dark:bg-gold-900/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 dark:text-stone-500 mb-1">Adresse</p>
                    <p className="text-stone-700 dark:text-stone-200 font-medium">{salonInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold-100 dark:bg-gold-900/40 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 dark:text-stone-500 mb-1">Téléphone</p>
                    <a
                      href={`tel:${salonInfo.phone.replace(/\s/g, '')}`}
                      className="text-stone-700 dark:text-stone-200 font-medium hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                    >
                      {salonInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold-100 dark:bg-gold-900/40 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 dark:text-stone-500 mb-1">Email</p>
                    <a
                      href={`mailto:${salonInfo.email}`}
                      className="text-stone-700 dark:text-stone-200 font-medium hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                    >
                      {salonInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8 pt-6 border-t border-gold-100 dark:border-gold-900/40">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  <h4 className="font-serif font-semibold text-stone-800 dark:text-cream-50">
                    Horaires d'ouverture
                  </h4>
                </div>
                <ul className="space-y-2">
                  {salonInfo.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-stone-500 dark:text-stone-400">{h.day}</span>
                      <span
                        className={`font-medium ${
                          h.time === 'Fermé'
                            ? 'text-red-400'
                            : 'text-stone-700 dark:text-stone-200'
                        }`}
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3 opacity-0-init animate-fade-up delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-cream-50 dark:bg-noir-400 rounded-3xl p-8 lg:p-10 border border-gold-100 dark:border-gold-900/40 shadow-gold"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-gold-100 dark:bg-gold-900/40 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-cream-50 mb-2">
                    Demande envoyée !
                  </h3>
                  <p className="text-stone-500 dark:text-stone-400">
                    Merci {form.name || 'madame'}, nous vous contacterons très
                    bientôt pour confirmer votre rendez-vous.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif font-semibold text-stone-800 dark:text-cream-50 mb-6">
                    Demande de rendez-vous
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-stone-500 dark:text-stone-400 mb-2 font-medium">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 dark:bg-noir-300 border border-gold-100 dark:border-gold-900/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-700 transition-all text-stone-700 dark:text-stone-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-stone-500 dark:text-stone-400 mb-2 font-medium">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 dark:bg-noir-300 border border-gold-100 dark:border-gold-900/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-700 transition-all text-stone-700 dark:text-stone-200"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-stone-500 dark:text-stone-400 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 dark:bg-noir-300 border border-gold-100 dark:border-gold-900/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-700 transition-all text-stone-700 dark:text-stone-200"
                        placeholder="vous@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-stone-500 dark:text-stone-400 mb-2 font-medium">
                        Date souhaitée
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 dark:bg-noir-300 border border-gold-100 dark:border-gold-900/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-700 transition-all text-stone-700 dark:text-stone-200"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm text-stone-500 dark:text-stone-400 mb-2 font-medium">
                      Prestation souhaitée *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 dark:bg-noir-300 border border-gold-100 dark:border-gold-900/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-700 transition-all text-stone-700 dark:text-stone-200"
                    >
                      <option value="">Choisir une prestation…</option>
                      <option value="coupe">Coupe Femme</option>
                      <option value="balayage">Balayage & Ombré</option>
                      <option value="coloration">Coloration & Mèches</option>
                      <option value="soin">Soin Profond</option>
                      <option value="lissage">Lissage Brésilien</option>
                      <option value="mariage">Coiffure de Mariage</option>
                      <option value="chignon">Chignons & Updo</option>
                      <option value="brushing">Brushing</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm text-stone-500 dark:text-stone-400 mb-2 font-medium">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 dark:bg-noir-300 border border-gold-100 dark:border-gold-900/40 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-700 transition-all text-stone-700 dark:text-stone-200 resize-none"
                      placeholder="Décrivez vos envies, vos préférences…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full mt-6 flex items-center justify-center gap-2 px-8 py-4 bg-gold-gradient text-white font-medium rounded-full shadow-gold hover:shadow-gold-lg transition-all duration-400 hover:scale-[1.02]"
                  >
                    Envoyer ma demande
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
