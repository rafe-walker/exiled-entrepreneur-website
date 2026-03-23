'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Tag, ArrowLeft } from 'lucide-react';
import type { BlogPost } from '../posts';

interface ClientBlogPostProps {
  post: BlogPost;
  allPosts: BlogPost[];
  slug: string;
}

export default function ClientBlogPost({ post, allPosts, slug }: ClientBlogPostProps) {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 py-20 pt-32">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#d4a853] hover:text-[#e5c472] transition-colors font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          {/* Category */}
          <div className="flex items-center gap-2 mb-4">
            <Tag size={16} className="text-[#d4a853]" />
            <span className="text-sm font-semibold text-[#d4a853]">{post.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-[#a89a8a] border-b border-[#d4a853]/20 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#d4a853]/20 rounded-full flex items-center justify-center text-[#d4a853] font-bold">
                J
              </div>
              <span>Joshua</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </div>
            <div>{post.date}</div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="w-full h-96 bg-gradient-to-br from-[#d4a853]/20 to-[#2a2622]/50 rounded-lg flex items-center justify-center border border-[#d4a853]/20">
            <p className="text-[#a89a8a] text-center">Featured image placeholder</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="prose prose-invert max-w-none"
          style={{
            '--tw-prose-body': 'rgb(168, 154, 138)',
            '--tw-prose-headings': 'rgb(245, 240, 232)',
            '--tw-prose-links': 'rgb(212, 168, 83)',
            '--tw-prose-bold': 'rgb(245, 240, 232)',
            '--tw-prose-code': 'rgb(212, 168, 83)',
          } as React.CSSProperties}
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-[#a89a8a] leading-relaxed space-y-6"
          />
        </motion.div>

        {/* Content Styling */}
        <style>{`
          article h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #f5f0e8;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          article h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f5f0e8;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
          }

          article p {
            color: #a89a8a;
            margin-bottom: 1.5rem;
            line-height: 1.8;
          }

          article ul {
            margin-left: 1.5rem;
            margin-bottom: 1.5rem;
            list-style-type: disc;
          }

          article ul li {
            color: #a89a8a;
            margin-bottom: 0.5rem;
            line-height: 1.8;
          }

          article strong {
            color: #f5f0e8;
            font-weight: 700;
          }

          article a {
            color: #d4a853;
            text-decoration: underline;
          }

          article a:hover {
            color: #e5c472;
          }
        `}</style>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 pt-8 border-t border-[#d4a853]/20"
        >
          <div className="bg-[#2a2622]/40 border border-[#d4a853]/20 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[#d4a853]/20 rounded-full flex items-center justify-center text-[#d4a853] text-2xl font-bold flex-shrink-0">
                J
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#f5f0e8] mb-2">Joshua</h3>
                <p className="text-[#a89a8a] leading-relaxed">
                  Founder of The Exiled Entrepreneur. After being laid off from the corporate world,
                  Joshua built a multi-business empire using AI automation, creative problem-solving,
                  and systematic thinking. He documents the entire journey on this channel.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 pt-16 border-t border-[#d4a853]/20"
        >
          <h2 className="text-3xl font-bold text-[#f5f0e8] mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allPosts.slice(0, 2).map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group bg-[#2a2622]/40 border border-[#d4a853]/20 rounded-lg p-6 hover:border-[#d4a853]/50 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Tag size={14} className="text-[#d4a853]" />
                  <span className="text-xs font-semibold text-[#d4a853]">
                    {relatedPost.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#f5f0e8] mb-2 group-hover:text-[#d4a853] transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-[#a89a8a] mb-4">{relatedPost.excerpt}</p>
                <div className="text-xs text-[#a89a8a]">{relatedPost.date}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 bg-[#d4a853]/10 border border-[#d4a853]/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-[#f5f0e8] mb-2">
            Enjoyed this article?
          </h3>
          <p className="text-[#a89a8a] mb-6">
            Subscribe to get more insights on building an empire delivered to your inbox.
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#d4a853] text-[#0a0a0f] font-bold rounded-lg hover:bg-[#e5c472] transition-colors"
          >
            Subscribe on YouTube
          </a>
        </motion.div>
      </article>
    </div>
  );
}
