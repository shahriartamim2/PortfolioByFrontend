import { Helmet } from 'react-helmet-async';
import { PROFILE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, toAbsoluteUrl } from '../config/site';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'profile';
    canonicalUrl?: string;
    publishedTime?: string;
    modifiedTime?: string;
    structuredData?: Record<string, unknown>;
}

const defaultKeywords = [
    'Abdullah Noman',
    'Textile Engineer',
    'Software Developer',
    'BUTEX',
    'Textile Technology',
    'React Developer',
    'Power BI Dashboard',
    'Garment Costing',
    'Lab Dip Management',
].join(', ');

export default function SEO({
    title,
    description = SITE_DESCRIPTION,
    keywords = defaultKeywords,
    ogImage = `${SITE_URL}/icon.svg`,
    ogType = 'website',
    canonicalUrl = '/',
    publishedTime,
    modifiedTime,
    structuredData,
}: SEOProps) {
    const fullTitle = title ? `${title} | Abdullah Noman` : SITE_TITLE;
    const url = toAbsoluteUrl(canonicalUrl);
    const image = toAbsoluteUrl(ogImage);
    const schema = structuredData ?? {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: PROFILE.name,
        jobTitle: PROFILE.jobTitle,
        email: `mailto:${PROFILE.email}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dhaka',
            addressCountry: 'Bangladesh',
        },
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: PROFILE.university,
        },
        url: SITE_URL,
        sameAs: [PROFILE.github, PROFILE.linkedin, PROFILE.facebook],
        knowsAbout: [
            'Textile engineering',
            'Yarn manufacturing',
            'Quality control',
            'React',
            'TypeScript',
            'Power BI',
            'Production workflow software',
        ],
    };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={PROFILE.name} />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="language" content="English" />
            <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
            <link rel="canonical" href={url} />

            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_US" />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <link rel="alternate" href={url} hrefLang="en" />

            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
}
