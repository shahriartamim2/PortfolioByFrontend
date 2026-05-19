import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <main className="page-shell flex min-h-screen items-center justify-center">
            <SEO title="Page Not Found" description="The requested page could not be found." canonicalUrl="/" />
            <div className="paper-panel max-w-xl p-8 text-center">
                <span className="miro-label">404</span>
                <h1 className="section-title mt-5">Page not found</h1>
                <p className="section-copy mt-4">The page may have moved, or the link may be outdated.</p>
                <Link to="/" className="primary-button mt-6">
                    Go home
                </Link>
            </div>
        </main>
    );
}
