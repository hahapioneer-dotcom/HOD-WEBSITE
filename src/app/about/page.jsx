import './page.css';

export const metadata = {
    title: 'About Us | House of Director',
    description: 'Learn about House of Director - a creative video production studio delivering premium content for brands and institutions.',
};

export default function About() {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header border-b">
                <div className="container">
                    <span className="label-caps block mb-unit opacity-60">FIRM / ABOUT</span>
                    <h1 className="manifesto-heading">ABOUT US</h1>
                </div>
            </section>

            {/* About Content */}
            <section className="section about-content-section">
                <div className="container">
                    <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter">
                        <div className="col-span-4 md:col-span-4">
                            <h2 className="sticky-heading">Capabilities & Vision</h2>
                        </div>
                        <div className="col-span-4 md:col-span-8 flex flex-col">
                            
                            <div className="content-row group">
                                <div className="flex gap-gutter items-start w-full">
                                    <span className="row-number">01</span>
                                    <div className="row-content">
                                        <h3>Who We Are</h3>
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
                                </div>
                            </div>

                            <div className="content-row group">
                                <div className="flex gap-gutter items-start w-full">
                                    <span className="row-number">02</span>
                                    <div className="row-content">
                                        <h3>Our Approach</h3>
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
                                </div>
                            </div>

                            <div className="content-row group">
                                <div className="flex gap-gutter items-start w-full">
                                    <span className="row-number">03</span>
                                    <div className="row-content">
                                        <h3>Excellence in Execution</h3>
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
                                </div>
                            </div>

                            <div className="content-row border-b-primary group">
                                <div className="flex gap-gutter items-start w-full">
                                    <span className="row-number">04</span>
                                    <div className="row-content">
                                        <h3>Services</h3>
                                        <ul className="services-list">
                                            <li>BRAND FILMS AND CORPORATE VIDEOS</li>
                                            <li>EDUCATIONAL INSTITUTION CONTENT</li>
                                            <li>EVENT COVERAGE AND DOCUMENTATION</li>
                                            <li>SOCIAL MEDIA CAMPAIGNS AND REELS</li>
                                            <li>PRODUCT LAUNCH VIDEOS</li>
                                            <li>DOCUMENTARY STYLE PRODUCTIONS</li>
                                            <li>AERIAL CINEMATOGRAPHY</li>
                                            <li>POST-PRODUCTION AND COLOR GRADING</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
