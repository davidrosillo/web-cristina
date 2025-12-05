import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen bg-[var(--color-secondary)]">
            <div className="py-20 px-6 md:px-12 lg:px-24 container mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6 text-[var(--color-primary)]">Blog y Recursos</h1>
                    <p className="text-xl text-[var(--color-text-light)] max-w-2xl mx-auto">
                        Artículos, reflexiones y herramientas para tu bienestar emocional.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {allPostsData.map(({ id, date, title, excerpt }) => (
                        <Link href={`/blog/${id}`} key={id} className="group">
                            <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    {/* Placeholder for post thumbnail */}
                                    <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                                        📝
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="text-sm text-[var(--color-accent)] font-bold mb-2">
                                        {date}
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                                        {title}
                                    </h2>
                                    <p className="text-[var(--color-text-light)] line-clamp-3 mb-6 flex-grow">
                                        {excerpt || "Lee el artículo completo para descubrir más sobre este tema..."}
                                    </p>
                                    <span className="text-[var(--color-primary)] font-bold flex items-center gap-2">
                                        Leer más
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {allPostsData.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-2xl">Aún no hay artículos publicados.</p>
                        <p className="mt-4">¡Vuelve pronto!</p>
                    </div>
                )}

                <div className="mt-16 text-center">
                    <Link href="/" className="bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-6 py-3 rounded-full font-semibold transition-all hover:bg-[var(--color-secondary)] inline-block">
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}
