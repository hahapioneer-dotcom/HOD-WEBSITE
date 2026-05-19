import Link from 'next/link';
import FocusTitle from '@/components/FocusTitle';
import BackgroundVideo from '@/components/BackgroundVideo';
import './page.css';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <BackgroundVideo />
                <div className="container hero-content">
                    <FocusTitle text="House of Directors" />
                    <p className="hero-tagline">From Concept to Camera We Do It All</p>
                    <Link href="/contact" className="button">
                        Start a Project
                    </Link>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section intro-section">
                <div className="container">
                    <div className="intro-content">
                        <h2>Cinematic Excellence in Every Frame</h2>
                        <p>
                            House of Directors is a creative video production studio dedicated to transforming
                            ideas into compelling visual narratives. We specialize in brand films, corporate
                            videos, educational content, and social media campaigns that resonate with audiences
                            and drive meaningful engagement. With a team of experienced filmmakers, directors,
                            and creative professionals, we deliver premium production quality that elevates your
                            brand and tells your story with authenticity and impact.
                        </p>
                        <p>
                            Our approach combines strategic thinking with artistic execution, ensuring every
                            project we undertake reflects the highest standards of craftsmanship. From initial
                            concept development to final delivery, we handle every aspect of production with
                            meticulous attention to detail and unwavering commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Work Preview Section */}
            <section className="section work-preview-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Selected Work</h2>
                        <Link href="/work" className="view-all-link">
                            View All Projects →
                        </Link>
                    </div>

                    <div className="grid grid-3 work-grid">
                        {/* School Brand Film */}
                        <div className="work-item">
                            <div className="work-thumbnail">
                                <div className="video-placeholder">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
                                        <path d="M24 20L40 30L24 40V20Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>Premium School Brand Film</h3>
                                <p className="work-category">School Brand Films</p>
                            </div>
                        </div>

                        {/* Event Coverage */}
                        <div className="work-item">
                            <div className="work-thumbnail">
                                <div className="video-placeholder">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
                                        <path d="M24 20L40 30L24 40V20Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>Annual Day Highlights</h3>
                                <p className="work-category">School Event Videos</p>
                            </div>
                        </div>

                        {/* Brand Promotion */}
                        <div className="work-item">
                            <div className="work-thumbnail">
                                <div className="video-placeholder">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
                                        <path d="M24 20L40 30L24 40V20Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>Corporate Brand Story</h3>
                                <p className="work-category">Brand Promotions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
