'use client';

import { useState, useEffect } from 'react';

interface ObfuscatedContactProps {
    type: 'email' | 'phone' | 'whatsapp';
    value: string;
    label?: string;
    className?: string;
}

export default function ObfuscatedContact({ type, value, label, className }: ObfuscatedContactProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <span className={className}>Cargando contacto...</span>;
    }

    let href = '';
    let displayValue = label || value;

    if (type === 'email') {
        href = `mailto:${value}`;
    } else if (type === 'phone') {
        href = `tel:${value.replace(/\s/g, '')}`;
    } else if (type === 'whatsapp') {
        href = `https://wa.me/${value.replace(/\+/g, '').replace(/\s/g, '')}`;
    }

    return (
        <a href={href} className={className}>
            {displayValue}
        </a>
    );
}
