'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
    };

    const isHomePage = pathname === '/';

    return (
        <header className={`header ${isHomePage ? 'header-home' : ''}`}>
            <div className="container header-content">
                {/* Desktop logo - hidden on mobile */}
                <Link href="/" className="logo desktop-logo">
                    House of Directors
                </Link>

                {/* Desktop navigation */}
                <nav className="nav desktop-nav">
                    <Link href="/">Home</Link>
                    <Link href="/work">Work</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>

                {/* Mobile hamburger icon */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile slide-in menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <button
                        className="mobile-menu-close"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                    <nav className="mobile-nav">
                        <Link href="/" onClick={closeMenu}>Home</Link>
                        <Link href="/work" onClick={closeMenu}>Work</Link>
                        <Link href="/about" onClick={closeMenu}>About</Link>
                        <Link href="/contact" onClick={closeMenu}>Contact</Link>
                    </nav>
                </div>

                {/* Overlay when mobile menu is open */}
                {mobileMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={closeMenu}></div>
                )}
            </div>
        </header>
    );
}
