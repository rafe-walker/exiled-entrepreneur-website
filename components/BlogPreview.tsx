'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
}

const BlogPreview: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'why-building-empire-after-layoff',
      category: 'ORIGIN STORY',
      title: "Why I'm Building an Empire After Getting Laid Off",
      excerpt:
        'The story of how a decade at Amazon ended overnight — and what happened next.',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      slug: 'how-i-built-9-agent-ai-system',
      category: 'AI AUTOMATION',
      title: 'How I Built a 9-Agent AI System to Run My Businesses',
      excerpt:
        'A complete breakdown of the AI system that manages content, analytics, and operations across 7 businesses.',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8978c01be9e5b57e8?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      slug: 'container-house-project-building-off-grid',
      category: 'CONTAINER HOUSE',
      title: 'The Container House Project: Building Off-Grid in Arizona',
      excerpt:
        'From raw desert land to a livable container home. Every step, every mistake, every lesson.',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    },
  ];

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'ORIGIN STORY':
        return 'bg-brand-violet/20 text-brand-violet border-brand-violet/40';
      case 'AI AUTOMATION':
        return 'bg-brand-green/20 text-brand-green border-brand-green/40';
      case 'CONTAINER HOUSE':
        return 'bg-brand-amber/20 text-brand-amber border-brand-amber/40';
      default:
        return 'bg-brand-gold/20 text-brand-gold border-brand-gold/40';
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-cream mb-3">
            From the Blog
          </h2>
          <p className="text-brand-muted text-lg">
            Insights, lessons, and systems that power the empire.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="blog-card group flex flex-col h-full rounded-xl overflow-hidden border border-brand-border/30 hover:border-brand-gold/40 transition-colors duration-300 bg-brand-card/20 backdrop-blur-sm"
            >
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                className="relative aspect-video overflow-hidden bg-gradient-to-br from-brand-gold/10 to-brand-violet/10"
              >
                {/* Placeholder Image Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/20 to-brand-dark/60" />

                {/* Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-8 h-8 text-brand-gold" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Card Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col flex-grow p-6"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className={`category-badge inline-block px-3 py-1 rounded-full text-xs font-bold border transition-colors duration-300 ${getCategoryColor(
                      post.category
                    )}`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.25 + index * 0.1 }}
                  className="text-brand-cream font-bold text-xl leading-snug mb-3 group-hover:text-brand-gold-light transition-colors duration-300"
                >
                  {post.title}
                </motion.h3>

                {/* Excerpt */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-brand-muted text-sm leading-relaxed mb-4 flex-grow"
                >
                  {post.excerpt}
                </motion.p>

                {/* Read Time & Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.35 + index * 0.1 }}
                  className="flex items-center justify-between pt-4 border-t border-brand-border/20"
                >
                  <span className="text-brand-muted text-xs font-medium">
                    {post.readTime}
                  </span>
                  <motion.a
                    href={`/blog/${post.slug}`}
                    className="text-brand-gold hover:text-brand-gold-light font-semibold text-sm inline-flex items-center gap-1.5 transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    Read More
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center pt-6 border-t border-brand-border/20"
        >
          <motion.a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 text-brand-gold hover:text-brand-gold-light font-bold text-lg transition-colors duration-300"
            whileHover={{ x: 4 }}
          >
            Explore All Posts
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        .blog-card {
          background: linear-gradient(
            135deg,
            rgba(214, 188, 127, 0.03) 0%,
            rgba(139, 92, 246, 0.02) 100%
          );
        }

        .blog-card:hover {
          background: linear-gradient(
            135deg,
            rgba(214, 188, 127, 0.06) 0%,
            rgba(139, 92, 246, 0.04) 100%
          );
        }

        .category-badge {
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;
