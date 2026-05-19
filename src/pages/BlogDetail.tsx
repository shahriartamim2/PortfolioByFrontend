import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { PROFILE, SITE_URL } from '../config/site';
import { blogPosts } from '../data/blogData';

export default function BlogDetail() {
    const { blogId } = useParams<{ blogId: string }>();
    const navigate = useNavigate();
    const blog = blogPosts.find((b) => b.id === Number(blogId));

    useEffect(() => {
        if (!blog) navigate('/blog');
    }, [blog, navigate]);

    if (!blog) return null;

    const publishedTime = blog.date ? new Date(blog.date).toISOString() : undefined;
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.description,
        image: blog.image,
        datePublished: publishedTime,
        author: {
            '@type': 'Person',
            name: PROFILE.name,
        },
        publisher: {
            '@type': 'Person',
            name: PROFILE.name,
        },
        mainEntityOfPage: `${SITE_URL}/blog/${blog.id}`,
    };

    return (
        <main className="page-shell">
            <SEO
                title={blog.title}
                description={blog.description}
                keywords={`${blog.category}, Textile Engineering, Blog, ${blog.title}`}
                ogImage={blog.image}
                ogType="article"
                canonicalUrl={`/blog/${blog.id}`}
                publishedTime={publishedTime}
                structuredData={articleSchema}
            />

            <button onClick={() => navigate('/blog')} className="secondary-button mb-8">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to blog
            </button>

            <article className="mx-auto max-w-4xl">
                <header className="paper-panel overflow-hidden">
                    <div className="p-5 sm:p-8">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                            <span className="miro-label">Article</span>
                            <span className="soft-label">{blog.category}</span>
                            {blog.date && <time className="mono-note">{blog.date}</time>}
                        </div>
                        <h1 className="page-title">{blog.title}</h1>
                        <p className="section-copy mt-6 text-lg">{blog.description}</p>
                    </div>
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="aspect-[16/9] w-full border-t border-[var(--line)] object-cover"
                        loading="eager"
                        decoding="async"
                    />
                </header>

                <div className="mt-8 border-l-4 border-[var(--line-strong)] pl-5">
                    <p className="section-copy text-lg">
                        This article summary is a starting point for a fuller write-up. It frames the topic, core tension, and practical relevance for textile production teams and technology builders.
                    </p>
                </div>
            </article>
        </main>
    );
}
