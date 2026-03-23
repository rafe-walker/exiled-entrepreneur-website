'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllPosts } from './posts';
import { ArrowRight, Clock, Tag } from 'lucide-react';

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 max-w-6xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-6">
            The Blog
          </h1>
          <p className="text-xl text-[#a89a8a] max-w-2xl">
            Deep dives into empire building, AI automation, entrepreneurship strategy, and the
            real lessons from building multiple businesses.
          </p>
        </motion.div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="bg-[#2a2622]/40 border border-[#d4a853]/20 rounded-lg overflow-hidden hover:border-[#d4a853]/50 transition-all hover:shadow-lg"
            >
              {/* Featured Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-[#d4a853]/20 to-[#2a2622]/50 flex items-center justify-center border-b border-[#d4a853]/20">
                <p className="text-[#a89a8a] text-center px-4">
                  Featured image placeholder
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <Tag size={14} className="text-[#d4a853]" />
                  <span className="text-sm font-semibold text-[#d4a853]">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#f5f0e8] mb-3 leading-tight">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#a89a8a] text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-[#d4a853]/10 mb-4">
                  <div className="flex items-center gap-1 text-xs text-[#a89a8a]">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <div className="text-xs text-[#a89a8a]">{post.date}</div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#d4a853] font-semibold hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-[#2a2622]/30 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-[#f5f0e8] mb-4">
              New Essays Weekly
            </h2>
            <p className="text-[#a89a8a] text-lg mb-6">
              Get the latest insights on building an empire delivered to your inbox.
            </p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#d4a853] text-[#0a0a0f] font-bold rounded-lg hover:bg-[#e5c472] transition-colors"
            >
              Subscribe for Updates
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
