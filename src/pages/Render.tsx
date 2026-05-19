import { ArrowLeft, Rotate3D } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { splatsData } from '../data/splatsData';

export default function Render() {
  const { renderId } = useParams<{ renderId: string }>();
  const splat = splatsData.find((item) => item.id === renderId);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
  }, [splat]);

  if (!splat && !isLoading) {
    return (
      <main className="page-shell">
        <SEO title="Render Not Found" description="The requested 3D render could not be found." canonicalUrl="/renders" />
        <div className="paper-panel mx-auto max-w-xl p-8 text-center">
          <h1 className="section-title">Render not found</h1>
          <p className="section-copy mt-4">The requested 3D scene is no longer available.</p>
          <button onClick={() => navigate('/renders')} className="primary-button mt-6">
            Back to renders
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col pt-20">
      {splat && (
        <SEO
          title={splat.title}
          description={splat.description ?? 'Interactive 3D render by Abdullah Noman.'}
          ogImage={splat.thumbnail}
          canonicalUrl={`/render/${splat.id}`}
        />
      )}

      <header className="border-b border-[var(--line)] bg-[var(--panel)] px-4 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <button onClick={() => navigate('/renders')} className="secondary-button">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </button>
          <div className="flex min-w-0 items-center gap-2 text-[var(--ink-strong)]">
            <Rotate3D className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate text-sm font-black sm:text-base">{splat?.title ?? '3D Render Viewer'}</span>
          </div>
          <div className="hidden w-24 sm:block" />
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-9rem)] flex-1 items-center justify-center p-3 sm:p-5">
        {isLoading && (
          <div className="paper-panel p-6 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[var(--line)] border-t-[var(--ink-strong)]" />
            <p className="section-copy mt-4">Loading 3D render...</p>
          </div>
        )}

        {splat && !isLoading && (
          <div className="h-[76vh] w-full max-w-7xl overflow-hidden rounded-lg border border-[var(--line)] bg-black shadow-[var(--shadow)]">
            <iframe
              title={splat.title}
              src={splat.url}
              className="h-full w-full border-0"
              loading="lazy"
              allow="fullscreen; xr-spatial-tracking"
            />
          </div>
        )}
      </section>

      <footer className="border-t border-[var(--line)] bg-[var(--panel)] px-4 py-3 text-center backdrop-blur-xl">
        <p className="mono-note">Drag to rotate. Scroll to zoom. Right-click to pan.</p>
      </footer>
    </main>
  );
}
