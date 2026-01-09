import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { works } from '../data/worksData';

const WorkDetail: React.FC = () => {
    const { workId } = useParams<{ workId: string }>();
    const navigate = useNavigate();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const work = works.find((w) => w.id === Number(workId));

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToPrevious = useCallback(() => {
        if (work && work.images) {
            setCurrentImageIndex((prev) => (prev === 0 ? work.images!.length - 1 : prev - 1));
        }
    }, [work]);

    const goToNext = useCallback(() => {
        if (work && work.images) {
            setCurrentImageIndex((prev) => (prev === work.images!.length - 1 ? 0 : prev + 1));
        }
    }, [work]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, goToPrevious, goToNext]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [lightboxOpen]);

    useEffect(() => {
        if (!work) {
            navigate('/');
        }
    }, [work, navigate]);

    if (!work) {
        return null;
    }

    return (
        <div>
            <SEO
                title={work.title}
                description={work.description}
                keywords={`${work.title}, ${work.category}, Project, Portfolio`}
                ogImage={work.image}
                canonicalUrl={`/works/${work.id}`}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-8 sm:py-20 md:py-24">
                <button
                    onClick={() => navigate('/')}
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

                    {/* Photo Gallery Section */}
                    {work.images && work.images.length > 0 && (
                        <div className="max-w-6xl mx-auto space-y-8">
                            <div className="border-l-4 border-white/20 pl-6">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Gallery</h2>
                                <p className="text-white/60 mt-2">Visual showcase of the project</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {work.images.map((image, index) => (
                                    <div
                                        key={index}
                                        onClick={() => openLightbox(index)}
                                        className="relative rounded-lg sm:rounded-xl overflow-hidden border border-white/10 aspect-video group hover:border-white/30 transition-all duration-300 cursor-pointer"
                                    >
                                        <img
                                            src={image}
                                            alt={`${work.title} - Screenshot ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Lightbox Modal */}
                    {lightboxOpen && work.images && (
                        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200"
                                aria-label="Close lightbox"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Previous Button */}
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200"
                                aria-label="Previous image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Image Container */}
                            <div className="flex flex-col items-center justify-center max-w-7xl max-h-[90vh] mx-auto px-4 sm:px-16">
                                <img
                                    src={work.images[currentImageIndex]}
                                    alt={`${work.title} - Image ${currentImageIndex + 1}`}
                                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                                />
                                {/* Image Counter */}
                                <div className="text-center mt-4 text-white/60 text-sm">
                                    {currentImageIndex + 1} / {work.images.length}
                                </div>
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={goToNext}
                                className="absolute right-4 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200"
                                aria-label="Next image"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Professional Documentation Sections */}
                    {work.sections && work.sections.length > 0 && (
                        <div className="max-w-5xl mx-auto space-y-12">
                            <div className="border-l-4 border-white/20 pl-6">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Key Features & Implementation</h2>
                            </div>

                            <div className="grid gap-8">
                                {work.sections.map((section, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                {section.title && (
                                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                                        {section.title}
                                                    </h3>
                                                )}
                                                <p className="text-white/70 leading-relaxed">
                                                    {section.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
};

export default WorkDetail;
