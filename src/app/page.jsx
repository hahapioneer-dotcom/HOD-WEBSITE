import Link from 'next/link';
import FocusTitle from '@/components/FocusTitle';
import BackgroundVideo from '@/components/BackgroundVideo';
import './page.css';

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <BackgroundVideo />
                <div className="container hero-content">
                    <FocusTitle text="CRAFTING" />
                    <FocusTitle text="CINEMATIC" />
                    <FocusTitle text="BRUTALISM" />
                    <div className="hero-tagline-container">
                        <p className="hero-tagline">A global production house dedicated to the architectural precision of the moving image. We build permanent visual legacies.</p>
                        <Link href="/contact" className="button">
                            START PROJECT
                        </Link>
                    </div>
                </div>
            </section>

            {/* Manifesto Section (Replaces Intro) */}
            <section className="section manifesto-section">
                <div className="container">
                    <div className="grid grid-cols-4 md:grid-cols-12">
                        <div className="col-span-4 md:col-span-12">
                            <span className="label-caps manifesto-label">MANIFESTO / 001</span>
                            <h2 className="manifesto-title">
                                STRUCTURE OVER DECORATION. PERMANENCE OVER TRENDS. WE DO NOT FILM; WE CONSTRUCT.
                            </h2>
                            <p className="manifesto-text mt-gutter">
                                House of Directors is a creative video production studio dedicated to transforming
                                ideas into compelling visual narratives. We specialize in brand films, corporate
                                videos, educational content, and social media campaigns that resonate with audiences
                                and drive meaningful engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Preview Section - Broken Grid */}
            <section className="section work-preview-section">
                <div className="container">
                    <div className="section-header border-b pb-unit mb-gutter flex-between">
                        <h3>SELECTED WORKS</h3>
                        <span className="label-caps">[ INDEX {new Date().getFullYear()} ]</span>
                    </div>

                    <div className="grid grid-cols-4 md:grid-cols-12 gap-0 brutalist-grid">
                        {/* Project 1 */}
                        <div className="col-span-4 md:col-span-8 grid-cell-border work-card group aspect-video relative">
                            <div className="work-thumbnail">
                                <div className="video-placeholder">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="29" stroke="var(--color-primary)" strokeWidth="2" />
                                        <path d="M24 20L40 30L24 40V20Z" fill="var(--color-primary)" />
                                    </svg>
                                </div>
                            </div>
                            <div className="work-overlay">
                                <span className="label-caps block">PROJECT 01</span>
                                <h4 className="work-title">Premium School Brand Film</h4>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="col-span-4 md:col-span-4 grid-cell-border work-card group aspect-square relative md-mt-negative">
                            <div className="work-thumbnail bg-surface">
                                <div className="video-placeholder">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="29" stroke="var(--color-primary)" strokeWidth="2" />
                                        <path d="M24 20L40 30L24 40V20Z" fill="var(--color-primary)" />
                                    </svg>
                                </div>
                            </div>
                            <div className="work-overlay">
                                <span className="label-caps block">PROJECT 02</span>
                                <h4 className="work-title-small">Annual Day Highlights</h4>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="col-span-4 md:col-span-12 grid-cell-border work-card group aspect-video relative mt-gutter">
                            <div className="work-thumbnail">
                                <div className="video-placeholder">
                                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="30" cy="30" r="29" stroke="var(--color-primary)" strokeWidth="2" />
                                        <path d="M24 20L40 30L24 40V20Z" fill="var(--color-primary)" />
                                    </svg>
                                </div>
                            </div>
                            <div className="work-overlay top-right">
                                <span className="label-caps block">PROJECT 03</span>
                                <h4 className="work-title">Corporate Brand Story</h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-gutter flex justify-center">
                        <Link href="/work" className="button hover-invert">VIEW ALL PROJECTS</Link>
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <section className="marquee-container">
                <div className="marquee-content">
                    HOUSE OF DIRECTORS • DIGITAL BRUTALISM • EST. 2024 • ARCHITECTURAL CINEMA • REBUILDING THE NARRATIVE • HOUSE OF DIRECTORS • DIGITAL BRUTALISM • EST. 2024 • ARCHITECTURAL CINEMA • REBUILDING THE NARRATIVE •
                </div>
            </section>
        </div>
    );
}
