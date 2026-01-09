import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentCard, { ContentItem } from '../components/ContentCard';
import SEO from '../components/SEO';
import { works } from '../data/worksData';

const MyWorks: React.FC = () => {
    const navigate = useNavigate();

    const handleWorkClick = (work: ContentItem): void => {
        navigate(`/works/${work.id}`);
    };

    return (
        <div className="text-white">
            <SEO
                title="My Works"
                description="Explore the portfolio of Abdullah Noman featuring innovative textile engineering projects, software solutions, and web applications. Including Lab Dip Management System, FOB Costing Calculator, and more."
                keywords="Portfolio, Projects, Textile Engineering Projects, Software Development, React Projects, Electron Apps, Lab Dip System, FOB Calculator"
                canonicalUrl="/"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 pt-32 pb-16 sm:py-20 md:py-24">
                <header className="mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">My Works</h1>
                    <p className="text-white/60 text-base sm:text-lg md:text-xl">A showcase of my projects and creations</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {works.map((work: ContentItem) => (
                        <ContentCard
                            key={work.id}
                            item={work}
                            onClick={handleWorkClick}
                            showDate={false}
                            actionLabel="View Details"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
