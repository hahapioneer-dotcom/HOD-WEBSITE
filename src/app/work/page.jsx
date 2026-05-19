import './page.css';

export const metadata = {
    title: 'Our Work | House of Director',
    description: 'Explore our portfolio of brand films, event videos, social media content, and corporate productions.',
};

export default function Work() {
    const categories = [
        {
            title: 'School Brand Films',
            works: [
                { id: 1, title: 'Heritage International School Brand Film', videoUrl: '#' },
                { id: 2, title: 'Cambridge Academy Vision Story', videoUrl: '#' },
                { id: 3, title: 'Greenwood School Legacy Film', videoUrl: '#' },
            ]
        },
        {
            title: 'School Event Videos',
            works: [
                { id: 4, title: 'Annual Day 2025 Highlights', videoUrl: '#' },
                { id: 5, title: 'Sports Day Championship Coverage', videoUrl: '#' },
                { id: 6, title: 'Graduation Ceremony Cinematic', videoUrl: '#' },
            ]
        },
        {
            title: 'Social Media Reels',
            works: [
                { id: 7, title: 'Behind The Scenes Production Reel', videoUrl: '#' },
                { id: 8, title: 'Student Success Stories', videoUrl: '#' },
                { id: 9, title: 'Campus Life Showcase', videoUrl: '#' },
                { id: 10, title: 'Faculty Excellence Series', videoUrl: '#' },
            ]
        },
        {
            title: 'Brand Promotions',
            works: [
                { id: 11, title: 'Corporate Brand Identity Film', videoUrl: '#' },
                { id: 12, title: 'Product Launch Campaign', videoUrl: '#' },
                { id: 13, title: 'Company Culture Showcase', videoUrl: '#' },
            ]
        },
    ];

    return (
        <div className="work-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our Work</h1>
                    <p className="page-subtitle">
                        A collection of cinematic storytelling crafted for brands, businesses,
                        and educational institutions across India and beyond.
                    </p>
                </div>
            </section>

            {/* Portfolio Categories */}
            {categories.map((category, index) => (
                <section key={index} className="section category-section">
                    <div className="container">
                        <h2 className="category-title">{category.title}</h2>
                        <div className="grid grid-3 work-grid">
                            {category.works.map((work) => (
                                <div key={work.id} className="work-item">
                                    <div className="work-thumbnail">
                                        <div className="video-placeholder">
                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" />
                                                <path d="M24 20L40 30L24 40V20Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="work-overlay">
                                            <span className="play-text">Watch Film</span>
                                        </div>
                                    </div>
                                    <div className="work-info">
                                        <h3>{work.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
