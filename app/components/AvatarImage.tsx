'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AvatarImage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Placeholder inicial (HTML simple que no falla)
    if (!isMounted) {
        return (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
        );
    }

    return (
        <Image
            src="/cristina.jpg"
            alt="Cristina Rosillo"
            fill
            className="object-cover object-[center_20%]"
            priority
        />
    );
}
