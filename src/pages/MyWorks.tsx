import { useNavigate } from 'react-router-dom';
import ContentCard, { ContentItem } from '../components/ContentCard';
import SEO from '../components/SEO';
import { works } from '../data/worksData';

interface MyWorksProps {
    embedded?: boolean;
}

export default function MyWorks({ embedded = false }: MyWorksProps) {
    const navigate = useNavigate();

    const handleWorkClick = (work: ContentItem): void => {
        navigate(`/works/${work.id}`);
    };

    return (
        <section className={embedded ? 'section-block' : 'page-shell'} id={embedded ? 'works' : undefined}>
            {!embedded && (
                <SEO
                    title="Works"
                    description="Explore Abdullah Noman's textile engineering and software projects, including Power BI dashboards, FOB costing tools, and lab dip shade intelligence systems."
                    keywords="Portfolio Projects, Textile Engineering Projects, Software Development, Power BI Dashboard, FOB Calculator, Lab Dip System"
                    canonicalUrl="/works"
                />
            )}

            <div className={embedded ? 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8' : ''}>
                <header className="mb-8 flex flex-col gap-3 sm:mb-12 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="miro-label">Work Archive</span>
                        <h1 className="section-title mt-5">{embedded ? 'Selected Works' : 'Works'}</h1>
                    </div>
                    <p className="section-copy max-w-2xl">
                        Projects focused on dashboards, costing, lab workflows, and practical textile technology.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {works.map((work) => (
                        <ContentCard
                            key={work.id}
                            item={work}
                            onClick={handleWorkClick}
                            showDate={false}
                            actionLabel="View details"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
