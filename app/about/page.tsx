'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#f5f0e8] mb-6">
            Joshua's Journey
          </h1>
          <p className="text-xl text-[#d4a853] font-light">
            From corporate to creator, building a multi-business empire with AI, determination,
            and calculated risk-taking.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        {/* The Layoff */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6">
            The Corporate Layoff: A New Beginning
          </h2>
          <div className="space-y-4 text-[#a89a8a] leading-relaxed">
            <p>
              Like many people in tech, I was laid off. It wasn't a surprise—it was a restructuring.
              But instead of panicking, I saw it as a sign. A sign that I'd been playing it safe for
              too long. That I'd built skills and knowledge that were worth far more in my own hands
              than in someone else's company.
            </p>
            <p>
              Within days of the severance hitting my account, I made a decision: I wasn't going to
              look for another corporate job. I was going to build. Not a startup in the traditional
              sense, but a real empire—multiple revenue streams, multiple assets, all interconnected
              and automated.
            </p>
          </div>
        </motion.div>

        {/* The Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6">
            The Vision: Multi-Platform Empire Building
          </h2>
          <div className="space-y-4 text-[#a89a8a] leading-relaxed">
            <p>
              This channel documents real empire building. Not theory. Not motivation. Real, tangible
              projects with real results. You'll see:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-[#f5f0e8]">Empire Reports:</strong> Real-time updates on
                revenue, growth, and the systems driving it all
              </li>
              <li>
                <strong className="text-[#f5f0e8]">AI Automation:</strong> How I built a 9-agent AI
                system and the exact frameworks that make it work
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Origin Stories:</strong> The businesses, the
                pivots, the failures that led to success
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Container House Build:</strong> Building a $40k
                off-grid home with sweat equity in Arizona
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Drone Operations:</strong> Scaling a drone
                business and the technology behind modern UAV companies
              </li>
              <li>
                <strong className="text-[#f5f0e8]">Entrepreneurship Strategy:</strong> The playbook
                for building sustainable, profitable businesses
              </li>
            </ul>
          </div>
        </motion.div>

        {/* The AI System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6">
            The CLAW Prime System: 9 Agents Running an Empire
          </h2>
          <div className="space-y-4 text-[#a89a8a] leading-relaxed">
            <p>
              One of the biggest advantages I've leveraged is AI automation. I didn't just use AI as
              a tool—I built an entire system around it. The CLAW Prime agent system runs most of
              the operational and strategic work across my businesses.
            </p>
            <p>
              This includes everything from content production and market analysis to customer
              management and financial optimization. It's not magic, but it is powerful. And it's
              something you can build too, at any scale.
            </p>
            <p>
              On this channel, I break down exactly how it works, what I learned building it, and
              why you should consider building your own version.
            </p>
          </div>
        </motion.div>

        {/* The Avatar Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6">
            The Avatar Concept: Content with Purpose
          </h2>
          <div className="space-y-4 text-[#a89a8a] leading-relaxed">
            <p>
              You might notice this channel has a unique avatar—a visual representation that serves
              as the face of the brand. This isn't vanity. It's strategy. The avatar allows me to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Scale content production without being bound to my face on camera</li>
              <li>Create a consistent, memorable brand presence across all platforms</li>
              <li>Maintain privacy while still building an engaged community</li>
              <li>Experiment with content styles and production approaches</li>
            </ul>
          </div>
        </motion.div>

        {/* The Veteran Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6">
            Veteran, Builder, Entrepreneur
          </h2>
          <div className="space-y-4 text-[#a89a8a] leading-relaxed">
            <p>
              My background gives me a unique perspective on discipline, systems, and execution.
              After years in the military, I learned that most people fail not because they lack
              vision, but because they lack the discipline and systems to execute it.
            </p>
            <p>
              That's where this channel comes in. I'm not here to motivate you. I'm here to show
              you the systems, the tools, and the strategies that actually work. The rest is up to
              you.
            </p>
          </div>
        </motion.div>

        {/* Why This Channel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#f5f0e8] mb-6">
            Why This Channel Exists
          </h2>
          <div className="space-y-4 text-[#a89a8a] leading-relaxed">
            <p>
              When I got laid off, I could have disappeared into the noise. Started a generic
              "entrepreneur motivation" channel or a corporate consulting firm. Instead, I decided
              to do something different.
            </p>
            <p>
              I decided to document the actual journey of building an empire in 2025 and beyond.
              Not the sanitized version. Not the highlight reel. The real thing. The wins, the
              losses, the pivots, the breakthroughs.
            </p>
            <p>
              Because if you're considering your own escape from the corporate world, or if you're
              already on the journey and need real guidance based on real results, this is the place.
              Let's build something worth building together.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="bg-[#2a2622]/50 border border-[#d4a853]/30 rounded-lg p-8 mt-20"
        >
          <h3 className="text-2xl font-bold text-[#f5f0e8] mb-4">
            Ready to Start Building?
          </h3>
          <p className="text-[#a89a8a] mb-6">
            Explore the latest insights, strategies, and real-world empire-building stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4a853] text-[#0a0a0f] font-bold rounded-lg hover:bg-[#e5c472] transition-colors flex items-center gap-2"
            >
              Watch on YouTube
              <ArrowRight size={18} />
            </a>
            <Link
              href="/blog"
              className="px-6 py-3 border-2 border-[#d4a853] text-[#d4a853] font-bold rounded-lg hover:bg-[#d4a853] hover:text-[#0a0a0f] transition-colors flex items-center gap-2"
            >
              Read the Blog
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
