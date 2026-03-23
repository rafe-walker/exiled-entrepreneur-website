'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from './posts';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = ['All', ...getAllCategories()];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? allPosts
    : allPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 max-w-6xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="accent-line"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-cream mb-6">
            The Blog
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl">
            Deep dives into empire building, AI automation, entrepreneurship strategy, and the
            real lessons from building multiple businesses from scratch.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-brand-gold text-brand-dark'
                  : 'bg-brand-card border border-brand-border text-brand-muted hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="blog-grid">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="blog-card"
              >
                {/* Featured Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-brand-gold/20 to-brand-card/50 flex items-center justify-center border-b border-brand-border rounded-t-lg">
                  <p className="text-brand-muted text-center px-4 text-sm">
                    Featured content
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="category-badge mb-3">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-brand-cream mb-3 leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-brand-muted text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-brand-border/30 mb-4">
                    <div className="flex items-center gap-1 text-xs text-brand-muted">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                    <div className="text-xs text-brand-dim">{post.date}</div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-gold-light hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-brand-muted text-lg">
              No articles found in this category.
            </p>
          </motion.div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-brand-card/30 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-brand-cream mb-4">
              New Essays Weekly
            </h2>
            <p className="text-brand-muted text-lg mb-6">
              Get the latest insights on building an empire delivered to your inbox and YouTube.
            </p>
            <a
              href="https://youtube.com/@theexiledentrepreneur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 btn-glow"
            >
              Subscribe on YouTube
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
