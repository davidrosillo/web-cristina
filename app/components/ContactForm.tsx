'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });
            setStatus('success');
            form.reset();
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto"
        >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
                <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>

            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-bold text-[var(--color-text-light)] mb-2">
                    Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                    placeholder="Tu nombre"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-bold text-[var(--color-text-light)] mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                    placeholder="tu@email.com"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-[var(--color-text-light)] mb-2">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-all"
                    placeholder="¿En qué puedo ayudarte?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {status === 'success' && (
                <p className="mt-4 text-green-600 text-center font-bold">
                    ¡Mensaje enviado correctamente! Te responderé lo antes posible.
                </p>
            )}
            {status === 'error' && (
                <p className="mt-4 text-red-600 text-center">
                    Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o usa WhatsApp.
                </p>
            )}
        </form>
    );
}
