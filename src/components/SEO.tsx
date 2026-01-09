import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = 'Abdullah Noman, Textile Engineering, Software Development, Portfolio, React Developer, Textile Technology',
    ogImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop',
    ogType = 'website',
    canonicalUrl,
}) => {
    const siteUrl = 'https://yourdomain.com'; // Replace with your actual domain
    const fullTitle = title ? `${title} | Abdullah Noman` : 'Abdullah Noman - Textile Engineer & Software Developer';
    const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Abdullah Noman" />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Abdullah Noman Portfolio" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
        </Helmet>
    );
};

export default SEO;
