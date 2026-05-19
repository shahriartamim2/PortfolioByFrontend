import { useNavigate } from 'react-router-dom';
import ContentCard, { ContentItem } from '../components/ContentCard';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const navigate = useNavigate();

  const handleBlogClick = (post: ContentItem): void => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <main className="page-shell">
      <SEO
        title="Blog"
        description="Read Abdullah Noman's notes on textile engineering, sustainable manufacturing, AI in textiles, smart fabrics, and fashion technology."
        keywords="Textile Engineering Blog, Sustainable Textiles, AI in Textiles, Smart Fabrics, Fashion Technology, Textile Industry"
        canonicalUrl="/blog"
      />

      <header className="mb-10 grid gap-5 md:grid-cols-[0.7fr_1fr] md:items-end">
        <div>
          <span className="miro-label">Field Notes</span>
          <h1 className="page-title mt-5">Blog</h1>
        </div>
        <p className="section-copy text-lg">
          Practical writing on textile engineering, automation, sustainability, and the tools shaping manufacturing work.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <ContentCard key={post.id} item={post} onClick={handleBlogClick} />
        ))}
      </div>
    </main>
  );
}
