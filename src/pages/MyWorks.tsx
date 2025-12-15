import React, { useState } from 'react';
import ContentCard, { ContentItem } from '../components/ContentCard';
import { works } from '../data/worksData';

// Work Detail Component (Optional, can be expanded later)
interface WorkDetailProps {
    work: ContentItem;
    onBack: () => void;
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work, onBack }) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-8 sm:py-20 md:py-24">
                <button
                    onClick={onBack}
                    className="text-white/60 hover:text-white transition-colors mb-6 sm:mb-8 flex items-center gap-2 group active:scale-95 transform"
                >
                    <span className="group-hover:-translate-x-1 transition-transform text-lg sm:text-base">←</span>
                    <span className="text-sm sm:text-base">Back to Works</span>
                </button>

                <article className="space-y-16 sm:space-y-24">
                    {/* Header Section */}
                    <header className="max-w-4xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 leading-tight">
                            {work.title}
                        </h1>
                        <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs sm:text-sm rounded-full mb-6">
                            {work.category}
                        </span>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            {work.description}
                        </p>
                        {work.link && (
                            <a
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
                            >
                                View Live Project
                                <span className="ml-2">↗</span>
                            </a>
                        )}
                    </header>

                    {/* Main Hero Image */}
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 aspect-video">
                        <img
                            src={work.image}
                            alt={work.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Alternating Sections */}
                    {work.sections && work.sections.length > 0 && (
                        <div className="space-y-16 sm:space-y-24">
                            {work.sections.map((section, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Text Side */}
                                    <div className="flex-1 space-y-4 w-full">
                                        {section.title && (
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                                {section.title}
                                            </h3>
                                        )}
                                        <p className="text-white/70 text-lg leading-relaxed">
                                            {section.description}
                                        </p>
                                    </div>

                                    {/* Image Side */}
                                    <div className="flex-1 w-full">
                                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 aspect-video group hover:border-white/20 transition-colors">
                                            <img
                                                src={section.image}
                                                alt={section.title || `Section ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
