import Link from 'next/link';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import ObfuscatedContact from './components/ObfuscatedContact';
import AvatarImage from './components/AvatarImage';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-secondary)]">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Background pattern via CSS gradient to avoid 404 */}
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bienestar emocional <br />
              <span className="text-[var(--color-accent)]">a tu alcance</span>
            </h1>
            <p className="text-xl text-[var(--color-text-light)] mb-8 leading-relaxed">
              Psicología online para acompañarte en tu proceso personal, estés donde estés.
              Atención profesional y cercana desde Barcelona para el mundo.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <a href="#servicios" className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-opacity-90 hover:shadow-lg text-center">
                Mis Servicios
              </a>
              <a href="#contacto" className="bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-6 py-3 rounded-full font-semibold transition-all hover:bg-[var(--color-secondary)] text-center">
                Contactar
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Cristina's photo using client-side only component to prevent hydration errors */}
            <div className="w-80 h-80 md:w-96 md:h-96 relative rounded-full shadow-2xl overflow-hidden border-4 border-white">
              <AvatarImage />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Mis Servicios</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Terapia Individual",
                desc: "Espacio seguro para abordar ansiedad, depresión, autoestima y crecimiento personal.",
                icon: "🌱"
              },
              {
                title: "Terapia de Pareja",
                desc: "Herramientas para mejorar la comunicación y resolver conflictos en la relación.",
                icon: "🤝"
              },
              {
                title: "Videoconferencia",
                desc: "Sesiones online flexibles a través de Zoom. Comodidad y privacidad garantizadas.",
                icon: "💻"
              }
            ].map((service, index) => (
              <div key={index} className="p-8 rounded-2xl bg-[var(--color-secondary)] hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Contact Section */}
      <section id="contacto" className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--color-primary)] text-white relative">
        <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-white">Sobre Mí</h2>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Soy Cristina Rosillo, psicóloga colegiada con sede en Barcelona. Mi enfoque se centra en crear un vínculo terapéutico sólido que permita trabajar las dificultades desde la raíz.
            </p>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Gracias a la tecnología, puedo atenderte cómodamente desde tu hogar, manteniendo la misma cercanía y profesionalidad que en una consulta presencial.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/blog" className="inline-block bg-[var(--color-accent)] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                Leer mis artículos
              </Link>
              <Link href="/guia-zoom" className="inline-block bg-white text-[var(--color-primary)] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                ¿Cómo funciona Zoom?
              </Link>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Datos de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <ObfuscatedContact type="email" value="info@cristinarosillo.com" className="hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <ObfuscatedContact type="phone" value="+34 680 11 91 60" className="hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span>Barcelona (Sede) / Online (Mundo)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white text-[var(--color-text)] p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-2 text-center text-[var(--color-primary)]">Contactar</h3>
              <p className="text-center mb-8 text-gray-500 text-sm">
                Rellena el formulario y te responderé en breve.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );

}
