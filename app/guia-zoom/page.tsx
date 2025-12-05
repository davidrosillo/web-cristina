import Link from 'next/link';

export default function GuiaZoom() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto py-20 px-6 md:px-12 lg:px-24 max-w-4xl">
                <Link href="/" className="inline-flex items-center text-[var(--color-text-light)] hover:text-[var(--color-primary)] mb-8 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver al Inicio
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--color-primary)] text-center">
                    Guía para tus Sesiones en Zoom
                </h1>

                <div className="prose prose-lg prose-slate mx-auto">
                    <p className="lead text-xl text-[var(--color-text-light)] mb-10">
                        Para garantizar que nuestras sesiones online sean fluidas y provechosas, utilizo la plataforma <b>Zoom</b>. Es segura, fácil de usar y ofrece una excelente calidad de video y audio.
                    </p>

                    <div className="bg-[var(--color-secondary)] p-8 rounded-2xl mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-[var(--color-primary)]">¿Qué necesitas?</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Un ordenador, tablet o móvil con cámara y micrófono.</li>
                            <li>Una conexión a internet estable.</li>
                            <li>Un espacio tranquilo y privado donde te sientas cómodo/a para hablar.</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Paso 1: Instalar Zoom</h2>
                    <p>
                        Aunque puedes unirte desde el navegador, te recomiendo instalar la aplicación para una mejor experiencia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 my-8">
                        <a href="https://zoom.us/download" target="_blank" rel="noopener noreferrer" className="bg-[#2D8CFF] text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-opacity-90 transition-all">
                            Descargar para Ordenador
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#2D8CFF] text-[#2D8CFF] px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-50 transition-all">
                            Android (Google Play)
                        </a>
                        <a href="https://apps.apple.com/us/app/zoom-cloud-meetings/id546505307" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#2D8CFF] text-[#2D8CFF] px-6 py-3 rounded-lg font-bold text-center hover:bg-gray-50 transition-all">
                            iPhone / iPad (App Store)
                        </a>
                    </div>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Paso 2: Unirse a la Sesión</h2>
                    <ol className="list-decimal pl-6 space-y-4 mb-12">
                        <li>
                            <strong>Recibirás un enlace:</strong> Antes de nuestra cita, te enviaré un enlace de Zoom (por email o WhatsApp).
                        </li>
                        <li>
                            <strong>Haz clic en el enlace:</strong> A la hora acordada, simplemente pulsa sobre ese enlace.
                        </li>
                        <li>
                            <strong>Permisos:</strong> Si es la primera vez, Zoom te pedirá permiso para usar tu cámara y micrófono. Acepta para que podamos vernos y escucharnos.
                        </li>
                        <li>
                            <strong>Sala de Espera:</strong> Es posible que entres en una "sala de espera" virtual. No te preocupes, yo te daré acceso en cuanto esté lista.
                        </li>
                    </ol>

                    <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Consejos para una buena sesión</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-12">
                        <li>Usa auriculares para mejorar el audio y la privacidad.</li>
                        <li>Coloca la luz frente a ti (no detrás) para que se te vea bien.</li>
                        <li>Cierra otras aplicaciones que puedan ralentizar tu dispositivo.</li>
                    </ul>
                </div>

                <div className="text-center mt-12">
                    <p className="text-[var(--color-text-light)] mb-6">¿Tienes alguna duda técnica?</p>
                    <Link href="/#contacto" className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                        Contáctame
                    </Link>
                </div>
            </div>
        </main>
    );
}
