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
            <section className="page-header border-b">
                <div className="container">
                    <span className="label-caps block mb-unit opacity-60">ARCHIVE / PROJECTS</span>
                    <h1 className="manifesto-heading">SELECTED WORKS</h1>
                </div>
            </section>

            {/* Portfolio Categories */}
            {categories.map((category, index) => (
                <section key={index} className="section category-section">
                    <div className="container">
                        <div className="flex-between border-b pb-unit mb-gutter">
                            <h2 className="category-title">{category.title}</h2>
                            <span className="label-caps">[ {category.works.length} ENTRIES ]</span>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-12 brutalist-grid gap-0">
                            {category.works.map((work, idx) => (
                                <div key={work.id} className={`col-span-4 work-card group grid-cell-border aspect-square relative ${idx % 3 === 1 ? 'md-mt-negative bg-surface' : ''}`}>
                                    <div className="work-thumbnail">
                                        <div className="video-placeholder">
                                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="29" stroke="var(--color-primary)" strokeWidth="2" />
                                                <path d="M24 20L40 30L24 40V20Z" fill="var(--color-primary)" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={`work-overlay ${idx % 2 === 0 ? '' : 'top-right'}`}>
                                        <span className="label-caps block">PROJECT {work.id.toString().padStart(2, '0')}</span>
                                        <h3 className="work-title-small">{work.title}</h3>
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
