'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Tag, ArrowLeft, Play } from 'lucide-react';
import type { BlogPost } from '../posts';

interface ClientBlogPostProps {
  post: BlogPost;
  allPosts: BlogPost[];
  slug: string;
}

const keyTakeaways: Record<string, string[]> = {
  'why-building-empire-after-layoff': [
    'Corporate loyalty isn\'t reciprocal—a layoff can happen anytime, regardless of your contribution',
    'Building an empire means owning multiple revenue streams instead of depending on one salary',
    'The military mindset of calculated risk-taking and adaptation translates directly to entrepreneurship',
    'Diversification across businesses protects you from market downturns and industry shifts',
  ],
  'how-i-built-9-agent-ai-system': [
    'AI agents can handle decision-making work, not just task execution, when properly designed',
    'A 9-agent orchestrated system running on $248/month can replace 70+ hours of manual work per week',
    'Human-in-the-loop architecture is essential—agents augment decisions, they don\'t replace judgment',
    'Start with one specialized agent, prove it saves time, then expand the system incrementally',
  ],
  'container-house-project-building-off-grid': [
    'A full off-grid container home can be built for $42.5k—a 90% reduction vs traditional homes',
    'Eliminating the mortgage eliminates the anchor that forces you back to corporate work',
    'Off-grid systems (solar, water, power) are now affordable and surprisingly reliable with proper sizing',
    'Building your own shelter teaches systems thinking that transfers to every business you build',
  ],
};

export default function ClientBlogPost({ post, allPosts, slug }: ClientBlogPostProps) {
  const takeaways = keyTakeaways[slug] || [
    'This article offers valuable insights for your entrepreneurial journey.',
    'Consider how these principles apply to your specific situation.',
    'Take action on what resonates most with you.',
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
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
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors font-semibold"
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
          <div className="category-badge mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-brand-cream mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-brand-muted border-b border-brand-border pb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold font-bold">
                J
              </div>
              <span>{post.author}</span>
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
          <div className="w-full h-96 bg-gradient-to-br from-brand-gold/20 to-brand-card/50 rounded-lg flex items-center justify-center border border-brand-border">
            <p className="text-brand-muted text-center">Featured content</p>
          </div>
        </motion.div>

        {/* YouTube Video Placeholder */}
        {post.youtubeId && post.youtubeId !== 'coming-soon' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="mb-12"
          >
            <div className="relative w-full aspect-video bg-brand-card rounded-lg border border-brand-border flex items-center justify-center overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${post.youtubeId}`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        )}

        {post.youtubeId === 'coming-soon' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="mb-12"
          >
            <div className="relative w-full aspect-video bg-gradient-to-br from-brand-gold/10 to-brand-card rounded-lg border border-brand-border flex flex-col items-center justify-center">
              <Play size={64} className="text-brand-gold/40 mb-4" />
              <p className="text-brand-muted text-lg font-semibold">Video Coming Soon</p>
              <p className="text-brand-dim text-sm">YouTube video for this article is in production</p>
            </div>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="article-content mb-12"
        >
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Key Takeaways Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 pt-12 border-t border-brand-border"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">Key Takeaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {takeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-brand-card/40 border border-brand-border rounded-lg p-4"
              >
                <p className="text-brand-cream leading-relaxed">{takeaway}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-16 pt-8 border-t border-brand-border"
        >
          <div className="bg-brand-card/40 border border-brand-border rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold text-2xl font-bold flex-shrink-0">
                J
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-cream mb-2">Joshua</h3>
                <p className="text-brand-muted leading-relaxed">
                  Founder of The Exiled Entrepreneur. After 10 years at Amazon and a strategic layoff,
                  Joshua built a multi-business empire using AI automation, creative problem-solving,
                  and systematic thinking. He documents the entire journey—the real numbers, the
                  failures, and the breakthroughs—on this platform.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-16 pt-16 border-t border-brand-border"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allPosts.slice(0, 2).map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group blog-card"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Tag size={14} className="text-brand-gold" />
                  <span className="text-xs font-semibold text-brand-gold uppercase">
                    {relatedPost.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-cream mb-2 group-hover:text-brand-gold transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-brand-muted mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                <div className="text-xs text-brand-dim">{relatedPost.date}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 cta-banner text-center"
        >
          <h3 className="text-2xl font-bold text-brand-cream mb-2">
            Enjoyed This Article?
          </h3>
          <p className="text-brand-muted mb-6">
            Subscribe to get more insights on building an empire, AI automation, and real estate
            delivered to your inbox. Plus early access to new video content.
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
      </article>
    </div>
  );
}
