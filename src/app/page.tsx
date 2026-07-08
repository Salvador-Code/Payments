"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Shield,
  GraduationCap,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  Briefcase,
  BookOpen,
  Award,
  TrendingUp,
  Globe,
  Zap,
  Medal,
  Handshake,
  UserCheck,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-navy min-h-[100vh] flex items-center grain">
        {/* Refined background: single gradient orb + grid */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-gold/8 to-transparent blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40">
          <div className="max-w-3xl">
            <AnimatedSection variant="fade">
              <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-white/60 text-xs font-medium tracking-wide">
                  Application-Based Membership &middot; Now Accepting
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
                The payments community
                <br />
                that <span className="text-gradient">means something</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-xl text-white/50 leading-relaxed mb-4 max-w-xl">
                NEF is a curated network for practitioners with real payments
                experience&mdash;backed by a dedicated branch for the next
                generation.
              </p>
              <p className="text-sm text-white/30 mb-12">
                Every application reviewed. Every member vetted. No exceptions.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href="/membership#professional"
                  className="group inline-flex items-center gap-2.5 bg-gold text-navy font-semibold px-7 py-4 rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30"
                >
                  Apply as Professional
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/membership#student"
                  className="inline-flex items-center gap-2 border border-white/15 text-white/80 font-medium px-7 py-4 rounded-xl hover:bg-white/5 hover:border-white/25 transition-all"
                >
                  Apply as Student
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} variant="fade">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { icon: Award, text: "Co-founded by Visa\u2019s Salvador Santos" },
                  {
                    icon: GraduationCap,
                    text: "Co-founded by KSU\u2019s Robert Velarde",
                  },
                  { icon: Globe, text: "Rooted in Atlanta" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/30 text-sm"
                  >
                    <item.icon size={14} className="text-gold/60" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* ── Stats Strip ── */}
      <section className="py-6 bg-white relative z-20 -mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection variant="scale">
            <div className="bg-white rounded-2xl shadow-xl shadow-navy/5 border border-ice-dark p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "2+", label: "Years experience required" },
                  { value: "75", label: "Max event capacity" },
                  { value: "100%", label: "Applications reviewed" },
                  { value: "Free", label: "Veterans programs" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-navy mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How Membership Works ── */}
      <section id="how-it-works" className="pt-20 pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Getting Started
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Three steps to membership
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Submit Your Application",
                desc: "Tell us about your role, experience, and what you're looking for in the community.",
                icon: BookOpen,
              },
              {
                step: "02",
                title: "We Review for Fit",
                desc: "We look for real payments experience (2+ years for Professional) or verified enrollment for Student members.",
                icon: Shield,
              },
              {
                step: "03",
                title: "Join Your Track",
                desc: "Accepted members join either the Professional Community or the Student Branch, each with tailored benefits.",
                icon: Users,
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group relative bg-ice/50 hover:bg-navy rounded-2xl p-8 h-full transition-all duration-500 cursor-default">
                  <span className="text-5xl font-bold text-navy/[0.04] group-hover:text-white/[0.06] absolute top-6 right-8 transition-colors duration-500">
                    {item.step}
                  </span>
                  <div className="w-11 h-11 bg-gold/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500">
                    <item.icon
                      size={20}
                      className="text-gold-dark group-hover:text-gold transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-navy group-hover:text-white mb-2 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two Branches ── */}
      <section className="py-24 bg-ice/50">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Community Structure
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
                Two branches, one community
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Whether you&apos;re a seasoned practitioner or just beginning
                your payments journey, there&apos;s a place for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Professional */}
            <AnimatedSection variant="slide-left">
              <div className="bg-white rounded-2xl border border-ice-dark overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-navy/5 transition-shadow duration-300">
                <div className="bg-navy p-7">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                      <Shield size={20} className="text-gold" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gold/70 font-semibold tracking-[0.15em] uppercase">
                        Curated
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        Professional Branch
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    For practitioners with real experience in
                    payments&mdash;product, risk, operations, compliance, and
                    more. Curated to keep conversations high-signal.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Application-based, 2+ years payments experience",
                      "Closed Professional-only sessions and discussions",
                      "Priority invites to intimate events",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          size={16}
                          className="text-gold-dark shrink-0 mt-0.5"
                        />
                        <span className="text-navy/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership#professional"
                    className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy-light transition-all w-full"
                  >
                    Apply as Professional <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Student */}
            <AnimatedSection variant="slide-right">
              <div className="bg-white rounded-2xl border border-ice-dark overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-navy/5 transition-shadow duration-300">
                <div className="bg-gradient-to-r from-gold-dark to-gold p-7">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] text-navy/60 font-semibold tracking-[0.15em] uppercase">
                        Growth Track
                      </span>
                      <h3 className="text-lg font-bold text-navy leading-tight">
                        Student & Early-Career
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    For students and professionals with less than 2 years in
                    payments. Learn, get exposure, and connect with the
                    ecosystem.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Student-focused events and mentorship content",
                      "Discounted or free access to select sessions",
                      "Clear upgrade path to Professional membership",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          size={16}
                          className="text-gold-dark shrink-0 mt-0.5"
                        />
                        <span className="text-navy/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership#student"
                    className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded-xl hover:bg-navy hover:text-white transition-all w-full"
                  >
                    Apply as Student <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Events Teaser ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Upcoming Events
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
                Intimate, not industrial
              </h2>
              <p className="text-slate leading-relaxed mb-8">
                We host small, curated events so you&apos;re not just collecting
                swag. Focused sessions, real conversations, and dinner with
                people who actually work in payments.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark transition-colors"
              >
                View all events <ArrowUpRight size={14} />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-navy rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-gold" />
                    <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                      Featured Event
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Atlanta Founders&apos; Mixer & Payments Salon
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="text-xs text-white/40 bg-white/5 px-3 py-1 rounded-full">
                      Limited to 75
                    </span>
                    <span className="text-xs text-gold/80 bg-gold/10 px-3 py-1 rounded-full">
                      $75 ticket
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed mb-6">
                    An evening of real talk with payments founders, operators,
                    and builders. No panels of people who&apos;ve never shipped
                    anything.
                  </p>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Who We're Looking For ── */}
      <section className="py-24 bg-ice/50">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Ideal Members
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Who we&apos;re looking for
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-ice-dark p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center">
                    <Briefcase size={18} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    Professionals
                  </h3>
                </div>
                <p className="text-sm text-slate mb-5">
                  You&apos;ve spent at least 2 years in payments roles like:
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Payments product manager",
                    "Risk/fraud/compliance analyst or manager",
                    "Payments operations or settlement specialist",
                    "Technical account manager or consultant",
                  ].map((role, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-navy/70"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold-dark shrink-0"
                      />
                      {role}
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-slate border-t border-ice pt-5 space-y-1.5">
                  <p>Willing to share experiences, not just consume content.</p>
                  <p>
                    Cares about leveling up the industry, not just their own
                    resume.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl border border-ice-dark p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                    <GraduationCap size={18} className="text-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    Students & Early-Career
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Studying or recently graduated in fintech, business, CS, or related areas.",
                    "Serious about payments as a career path\u2014not just \"exploring.\"",
                    "Willing to show up consistently and contribute to the community.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-navy/70"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold-dark shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Veterans Initiative ── */}
      <section className="py-24 bg-navy relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
                <Medal size={14} className="text-gold" />
                <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                  Giving Back
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Supporting veterans in payments
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto">
                Veterans bring discipline, leadership, and mission-first
                thinking. We&apos;re committed to opening doors for those who
                served.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 h-full backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Medal size={20} className="text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold/60 tracking-[0.15em] uppercase font-medium">
                      Free Program
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      Veterans Payments Cohort
                    </h3>
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-5">
                  Quarterly cohorts for U.S. military veterans covering payments
                  fundamentals. Small groups (15&ndash;20), taught by NEF
                  Professional volunteers.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Free, structured curriculum: rails, networks, settlement, compliance",
                    "Hands-on case studies and real-world scenarios",
                    "Certificate recognized by NEF member companies",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-white/50"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold/60 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 h-full backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Handshake size={20} className="text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gold/60 tracking-[0.15em] uppercase font-medium">
                      Quarterly
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      Veterans Networking Night
                    </h3>
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-5">
                  Intimate dinners pairing veterans with payments professionals.
                  No awkward keynotes&mdash;just real conversations that open
                  doors.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "20\u201330 veterans paired with industry professionals",
                    "Professional members volunteer as mentors",
                    "Completely free for veteran attendees",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-white/50"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold/60 shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Impact stats */}
          <AnimatedSection>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { stat: "100%", label: "Free for veterans" },
                { stat: "15\u201320", label: "Per cohort" },
                { stat: "Quarterly", label: "Networking nights" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-gold">{item.stat}</p>
                  <p className="text-xs text-white/30 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Social Proof
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                Why the bar matters
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "What makes NEF different is the bar. Everyone in the room actually does the work day-to-day.",
                author: "Senior Payments PM",
                role: "Top-10 U.S. Bank",
              },
              {
                quote:
                  "I\u2019ve been in a dozen Slack groups for payments. This is the first one where I actually learn something every week.",
                author: "Risk Operations Lead",
                role: "Series B FinTech",
              },
              {
                quote:
                  "As a student, having access to real practitioners changed my understanding of what a payments career looks like.",
                author: "KSU FinTech Student",
                role: "Class of 2025",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-ice/50 border border-ice-dark rounded-2xl p-8 h-full flex flex-col">
                  <div className="text-gold text-4xl leading-none mb-4">
                    &ldquo;
                  </div>
                  <p className="text-navy/80 text-sm leading-relaxed mb-6 flex-1">
                    {item.quote}
                  </p>
                  <div className="border-t border-ice-dark pt-4">
                    <p className="text-navy font-medium text-sm">
                      {item.author}
                    </p>
                    <p className="text-slate text-xs">{item.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-ice/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
              Join Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy tracking-tight mb-4">
              Ready to join a community that values quality?
            </h2>
            <p className="text-slate mb-10 max-w-xl mx-auto">
              Submit your application today. We review every one personally and
              respond within 7&ndash;10 business days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership#professional"
                className="group inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20 text-lg"
              >
                Apply as Professional
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/membership#student"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-4 rounded-xl hover:bg-navy hover:text-white transition-all text-lg"
              >
                Apply as Student
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
