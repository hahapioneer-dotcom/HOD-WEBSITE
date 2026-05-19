import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-text">
                    <p>&copy; {new Date().getFullYear()} House of Director. All rights reserved.</p>
                </div>
                <div className="footer-tagline">
                    <p>From Concept to Camera We Do It All</p>
                </div>
            </div>
        </footer>
    );
}
