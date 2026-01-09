import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContentCard, { ContentItem } from '../components/ContentCard';
import { blogPosts } from '../data/blogData';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  const handleBlogClick = (post: ContentItem): void => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="text-white">
      <SEO
        title="Blog"
        description="Read insights and articles about textile engineering, sustainable manufacturing, AI in textiles, smart fabrics, and the future of fashion industry by Abdullah Noman."
        keywords="Textile Engineering Blog, Sustainable Textiles, AI in Textiles, Smart Fabrics, Fashion Technology, Industry Insights"
        canonicalUrl="/blog"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 pt-32 pb-16 sm:py-20 md:py-24">
        <header className="mb-8 sm:mb-12 md:mb-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">Blog</h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl">Insights on Textile Engineering & Technology</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {blogPosts.map((post: ContentItem) => (
            <ContentCard key={post.id} item={post} onClick={handleBlogClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;