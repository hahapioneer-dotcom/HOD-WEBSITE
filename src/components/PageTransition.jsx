'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import './PageTransition.css';

export default function PageTransition({ children }) {
    const pathname = usePathname();
    const [displayPath, setDisplayPath] = useState(pathname);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Check if user prefers reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            setDisplayPath(pathname);
            return;
        }

        // If pathname changed, trigger exit transition
        if (pathname !== displayPath) {
            setIsExiting(true);

            // Wait for fade out, then update content
            const timer = setTimeout(() => {
                setDisplayPath(pathname);
                setIsExiting(false);
            }, 250); // 250ms swift transition

            return () => clearTimeout(timer);
        }
    }, [pathname, displayPath]);

    return (
        <div className={isExiting ? 'page-exit' : 'page-enter'}>
            {children}
        </div>
    );
}
