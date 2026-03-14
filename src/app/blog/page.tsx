"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    slug: "why-we-built-npi",
    title: "Why We Built NPI: A Letter from the Founders",
    excerpt:
      "The payments industry has plenty of conferences and LinkedIn groups. What it doesn't have is a curated community where practitioners can have real conversations. Here's why we're building one.",
    date: "February 1, 2026",
    readTime: "5 min read",
    category: "Founders",
  },
  {
    slug: "state-of-real-time-payments",
    title: "The State of Real-Time Payments in the U.S.: RTP vs. FedNow",
    excerpt:
      "Two years after FedNow's launch, adoption is still uneven. We break down the current landscape, use cases that are actually working, and what product teams need to know.",
    date: "January 25, 2026",
    readTime: "8 min read",
    category: "Industry",
  },
  {
    slug: "payments-career-guide-2026",
    title: "Breaking Into Payments: A Career Guide for 2026",
    excerpt:
      "For students and early-career professionals wondering how to land a role in payments, here's what hiring managers actually look for\u2014and the skills that set you apart.",
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
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy-lighter py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Blog & Resources
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Insights, analysis, and career guidance from payments
              practitioners. No fluff, no vendor pitches.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="bg-white border border-ice-dark rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-gold/30 transition-all">
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
                    <h2 className="text-xl font-bold text-navy group-hover:text-gold-dark transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-gold-dark group-hover:text-navy transition-colors">
                      Read more <ArrowRight size={14} />
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
