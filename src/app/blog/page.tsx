"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "why-we-built-npi",
    title: "Why We Built NEF: A Letter from the Founders",
    excerpt:
      "The payments industry has plenty of conferences and LinkedIn groups. What it doesn\u2019t have is a curated community where practitioners can have real conversations. Here\u2019s why we\u2019re building one.",
    date: "February 1, 2026",
    readTime: "5 min read",
    category: "Founders",
  },
  {
    slug: "state-of-real-time-payments",
    title: "The State of Real-Time Payments in the U.S.: RTP vs. FedNow",
    excerpt:
      "Two years after FedNow\u2019s launch, adoption is still uneven. We break down the current landscape, use cases that are actually working, and what product teams need to know.",
    date: "January 25, 2026",
    readTime: "8 min read",
    category: "Industry",
  },
  {
    slug: "payments-career-guide-2026",
    title: "Breaking Into Payments: A Career Guide for 2026",
    excerpt:
      "For students and early-career professionals wondering how to land a role in payments, here\u2019s what hiring managers actually look for\u2014and the skills that set you apart.",
    date: "January 18, 2026",
    readTime: "6 min read",
    category: "Careers",
  },
  {
    slug: "fraud-trends-q1-2026",
    title: "Fraud Trends to Watch in Q1 2026",
    excerpt:
      "From AI-generated synthetic identities to first-party fraud evolution, here are the trends that risk and compliance teams should have on their radar this quarter.",
    date: "January 10, 2026",
    readTime: "7 min read",
    category: "Risk & Fraud",
  },
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-4">
              Insights
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-6">
              Blog & Resources
            </h1>
            <p className="text-lg text-slate max-w-2xl">
              Analysis, insights, and career guidance from payments
              practitioners. No fluff, no vendor pitches.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <Link href={`/blog/${featured.slug}`} className="block group">
              <article className="bg-navy rounded-2xl p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 bg-gold/5 rounded-full -translate-y-1/3 translate-x-1/3" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-navy bg-gold px-2.5 py-1 rounded-full">
                      <Tag size={10} /> {featured.category}
                    </span>
                    <span className="text-xs text-white/30">
                      {featured.date}
                    </span>
                    <span className="text-xs text-white/30">
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-gold transition-colors mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-white/40 leading-relaxed mb-6 max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-2.5 transition-all">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Remaining Posts */}
      <section className="pb-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-4">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white border border-ice-dark rounded-2xl p-6 sm:p-8 hover:shadow-md hover:border-gold/20 transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-gold-dark bg-gold/10 px-2.5 py-1 rounded-full">
                        <Tag size={10} /> {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate">
                        <Calendar size={10} /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate">
                        <Clock size={10} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gold-dark group-hover:gap-2 transition-all">
                      Read more <ArrowRight size={13} />
                    </span>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
