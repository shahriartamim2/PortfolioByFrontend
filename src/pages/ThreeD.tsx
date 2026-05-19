import { Box, Rotate3D } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { splatsData, Splat } from '../data/splatsData';

export default function ThreeD() {
  const navigate = useNavigate();

  const handleCardClick = (splat: Splat) => {
    navigate(`/render/${splat.id}`);
  };

  return (
    <main className="page-shell">
      <SEO
        title="3D Renders"
        description="Explore Abdullah Noman's interactive 3D renders and Gaussian Splatting experiments."
        keywords="3D Renders, Gaussian Splatting, Supersplat, 3D Visualization, Abdullah Noman"
        canonicalUrl="/renders"
      />

      <header className="mb-10 grid gap-5 md:grid-cols-[0.7fr_1fr] md:items-end">
        <div>
          <span className="miro-label">Render Lab</span>
          <h1 className="page-title mt-5">3D Renders</h1>
        </div>
        <p className="section-copy text-lg">
          Interactive render studies built around spatial capture, Gaussian Splatting, and inspectable visual scenes.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {splatsData.map((splat) => (
          <button
            type="button"
            key={splat.id}
            className="surface-card group overflow-hidden text-left focus-visible:ring-4 focus-visible:ring-[var(--focus)]"
            onClick={() => handleCardClick(splat)}
          >
            <div className="relative aspect-video border-b border-[var(--line)] bg-[var(--panel-muted)]">
              <img
                src={splat.thumbnail}
                alt={splat.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                loading="lazy"
                decoding="async"
              />
              <span className="icon-button absolute right-3 top-3 bg-[var(--panel-solid)]">
                <Rotate3D className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-[var(--accent-ink)]">
                <Box className="h-4 w-4" aria-hidden="true" />
                <span className="mono-note">Interactive scene</span>
              </div>
              <h2 className="text-2xl font-black text-[var(--ink-strong)]">{splat.title}</h2>
              <p className="section-copy mt-3">{splat.description}</p>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}
