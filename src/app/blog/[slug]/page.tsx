"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { useParams } from "next/navigation";

const postsData: Record<
  string,
  { title: string; date: string; readTime: string; category: string; content: string[] }
> = {
  "why-we-built-npi": {
    title: "Why We Built NPI: A Letter from the Founders",
    date: "February 1, 2026",
    readTime: "5 min read",
    category: "Founders",
    content: [
      "If you work in payments, you\u2019ve probably joined a few industry groups, Slack channels, or LinkedIn communities. And you\u2019ve probably left most of them after a few weeks. The signal-to-noise ratio is terrible. Conversations are dominated by vendor pitches, job postings, and people who don\u2019t actually work in payments day-to-day.",
      "We built NPI because we wanted something different. We wanted a community where every member has real payments experience. Where conversations are focused, relevant, and worth your time. Where you can ask a question about interchange optimization or chargeback dispute strategies and get an answer from someone who actually deals with those problems.",
      "That\u2019s why membership is application-based. We review every single application. We look for real experience\u20142 or more years working directly in payments. We want product managers, risk analysts, compliance officers, operations specialists, and engineers who touch payments rails every day.",
      "But we also know that the next generation of payments professionals matters. That\u2019s why we created the Student & Early-Career branch. It\u2019s a separate track with its own benefits, designed for people who are building toward a payments career but aren\u2019t there yet. We\u2019re honest about the distinction because we think that honesty serves everyone better.",
      "We\u2019re starting small and intentional. A few intimate events in Atlanta. A growing community of vetted professionals. And a roadmap that includes courses and certifications built by practitioners, not academics who\u2019ve never processed a transaction.",
      "If this resonates with you, we\u2019d love to hear from you. Apply for membership and let\u2019s build something worth being part of.",
    ],
  },
  "state-of-real-time-payments": {
    title: "The State of Real-Time Payments in the U.S.: RTP vs. FedNow",
    date: "January 25, 2026",
    readTime: "8 min read",
    category: "Industry",
    content: [
      "Real-time payments have been a hot topic since The Clearing House launched the RTP network in 2017. Then the Federal Reserve entered the game with FedNow in July 2023. Now, more than two years later, where do things actually stand?",
      "The short answer: adoption is growing, but unevenly. Large banks have connected to one or both networks, but most community banks and credit unions are still on the sidelines. The use cases that are driving volume are narrower than the hype suggested\u2014payroll, bill pay, and account-to-account transfers are leading, while consumer point-of-sale use cases remain largely theoretical.",
      "For product teams at banks and fintechs, the key questions are practical: Which network should we prioritize? What does the integration actually look like? How do we handle the fraud implications of irrevocable, instant settlement?",
      "RTP has the first-mover advantage with broader bank connectivity. FedNow has the backing of the Federal Reserve and, critically, the ability to reach every Fed-member bank through existing infrastructure. Neither has \u201cwon\u201d yet, and it\u2019s increasingly likely that both will coexist for the foreseeable future.",
      "The fraud angle is worth a deep discussion on its own. Real-time payments mean real-time fraud\u2014and the traditional chargeback and dispute mechanisms don\u2019t apply. Banks are investing heavily in pre-transaction screening, behavioral analytics, and confirmation of payee solutions.",
      "We\u2019ll be diving deeper into this topic at our upcoming ACH Deep Dive event, where we\u2019ll cover RTP, FedNow, and Same-Day ACH in a technical session designed for practitioners.",
    ],
  },
  "payments-career-guide-2026": {
    title: "Breaking Into Payments: A Career Guide for 2026",
    date: "January 18, 2026",
    readTime: "6 min read",
    category: "Careers",
    content: [
      "Payments is one of the most in-demand specializations in financial services, and it\u2019s only growing. But breaking in can feel opaque if you don\u2019t know what to look for. Here\u2019s what hiring managers in payments actually want to see.",
      "First, understand the landscape. Payments spans card networks (Visa, Mastercard), processors (FIS, Fiserv, Global Payments), banks (both issuing and acquiring sides), fintechs (Stripe, Square, Adyen), and a growing ecosystem of infrastructure players. Each has different roles and skill requirements.",
      "The roles that are hardest to fill right now: payments product managers, fraud/risk analysts, and compliance specialists with payments-specific knowledge. Engineering roles that touch payment processing, settlement, and reconciliation are also in high demand.",
      "What sets candidates apart: understanding of the payments value chain (authorization, clearing, settlement), familiarity with regulations (PCI DSS, Reg E, BSA/AML), and the ability to speak both business and technical languages. If you\u2019re a student, start learning these concepts now.",
      "Certifications like the ETA CPP (Certified Payments Professional) can help, but they\u2019re not required for entry-level roles. What matters more is demonstrated interest: read industry publications, attend events, and build a network of practitioners who can mentor you.",
      "That\u2019s exactly what NPI\u2019s Student & Early-Career branch is designed to provide. You\u2019ll get access to practitioners, content, and events that help you build the knowledge and connections you need to land your first payments role.",
    ],
  },
  "fraud-trends-q1-2026": {
    title: "Fraud Trends to Watch in Q1 2026",
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Risk & Fraud",
    content: [
      "The fraud landscape in payments continues to evolve at an alarming pace. Here are the trends that risk and compliance teams should have on their radar heading into Q1 2026.",
      "Synthetic identity fraud remains the fastest-growing fraud type in the U.S. Fraudsters are using AI-generated identities that combine real and fabricated data to bypass KYC checks. The challenge: these identities can build credit histories over months or years before \u201cbusting out\u201d with large losses.",
      "First-party fraud\u2014where legitimate customers dispute valid transactions\u2014is also evolving. The rise of \u201cfriendly fraud\u201d tutorials on social media is making this harder to combat. Visa\u2019s Compelling Evidence 3.0 rules are helping, but merchants and issuers need better collaboration.",
      "Real-time payment fraud is the newest frontier. With instant, irrevocable transactions, the traditional dispute and chargeback mechanisms don\u2019t apply. Banks are investing in pre-transaction behavioral analytics, device fingerprinting, and confirmation of payee solutions to catch fraud before it happens.",
      "AI is both the problem and the solution. Fraudsters are using generative AI to create more convincing phishing attacks, deepfake voice calls, and synthetic documents. Defenders are using AI for anomaly detection, network analysis, and real-time risk scoring. The arms race is accelerating.",
      "For risk teams, the key takeaway: static rules are no longer sufficient. The shift to AI-driven, real-time fraud detection is no longer optional\u2014it\u2019s table stakes. If your stack still relies primarily on rules engines and manual review, you\u2019re already behind.",
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = postsData[slug];

  if (!post) {
    return (
      <section className="py-24 text-center">
        <h1 className="text-2xl font-bold text-navy mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-gold-dark hover:text-navy font-medium">
          &larr; Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy-lighter py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-white/50 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-navy bg-gold px-2.5 py-1 rounded-full">
                <Tag size={10} /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/50">
                <Calendar size={10} /> {post.date}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-white/50">
                <Clock size={10} /> {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <article className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-slate leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>

            <div className="mt-12 pt-8 border-t border-ice-dark">
              <div className="bg-ice rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-navy mb-2">
                  Want more insights like this?
                </h3>
                <p className="text-sm text-slate mb-6">
                  NPI members get access to in-depth discussions, closed-door
                  roundtables, and a community of practitioners who live this
                  every day.
                </p>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-light transition-colors"
                >
                  Apply for Membership <ArrowLeft size={14} className="rotate-180" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
