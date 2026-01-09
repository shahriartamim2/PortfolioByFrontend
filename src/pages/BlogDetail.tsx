import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import SEO from '../components/SEO';

const BlogDetail: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();

  const blog = blogPosts.find((b) => b.id === Number(blogId));

  useEffect(() => {
    if (!blog) {
      navigate('/blog');
    }
  }, [blog, navigate]);

  if (!blog) {
    return null;
  }

  return (
    <div>
      <SEO
        title={blog.title}
        description={blog.description}
        keywords={`${blog.category}, Textile Engineering, Blog, ${blog.title}`}
        ogImage={blog.image}
        ogType="article"
        canonicalUrl={`/blog/${blog.id}`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-20 pb-8 sm:py-20 md:py-24">
        <button
          onClick={() => navigate('/blog')}
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
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
