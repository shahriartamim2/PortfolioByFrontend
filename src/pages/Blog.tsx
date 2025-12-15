import React, { useState } from 'react';
import ContentCard, { ContentItem } from '../components/ContentCard';
import { blogPosts } from '../data/blogData';

// Blog Detail Component
interface BlogDetailProps {
  blog: ContentItem;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-8 sm:py-20 md:py-24">
        <button
          onClick={onBack}
          className="text-white/60 hover:text-white transition-colors mb-6 sm:mb-8 flex items-center gap-2 group active:scale-95 transform"
        >
          <span className="group-hover:-translate-x-1 transition-transform text-lg sm:text-base">←</span>
          <span className="text-sm sm:text-base">Back to Blogs</span>
        </button>

        <article className="space-y-6 sm:space-y-8">
          <header>
            <time className="text-xs sm:text-sm text-white/40">{blog.date}</time>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 leading-tight">
              {blog.title}
            </h1>
            <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs sm:text-sm rounded-full">
              {blog.category}
            </span>
          </header>

          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 sm:h-72 md:h-96 object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              {blog.description}
            </p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

// Main Blog Page Component
const Blog: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<ContentItem | null>(null);

  const handleBlogClick = (post: ContentItem): void => {
    setSelectedBlog(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = (): void => {
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} onBack={handleBackClick} />;
  }

  return (
    <div className="text-white">
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