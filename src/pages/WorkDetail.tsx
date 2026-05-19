import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { works } from '../data/worksData';

export default function WorkDetail() {
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
        if (work?.images?.length) {
            setCurrentImageIndex((prev) => (prev === 0 ? work.images!.length - 1 : prev - 1));
        }
    }, [work]);

    const goToNext = useCallback(() => {
        if (work?.images?.length) {
            setCurrentImageIndex((prev) => (prev === work.images!.length - 1 ? 0 : prev + 1));
        }
    }, [work]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (event.key === 'Escape') closeLightbox();
            if (event.key === 'ArrowLeft') goToPrevious();
            if (event.key === 'ArrowRight') goToNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, goToPrevious, goToNext]);

    useEffect(() => {
        document.body.style.overflow = lightboxOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [lightboxOpen]);

    useEffect(() => {
        if (!work) navigate('/works');
    }, [work, navigate]);

    if (!work) return null;

    const projectSchema = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: work.title,
        description: work.description,
        image: work.image,
        url: work.link,
        creator: {
            '@type': 'Person',
            name: 'Abdullah Noman',
        },
    };

    return (
        <main className="page-shell">
            <SEO
                title={work.title}
                description={work.description}
                keywords={`${work.title}, ${work.category}, Textile Engineering Project, Portfolio`}
                ogImage={work.image}
                canonicalUrl={`/works/${work.id}`}
                structuredData={projectSchema}
            />

            <button onClick={() => navigate('/works')} className="secondary-button mb-8">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to works
            </button>

            <article className="space-y-14">
                <header className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
                    <div className="paper-panel p-5 sm:p-8">
                        <div className="mb-6 flex flex-wrap items-center gap-3">
                            <span className="miro-label">Project Report</span>
                            <span className="soft-label">{work.category}</span>
                        </div>
                        <h1 className="page-title">{work.title}</h1>
                        <p className="section-copy mt-6 text-lg">{work.description}</p>
                        {work.link && (
                            <a href={work.link} target="_blank" rel="noopener noreferrer" className="primary-button mt-8">
                                View project
                                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        )}
                    </div>

                    <div className="paper-panel overflow-hidden">
                        <div className="border-b border-[var(--line)] p-4">
                            <p className="mono-note">Preview</p>
                        </div>
                        <img
                            src={work.image}
                            alt={`${work.title} preview`}
                            className="aspect-video h-full w-full object-cover"
                            width="960"
                            height="540"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </div>
                </header>

                {work.images && work.images.length > 0 && (
                    <section className="space-y-6">
                        <div className="border-l-4 border-[var(--line-strong)] pl-5">
                            <h2 className="section-title text-3xl">Project Gallery</h2>
                            <p className="section-copy mt-2">Tap any image to inspect it at full size.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {work.images.map((image, index) => (
                                <button
                                    type="button"
                                    key={`${image}-${index}`}
                                    onClick={() => openLightbox(index)}
                                    className="surface-card group relative aspect-video overflow-hidden text-left focus-visible:ring-4 focus-visible:ring-[var(--focus)]"
                                >
                                    <img
                                        src={image}
                                        alt={`${work.title} screenshot ${index + 1}`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="icon-button absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
                                        <Maximize className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {work.sections && work.sections.length > 0 && (
                    <section className="space-y-6">
                        <div className="border-l-4 border-[var(--line-strong)] pl-5">
                            <h2 className="section-title text-3xl">Key Features</h2>
                        </div>

                        <div className="grid gap-4">
                            {work.sections.map((section, index) => (
                                <article key={`${section.title}-${index}`} className="surface-card p-5 sm:p-6">
                                    <div className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--panel-muted)] font-black text-[var(--ink-strong)]">
                                            {index + 1}
                                        </div>
                                        <div>
                                            {section.title && (
                                                <h3 className="text-xl font-black text-[var(--ink-strong)]">
                                                    {section.title}
                                                </h3>
                                            )}
                                            <p className="section-copy mt-3">{section.description}</p>
                                            {section.image && (
                                                <img
                                                    src={section.image}
                                                    alt={`${work.title} feature ${index + 1}`}
                                                    className="mt-5 w-full rounded-md border border-[var(--line)]"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}
            </article>

            {lightboxOpen && work.images && (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm">
                    <button onClick={closeLightbox} className="icon-button absolute right-4 top-4 z-10 bg-white/10 text-white hover:bg-white/20" aria-label="Close lightbox">
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button onClick={goToPrevious} className="icon-button absolute left-4 z-10 bg-white/10 text-white hover:bg-white/20" aria-label="Previous image">
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <div className="flex max-h-[88vh] max-w-7xl flex-col items-center gap-4">
                        <img
                            src={work.images[currentImageIndex]}
                            alt={`${work.title} full view ${currentImageIndex + 1}`}
                            className="max-h-[80vh] max-w-full rounded-md object-contain"
                            decoding="async"
                        />
                        <p className="text-sm font-bold text-white/70">
                            {currentImageIndex + 1} / {work.images.length}
                        </p>
                    </div>
                    <button onClick={goToNext} className="icon-button absolute right-4 z-10 bg-white/10 text-white hover:bg-white/20" aria-label="Next image">
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            )}
        </main>
    );
}
