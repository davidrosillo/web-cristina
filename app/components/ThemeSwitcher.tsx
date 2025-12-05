'use client';

import { useEffect, useState } from 'react';

const PALETTES = [
    {
        name: 'Original (Teal)',
        colors: {
            '--color-primary': '#2C5F6D',
            '--color-secondary': '#F2F0E9',
            '--color-accent': '#D4A373',
            '--color-text': '#333333',
            '--background-start-rgb': '250, 250, 248',
            '--background-end-rgb': '255, 255, 255',
        }
    },
    {
        name: 'Pasión (Granate/Verde)',
        colors: {
            '--color-primary': '#800020', // Granate profundo
            '--color-secondary': '#F4F4F5', // Gris muy claro neutro
            '--color-accent': '#1B4D3E', // Verde bosque oscuro
            '--color-text': '#333333',
            '--background-start-rgb': '250, 250, 250',
            '--background-end-rgb': '255, 255, 255',
        }
    },
    {
        name: 'Noche (Azul/Negro)',
        colors: {
            '--color-primary': '#60A5FA', // Azul brillante claro para resaltar sobre negro
            '--color-secondary': '#1E293B', // Azul grisáceo oscuro para tarjetas
            '--color-accent': '#3B82F6', // Azul real
            '--color-text': '#F1F5F9', // Texto blanco/gris claro
            '--background-start-rgb': '15, 23, 42', // Fondo oscuro (Slate 900)
            '--background-end-rgb': '30, 41, 59', // Fondo un poco más claro
        }
    },
    {
        name: 'Vanguardia (Violeta)',
        colors: {
            '--color-primary': '#5B21B6', // Violeta intenso
            '--color-secondary': '#FAF5FF', // Lavanda muy suave
            '--color-accent': '#F59E0B', // Ámbar/Mostaza vibrante
            '--color-text': '#333333',
            '--background-start-rgb': '250, 250, 255',
            '--background-end-rgb': '255, 255, 255',
        }
    }
];

export default function ThemeSwitcher() {
    const [activePalette, setActivePalette] = useState(0);

    const applyPalette = (index: number) => {
        const palette = PALETTES[index];
        setActivePalette(index);
        const root = document.documentElement;
        Object.entries(palette.colors).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-50 bg-white p-3 rounded-full shadow-xl border border-gray-200 hover:scale-110 transition-transform"
                title="Cambiar colores"
            >
                <span className="text-2xl">🎨</span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 left-6 z-50 bg-white p-4 rounded-xl shadow-2xl border border-gray-200 max-w-[calc(100vw-3rem)] max-h-[60vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-4">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Temas</h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                    ✕
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {PALETTES.map((palette, index) => (
                    <button
                        key={index}
                        onClick={() => applyPalette(index)}
                        className={`text-sm px-4 py-2 rounded-lg transition-all text-left flex items-center gap-3 whitespace-nowrap ${activePalette === index
                            ? 'bg-gray-900 text-white shadow-md'
                            : 'hover:bg-gray-100 text-gray-700'
                            }`}
                    >
                        <div className="flex gap-1 flex-shrink-0">
                            <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: palette.colors['--color-primary'] }}></div>
                            <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: palette.colors['--color-secondary'] }}></div>
                            <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: palette.colors['--color-accent'] }}></div>
                        </div>
                        {palette.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
