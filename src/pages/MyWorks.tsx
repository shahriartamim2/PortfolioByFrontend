import React, { useState } from 'react';
import ContentCard, { ContentItem } from '../components/ContentCard';

// Sample works data
const works: ContentItem[] = [
    {
        id: 1,
        title: "Book Finder",
        description: "A web application to search and discover books. Built with React and modern web technologies.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop",
        category: "Web App",
        link: "https://ebd-finder.vercel.app/book-finder"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills, projects, and blog posts. Designed with a modern aesthetic.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
        category: "Website"
    },
];

// Work Detail Component (Optional, can be expanded later)
interface WorkDetailProps {
    work: ContentItem;
    onBack: () => void;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work, onBack }) => {
    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-8 sm:py-20 md:py-24">
                <button
                    onClick={onBack}
                    className="text-white/60 hover:text-white transition-colors mb-6 sm:mb-8 flex items-center gap-2 group active:scale-95 transform"
                >
                    <span className="group-hover:-translate-x-1 transition-transform text-lg sm:text-base">←</span>
                    <span className="text-sm sm:text-base">Back to Works</span>
                </button>

                <article className="space-y-6 sm:space-y-8">
                    <header>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 leading-tight">
                            {work.title}
                        </h1>
                        <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs sm:text-sm rounded-full">
                            {work.category}
                        </span>
                    </header>

                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
                        <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-56 sm:h-72 md:h-96 object-cover"
                        />
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                            {work.description}
                        </p>
                        {work.link && (
                            <div className="mt-6">
                                <a
                                    href={work.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
                                >
                                    View Project
                                    <span className="ml-2">↗</span>
                                </a>
                            </div>
                        )}
                    </div>
                </article>
            </div>
        </div>
    );
};

const MyWorks: React.FC = () => {
    const [selectedWork, setSelectedWork] = useState<ContentItem | null>(null);

    const handleWorkClick = (work: ContentItem): void => {
        setSelectedWork(work);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackClick = (): void => {
        setSelectedWork(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (selectedWork) {
        return <WorkDetail work={selectedWork} onBack={handleBackClick} />;
    }

    return (
        <div className="text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 pt-20 pb-16 sm:py-20 md:py-24">
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
