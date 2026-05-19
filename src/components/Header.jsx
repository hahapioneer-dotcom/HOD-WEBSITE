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

    return (
        <header className="header">
            <div className="container header-content">
                {/* Desktop logo */}
                <Link href="/" className="logo">
                    HOUSE OF DIRECTORS
                </Link>

                {/* Desktop navigation */}
                <nav className="nav desktop-nav">
                    <Link href="/work" className={`nav-link ${pathname === '/work' ? 'active' : ''}`}>WORK</Link>
                    <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
                    <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                </nav>

                <div className="header-actions desktop-only">
                    <Link href="/contact" className="button hover-invert">START PROJECT</Link>
                </div>

                {/* Mobile hamburger icon */}
                <button
                    className="mobile-menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                </button>

                {/* Mobile slide-in menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-header">
                        <span className="logo">HOD</span>
                        <button
                            className="mobile-menu-close"
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>
                    <nav className="mobile-nav">
                        <Link href="/" onClick={closeMenu}>HOME</Link>
                        <Link href="/work" onClick={closeMenu}>WORK</Link>
                        <Link href="/about" onClick={closeMenu}>ABOUT</Link>
                        <Link href="/contact" onClick={closeMenu}>CONTACT</Link>
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
