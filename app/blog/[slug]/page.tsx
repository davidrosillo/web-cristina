import { getAllPostIds, getPostData } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <main className="min-h-screen bg-white">
            <article className="container mx-auto py-20 px-6 md:px-12 lg:px-24 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-[var(--color-text-light)] hover:text-[var(--color-primary)] mb-8 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver al Blog
                </Link>

                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)] leading-tight">
                        {postData.title}
                    </h1>
                    <div className="text-[var(--color-accent)] font-semibold text-lg">
                        {postData.date}
                    </div>
                </header>

                <div
                    className="prose prose-lg prose-slate mx-auto prose-headings:text-[var(--color-primary)] prose-a:text-[var(--color-accent)]"
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
            </article>

            <div className="bg-[var(--color-secondary)] py-16 text-center">
                <h3 className="text-2xl font-bold mb-6">¿Te ha parecido interesante?</h3>
                <p className="mb-8 text-[var(--color-text-light)]">
                    Si necesitas ayuda profesional, no dudes en contactar.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/" className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-opacity-90 hover:shadow-lg">
                        Contactar
                    </Link>
                </div>
            </div>
        </main>
    );

}
