import React, { useState } from 'react';
import ContentCard, { ContentItem } from '../components/ContentCard';

// Sample blog data
const blogPosts: ContentItem[] = [
  {
    id: 1,
    title: "Mechanical Recycling of Garments Waste into Fiber",
    description: "Exploring the process of converting textile waste back into usable fibers, reducing environmental impact and promoting a circular economy in the fashion industry.",
    date: "Dec 10, 2025",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&h=500&fit=crop",
    category: "Sustainability"
  },
  {
    id: 2,
    title: "Automation in Textile Sector",
    description: "How robotics and automated systems are revolutionizing textile manufacturing, from spinning to garment construction, increasing efficiency and precision.",
    date: "Dec 5, 2025",
    image: "https://images.unsplash.com/photo-1636986056375-184676d8ca14?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology"
  },
  {
    id: 3,
    title: "AI in Textile",
    description: "The role of Artificial Intelligence in quality control, trend forecasting, and supply chain optimization within the textile industry.",
    date: "Nov 28, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
    category: "Innovation"
  },
  {
    id: 4,
    title: "Sustainable Dyeing Techniques",
    description: "Investigating waterless dyeing technologies and natural dyes to minimize the environmental footprint of textile coloration processes.",
    date: "Nov 15, 2025",
    image: "https://images.unsplash.com/photo-1655122878062-a9e885391a1b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dGlsZSUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
    category: "Sustainability"
  },
  {
    id: 5,
    title: "Smart Fabrics and Wearables",
    description: "The integration of electronics into textiles to create smart fabrics that can monitor health, change color, or harvest energy.",
    date: "Nov 10, 2025",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=500&fit=crop",
    category: "Future Tech"
  },
  {
    id: 6,
    title: "The Future of Fast Fashion",
    description: "Analyzing the shift towards slow fashion and how consumer behavior and regulations are reshaping the global textile market.",
    date: "Nov 1, 2025",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop",
    category: "Industry Trends"
  }
];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 pt-20 pb-16 sm:py-20 md:py-24">
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