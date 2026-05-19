import './page.css';

export const metadata = {
    title: 'About Us | House of Director',
    description: 'Learn about House of Director - a creative video production studio delivering premium content for brands and institutions.',
};

export default function About() {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                </div>
            </section>

            {/* About Content */}
            <section className="section about-content-section">
                <div className="container">
                    <div className="about-content">
                        <div className="content-block">
                            <h2>Who We Are</h2>
                            <p>
                                House of Director is a premium video production studio specializing in cinematic
                                storytelling for brands, businesses, and educational institutions. The studio operates
                                with a clear mission: to transform concepts into compelling visual narratives that
                                resonate with audiences and drive measurable impact.
                            </p>
                            <p>
                                With expertise spanning brand films, corporate videos, event coverage, and social
                                media content, House of Director brings together technical precision and creative
                                excellence to deliver productions that exceed industry standards.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>Our Approach</h2>
                            <p>
                                Every project begins with strategic consultation to understand objectives, target
                                audiences, and desired outcomes. The team then develops creative concepts that align
                                with brand identity while pushing creative boundaries. From pre-production planning
                                through post-production delivery, House of Director maintains rigorous quality control
                                at every stage.
                            </p>
                            <p>
                                The studio&apos;s workflow integrates advanced cinematography techniques, professional-grade
                                equipment, and industry-leading editing software to produce content that stands out in
                                competitive markets.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>Excellence in Execution</h2>
                            <p>
                                House of Director serves clients across India with a global perspective, understanding
                                cultural nuances while maintaining international production standards. The studio&apos;s
                                portfolio spans multiple sectors including education, corporate, retail, and technology,
                                demonstrating versatility without compromising quality.
                            </p>
                            <p>
                                Each project is executed with attention to detail, deadline adherence, and budget
                                consciousness, ensuring clients receive maximum value from their investment in
                                professional video production.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>Services</h2>
                            <ul className="services-list">
                                <li>Brand Films and Corporate Videos</li>
                                <li>Educational Institution Content</li>
                                <li>Event Coverage and Documentation</li>
                                <li>Social Media Campaigns and Reels</li>
                                <li>Product Launch Videos</li>
                                <li>Documentary Style Productions</li>
                                <li>Aerial Cinematography</li>
                                <li>Post-Production and Color Grading</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
