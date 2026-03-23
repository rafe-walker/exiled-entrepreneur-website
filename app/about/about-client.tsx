'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Users } from 'lucide-react';

export default function AboutClient() {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-brand-cream mb-4">The Full Story</h1>
          <div className="accent-line" />
          <p className="text-xl text-brand-gold font-light max-w-2xl mx-auto">
            From military service to Amazon to empire building. The journey from corporate layoff to multi-business dominance.
          </p>
        </motion.div>
      </section>

      {/* Section 1: Joshua's Story */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        {/* Veteran Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">Veteran. Engineer. Builder.</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed">
            <p>
              My background is unconventional. After military service, I learned something most people never understand: discipline
              isn`t about punishment. It`s about systems. In the military, you don`t motivate your way through problems—you build
              processes that work even when you`re tired, scared, or unmotivated.
            </p>
            <p>
              That mindset became the foundation for everything I`ve built since. When I transitioned out, I carried that systems-first
              thinking with me. It shaped how I approached my next chapter: corporate America.
            </p>
          </div>
        </motion.div>

        {/* Amazon Years */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">Ten Years at Amazon: The Education</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed">
            <p>
              I spent a decade at Amazon. Not on the frontlines of their consumer business, but in the infrastructure side. I
              witnessed—and participated in—building systems that processed millions of transactions daily. I learned how to think
              at scale. How to optimize. How to make decisions with incomplete information.
            </p>
            <p>
              But I also learned something critical: the best engineers at Amazon weren`t the most brilliant theorists. They were the
              ones who understood that systems compound. A 10% efficiency gain on a high-volume process pays dividends. A small change
              in automation scales across millions of operations.
            </p>
            <p>
              I filed that away. I knew I would need those principles someday.
            </p>
          </div>
        </motion.div>

        {/* The Layoff Moment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">The Inflection Point: The Layoff</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed">
            <p>
              In 2024, like tens of thousands of others in tech, I was impacted by corporate restructuring. It wasn`t personal. It
              wasn`t a failure. It was a business decision made by a company optimizing for efficiency—the same efficiency principle
              I`d spent ten years learning.
            </p>
            <p>
              The severance package hit my account. For most people, that`s a trigger to update LinkedIn and start interviewing at the
              next big company. A lot of us did that. But I sat with it for a few days, and I realized something important: I had
              never been more confident, more skilled, or better positioned to bet on myself.
            </p>
            <p>
              I had the capital. I had the technical knowledge. I had the systems thinking. I had nothing to lose and a decade of
              corporate patterns to break.
            </p>
          </div>
        </motion.div>

        {/* The Pivot Decision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">The Decision: Build an Empire, Not a Job</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed">
            <p>
              Within days, I made my decision. I wasn`t going to look for another corporate job. I wasn`t going to start a typical
              startup and chase venture capital. I was going to build something different: a multi-business empire with diversified
              revenue streams, connected systems, and operational automation.
            </p>
            <p>
              The plan was clear:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-brand-muted">
              <li>Build businesses that create real value, not just hype</li>
              <li>Connect them through automation and shared systems</li>
              <li>Use AI not as a replacement for humans, but as a force multiplier</li>
              <li>Document the entire journey so others could learn from it</li>
            </ul>
            <p>
              That`s how Stormhaven Enterprises was born. Not as a holding company, but as a philosophy: empire building through
              systems, discipline, and calculated risk-taking.
            </p>
          </div>
        </motion.div>

        {/* Building Stormhaven */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">Building Stormhaven: From Zero to Multiple Revenue Streams</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed">
            <p>
              Stormhaven Enterprises is not a startup. It`s a multi-business operating system. Within the first year, I built and
              scaled:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-brand-muted">
              <li>SPA (Service Provider Automation) — SaaS platform for scaling service businesses</li>
              <li>CLM (Contract Lifecycle Management) — B2B software for enterprise contract management</li>
              <li>Flycensed — AI-powered FAA drone licensing platform</li>
              <li>Drone service operations and licensing consultancy</li>
              <li>Container house development and off-grid infrastructure</li>
              <li>YouTube content and education platform</li>
            </ul>
            <p>
              None of these businesses competes with the others. They feed each other. The drone licensing platform creates content
              for YouTube. The SaaS platforms generate predictable recurring revenue that funds the infrastructure builds. The
              container house becomes both a lifestyle and a narrative for the YouTube channel. The AI system runs the operational
              backbone of all of it.
            </p>
            <p>
              This is the principle of Stormhaven: interconnected systems that compound. A 10% gain here unlocks 20% opportunity
              there.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Why the AI Avatar */}
      <section id="ai-transparency" className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">The AI Avatar: Transparency and Trust</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed mb-8">
            <p>
              You might notice the YouTube channel features an AI avatar. This isn`t a gimmick, and it`s definitely not deception.
              It`s a deliberate choice in how we produce content, and I want to be completely transparent about why.
            </p>
            <p>
              <strong className="text-brand-gold">Here`s how the system works:</strong> I write the scripts and provide the direction.
              The avatar delivers the content for studio segments. For field footage—the real building, the actual work—we use raw
              video with voice-over narration. Everything is reviewed, edited, and approved by me before it goes live.
            </p>
            <p>
              The why matters more than the how. An AI avatar talking about plumbing disasters on a construction site feels disconnected
              from reality. Real footage with voice-over feels authentic. Field content shows the real work. Studio content focuses on
              strategy and education.
            </p>
            <p>
              This approach also solves a real problem: I can document the journey without being bound to recording equipment 24/7.
              I can focus on building, and the content production happens in parallel through the CLAW Prime system.
            </p>
          </div>

          {/* Transparency Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Studio Content',
                description: 'AI avatar for strategy, analysis, and educational breakdowns. Transparent, scripted, and focused.',
              },
              {
                title: 'Field Content',
                description: 'Raw footage from actual builds and operations. Real work, real results, real challenges.',
              },
              {
                title: 'Human Approval',
                description: 'Every piece of content is reviewed and approved by me before publishing. No exceptions.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-dark"
              >
                <h4 className="text-lg font-bold text-brand-cream mb-3">{item.title}</h4>
                <p className="text-brand-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 3: The Team */}
      <section id="the-team" className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">The Team: Joshua, Terri, and 9 AI Agents</h2>
          <p className="text-brand-muted leading-relaxed mb-12">
            Stormhaven doesn`t run on one person. It runs on a human team supported by intelligent automation.
          </p>

          {/* Human Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: 'Joshua',
                role: 'The Builder',
                description:
                  'Visionary, systems architect, and founder. Makes strategic decisions, approves all content, and handles the high-leverage work.',
              },
              {
                name: 'Terri',
                role: 'The Voice',
                description:
                  'Handles public-facing communications, pitch work, and relationship management. The human face when a human face is needed.',
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card-dark flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-gold/20 to-brand-amber/20 rounded-full mb-4 flex items-center justify-center border border-brand-border">
                  <div className="text-3xl font-bold text-brand-gold">{person.name.charAt(0)}</div>
                </div>
                <h4 className="text-xl font-bold text-brand-cream mb-2">{person.name}</h4>
                <p className="text-sm font-semibold text-brand-gold mb-3">{person.role}</p>
                <p className="text-brand-muted text-sm">{person.description}</p>
              </motion.div>
            ))}
          </div>

          {/* AI Agents */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brand-cream mb-6">The 9 AI Agents (CLAW Prime)</h3>
            <p className="text-brand-muted mb-8">
              These agents automate the operational and strategic backbone of Stormhaven. Each has a specific role in the system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: 'DIRECTOR',
                  role: 'Orchestrates the entire content pipeline',
                },
                {
                  name: 'SCOUT',
                  role: 'Reads every comment, monitors trends, and identifies opportunities',
                },
                {
                  name: 'COURIER',
                  role: 'Handles distribution and scheduling across all platforms',
                },
                {
                  name: 'HERALD',
                  role: 'Writes scripts, copy, and content frameworks',
                },
                {
                  name: 'ANALYST',
                  role: 'Tracks metrics, generates reports, and surfaces insights',
                },
                {
                  name: 'VALET',
                  role: 'Manages infrastructure and deployments across all systems',
                },
                {
                  name: 'ARCHIVIST',
                  role: 'Organizes, indexes, and catalogs all content and knowledge',
                },
                {
                  name: 'SENTINEL',
                  role: 'Monitors quality and ensures brand consistency',
                },
                {
                  name: 'ORACLE',
                  role: 'Strategic planning, research, and competitive analysis',
                },
              ].map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + index * 0.05 }}
                  className="bg-brand-card border border-brand-border rounded-lg p-4 hover:border-brand-gold/30 transition-colors"
                >
                  <h4 className="font-bold text-brand-gold text-sm mb-2">{agent.name}</h4>
                  <p className="text-brand-muted text-xs">{agent.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Open Claw IA Deep Dive */}
      <section id="open-claw" className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">Open Claw IA: The System That Runs Everything</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed mb-12">
            <p>
              Open Claw IA isn`t just a collection of tools. It`s an operating system built specifically to run Stormhaven. The nine
              agents work together in a coordinated system where each agent`s output becomes another agent`s input.
            </p>
            <p>
              <strong className="text-brand-gold">Here`s how the architecture works:</strong>
            </p>
          </div>

          {/* System Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                phase: 'Input Phase',
                description:
                  'SCOUT monitors trends and comments. ORACLE researches strategic opportunities. Both feed signals into the system.',
              },
              {
                phase: 'Planning Phase',
                description: 'DIRECTOR and HERALD work together to create content outlines, scripts, and distribution strategies.',
              },
              {
                phase: 'Production Phase',
                description:
                  'Scripts are rendered by the AI avatar. Video is edited. Graphics are generated. All production happens in parallel.',
              },
              {
                phase: 'Distribution Phase',
                description:
                  'COURIER publishes across YouTube, Twitter, LinkedIn, email, and other channels on a coordinated schedule.',
              },
              {
                phase: 'Analysis Phase',
                description:
                  'ANALYST tracks performance, identifies what resonates, and reports back to the planning cycle. Feedback loop.',
              },
              {
                phase: 'Infrastructure Phase',
                description:
                  'VALET ensures all systems stay running, deployments are handled, and the technical backbone stays strong.',
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="card-dark"
              >
                <h4 className="text-lg font-bold text-brand-gold mb-3">{phase.phase}</h4>
                <p className="text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Cost and Philosophy */}
          <div className="space-y-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="bg-gradient-to-r from-brand-gold/10 to-brand-amber/10 border border-brand-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-brand-cream mb-4">Cost Breakdown</h3>
              <p className="text-brand-muted mb-6">
                Open Claw IA runs on a lean budget. Here`s the monthly operating cost:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { category: 'Claude API', cost: '$120' },
                  { category: 'GPT-4 Turbo', cost: '$80' },
                  { category: 'Render', cost: '$32' },
                  { category: 'Database', cost: '$10' },
                  { category: 'Storage', cost: '$5' },
                  { category: 'Misc', cost: '$1' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-brand-gold font-bold text-lg mb-1">{item.cost}</p>
                    <p className="text-brand-muted text-xs">{item.category}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-brand-border">
                <p className="text-brand-cream font-bold text-lg">
                  Total: <span className="text-brand-gold">$248/month</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="card-dark"
            >
              <h3 className="text-2xl font-bold text-brand-cream mb-4">Human-in-the-Loop Philosophy</h3>
              <p className="text-brand-muted mb-4">
                This is critical: Open Claw IA doesn`t make decisions. I do. The AI handles the work. I handle the judgment.
              </p>
              <ul className="space-y-3 text-brand-muted text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold mt-1">•</span>
                  <span>Every piece of content is written by AI, edited by me, and approved by me before publishing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold mt-1">•</span>
                  <span>Every strategic decision is informed by agent analysis, but made by me with my judgment and values.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold font-bold mt-1">•</span>
                  <span>Every direction change comes from me. The agents execute, but they don`t steer.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Section 5: The Vision */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.88 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">The Five-Year Vision</h2>
          <div className="space-y-4 text-brand-muted leading-relaxed mb-12">
            <p>
              This isn`t a short game. Stormhaven is built to scale over five years into a multi-million-dollar operating system. Here`s
              where we`re headed:
            </p>
            <ul className="space-y-4 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-lg mt-1">1.</span>
                <div>
                  <p className="font-semibold text-brand-cream">Businesses in Profitability at Scale</p>
                  <p className="text-sm">SPA, CLM, and Flycensed generate $50k+ MRR each with minimal operational overhead.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-lg mt-1">2.</span>
                <div>
                  <p className="font-semibold text-brand-cream">YouTube as a Content and Education Platform</p>
                  <p className="text-sm">100k+ subscribers generating revenue through sponsorships, affiliate links, and premium courses.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-lg mt-1">3.</span>
                <div>
                  <p className="font-semibold text-brand-cream">Infrastructure Assets</p>
                  <p className="text-sm">
                    The container house becomes a model for off-grid living. Drone operations expand to include fleet management for
                    larger clients.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-lg mt-1">4.</span>
                <div>
                  <p className="font-semibold text-brand-cream">Community Building</p>
                  <p className="text-sm">A community of builders, entrepreneurs, and systems thinkers learning and building together.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold font-bold text-lg mt-1">5.</span>
                <div>
                  <p className="font-semibold text-brand-cream">Open Claw IA Productization</p>
                  <p className="text-sm">Open Claw IA becomes available as a product for other entrepreneurs to build their own AI agent systems.</p>
                </div>
              </li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.92 }}
            className="bg-gradient-to-r from-brand-gold/10 to-brand-amber/10 border border-brand-border rounded-lg p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-brand-cream mb-4">Why This Matters</h3>
            <p className="text-brand-muted mb-4">
              This isn`t about getting rich quick. This is about proving a model: that a disciplined engineer with systems thinking,
              capital, and a willingness to build can create sustainable wealth and meaningful impact without selling out to a big
              company or begging for venture capital.
            </p>
            <p className="text-brand-muted">
              If I can do it, so can you. That`s why I document everything. So you can learn, replicate, and build your own empire.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-brand-cream mb-6">You`re Part of This</h2>
          <p className="text-brand-muted mb-8 max-w-2xl mx-auto">
            This channel isn`t content about empire building. It`s a record of empire building happening in real time. Subscribe, follow
            along, and build with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-gold text-brand-dark font-bold rounded-lg hover:bg-brand-gold-light transition-colors flex items-center justify-center gap-2"
            >
              Watch on YouTube
              <ArrowRight size={18} />
            </a>
            <Link
              href="/episodes"
              className="px-6 py-3 border-2 border-brand-gold text-brand-gold font-bold rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              Watch Episodes
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/resources"
              className="px-6 py-3 border-2 border-brand-muted text-brand-muted font-bold rounded-lg hover:bg-brand-muted hover:text-brand-dark transition-colors flex items-center justify-center gap-2"
            >
              Get Resources
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
