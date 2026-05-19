import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            HOUSE OF<br />DIRECTORS
                        </div>
                        <p className="footer-coordinates">
                            COORDINATES: 28.6139° N, 77.2090° E<br />
                            NEW DELHI, IN / GLOBAL OPS.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <span className="footer-label">CHANNELS</span>
                        <a href="#" className="footer-link">INSTAGRAM</a>
                        <a href="#" className="footer-link">VIMEO</a>
                        <a href="#" className="footer-link">LINKEDIN</a>
                    </div>

                    <div className="footer-links-group">
                        <span className="footer-label">FIRM</span>
                        <Link href="/about" className="footer-link">ABOUT</Link>
                        <Link href="/work" className="footer-link">PROJECTS</Link>
                        <Link href="/contact" className="footer-link">CONTACT</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copy">
                        ©{new Date().getFullYear()} HOUSE OF DIRECTORS. ALL RIGHTS RESERVED. DESIGNED FOR PERMANENCE.
                    </p>
                </div>
            </div>
        </footer>
    );
}
