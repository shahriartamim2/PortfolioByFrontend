import React, { useState } from 'react';

// Type definitions
interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and Tailwind CSS",
    description: "Learn how to build modern, responsive web applications using React and Tailwind CSS. This comprehensive guide covers everything from setup to deployment.",
    date: "Oct 8, 2025",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    category: "Development"
  },
  {
    id: 2,
    title: "The Future of Web Design",
    description: "Explore emerging trends in web design including glassmorphism, micro-interactions, and immersive 3D experiences that are shaping the future.",
    date: "Oct 5, 2025",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    category: "Design"
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    description: "Discover best practices for architecting scalable applications that can handle millions of users while maintaining performance and reliability.",
    date: "Oct 1, 2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    category: "Architecture"
  },
  {
    id: 4,
    title: "Mastering CSS Grid and Flexbox",
    description: "Deep dive into modern CSS layout techniques. Learn when to use Grid vs Flexbox and how to create complex responsive layouts with ease.",
    date: "Sep 28, 2025",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=500&fit=crop",
    category: "CSS"
  },
  {
    id: 5,
    title: "State Management in Modern React",
    description: "Compare different state management solutions including Context API, Redux, and Zustand. Find the right tool for your project needs.",
    date: "Sep 25, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    category: "React"
  },
  {
    id: 6,
    title: "API Design Best Practices",
    description: "Learn how to design RESTful APIs that are intuitive, maintainable, and scalable. Includes real-world examples and common pitfalls to avoid.",
    date: "Sep 20, 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "Backend"
  }
];

// Blog Card Component
interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article
      onClick={() => onClick(post)}
      className="group cursor-pointer bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-98 transform"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
          <span className="px-2 sm:px-3 py-1 bg-black/60 backdrop-blur-sm text-white/90 text-xs rounded-full border border-white/20">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6">
        <time className="text-xs sm:text-sm text-white/40">{post.date}</time>
        <h2 className="text-lg sm:text-xl font-semibold text-white mt-2 mb-2 sm:mb-3 group-hover:text-white/90 transition-colors leading-snug line-clamp-2">
          {post.title}
        </h2>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
          {post.description}
        </p>

        <div className="mt-3 sm:mt-4 flex items-center text-white/50 group-hover:text-white/80 transition-colors">
          <span className="text-xs sm:text-sm font-medium">Read more</span>
          <span className="ml-2 text-sm group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </article>
  );
};

// Blog Detail Component
interface BlogDetailProps {
  blog: BlogPost;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="hidden md:block fixed left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      <div className="hidden md:block fixed right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-20">
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
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const handleBlogClick = (post: BlogPost): void => {
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
    <div className="min-h-screen bg-black">
      <div className="hidden md:block fixed left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      <div className="hidden md:block fixed right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
        <header className="mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">Blog</h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl">Thoughts, ideas, and insights</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {blogPosts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} onClick={handleBlogClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;