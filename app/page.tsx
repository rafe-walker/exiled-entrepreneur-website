import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import StoryCapture from "@/components/StoryCapture";
import EmpireExplorer from "@/components/EmpireExplorer";
import Engine from "@/components/Engine";
import VideoHub from "@/components/VideoHub";
import ProgressTracker from "@/components/ProgressTracker";
import BlogPreview from "@/components/BlogPreview";
import FooterHub from "@/components/FooterHub";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Cinematic Hero — Full-screen video bg + dual CTAs + stats bar */}
      <Hero />

      {/* Section 2: Proof Bar — Thin authority strip with counters */}
      <ProofBar />

      {/* Section 3: The Story + Email Capture — 3-beat timeline + lead magnet */}
      <StoryCapture />

      {/* Section 4: The Empire Explorer — Tabbed: Content Pillars | Businesses */}
      <EmpireExplorer />

      {/* Section 5: The Engine — Compact Open Claw IA teaser */}
      <Engine />

      {/* Section 6: The Binge — Tabbed: Start Here | Latest Dispatches */}
      <VideoHub />

      {/* Section 7: Empire in Motion — Live status cards */}
      <ProgressTracker />

      {/* Section 8A: From the Blog — 3 featured posts */}
      <BlogPreview />

      {/* Section 8B: Footer Hub — Newsletter CTA + FAQ Accordion */}
      <FooterHub />
    </>
  );
}
