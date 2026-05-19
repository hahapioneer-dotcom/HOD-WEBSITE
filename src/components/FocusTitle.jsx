'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import './FocusTitle.css';

export default function FocusTitle({ text }) {
    const titleRef = useRef(null);
    const lettersRef = useRef([]);
    const [isDesktop, setIsDesktop] = useState(false);
    const rafId = useRef(null);
    const mouseX = useRef(null);
    const pathname = usePathname();

    const handleClick = () => {
        // Instant navigation - bypass transitions
        if (pathname === '/') {
            // Refresh homepage
            window.location.reload();
        } else {
            // Navigate to homepage instantly
            window.location.href = '/';
        }
    };

    useEffect(() => {
        // Check if desktop (min-width: 1024px)
        const checkDesktop = () => {
            setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
        };

        checkDesktop();
        window.addEventListener('resize', checkDesktop);

        return () => {
            window.removeEventListener('resize', checkDesktop);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isDesktop || !titleRef.current) return;

        const handleMouseMove = (e) => {
            const rect = titleRef.current.getBoundingClientRect();
            mouseX.current = e.clientX - rect.left;

            if (!rafId.current) {
                rafId.current = requestAnimationFrame(updateBlur);
            }
        };

        const handleMouseLeave = () => {
            mouseX.current = null;
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
                rafId.current = null;
            }
            // Reset all letters to sharp
            lettersRef.current.forEach(letter => {
                if (letter) {
                    letter.style.filter = 'blur(0px)';
                }
            });
        };

        const updateBlur = () => {
            if (mouseX.current === null) {
                rafId.current = null;
                return;
            }

            lettersRef.current.forEach((letter) => {
                if (!letter) return;

                const letterRect = letter.getBoundingClientRect();
                const letterCenterX = letterRect.left + letterRect.width / 2 - titleRef.current.getBoundingClientRect().left;

                // Calculate distance from cursor to letter center
                const distance = Math.abs(mouseX.current - letterCenterX);

                // Calculate blur amount
                // 0-30px: no blur
                // 30-100px: gradual blur from 0 to 3px
                // 100+px: max blur 3px
                let blurAmount = 0;
                if (distance > 30) {
                    blurAmount = Math.min((distance - 30) / 70 * 3, 3);
                }

                letter.style.filter = `blur(${blurAmount}px)`;
            });

            rafId.current = requestAnimationFrame(updateBlur);
        };

        const container = titleRef.current;
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [isDesktop]);

    // Split text into letters
    const letters = text.split('').map((char, index) => {
        if (char === ' ') {
            return <span key={index} className="space">&nbsp;</span>;
        }
        return (
            <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="letter"
            >
                {char}
            </span>
        );
    });

    return (
        <h1
            ref={titleRef}
            className={`hero-title focus-title ${isDesktop ? 'desktop' : ''}`}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            {letters}
        </h1>
    );
}
