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
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy-lighter min-h-[90vh] flex items-center">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gold-light blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy + CTAs */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <Shield size={14} className="text-gold" />
              <span className="text-white/80 text-xs font-medium tracking-wide uppercase">
                Application-Based Membership
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              A Curated Network for{" "}
              <span className="text-gold">Serious Payments</span>{" "}
              Professionals
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-3 max-w-xl">
              NPPN is an invite-only community for practitioners with real
              payments experience&mdash;backed by a dedicated branch for students
              who want to grow into the industry.
            </p>
            <p className="text-sm text-white/50 mb-10">
              We review every application to keep the signal high and the
              conversations real.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href="/membership#professional"
                className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Apply as a Professional
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/membership#student"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:border-gold hover:text-gold transition-all"
              >
                Apply as a Student
              </Link>
            </div>
            <Link
              href="#how-it-works"
              className="text-sm text-white/50 hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              Learn how membership works <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          {/* Right: Abstract visual */}
          <AnimatedSection delay={0.2} className="hidden lg:block">
            <div className="relative">
              {/* Network visualization */}
              <div className="w-full aspect-square max-w-lg mx-auto relative">
                {/* Central node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gold rounded-2xl flex items-center justify-center shadow-2xl shadow-gold/30 z-10">
                  <span className="text-navy font-bold text-3xl">N</span>
                </div>
                {/* Orbiting nodes */}
                {[
                  { top: "10%", left: "50%", icon: Shield, label: "Risk" },
                  { top: "30%", left: "85%", icon: Briefcase, label: "Ops" },
                  { top: "70%", left: "85%", icon: TrendingUp, label: "Product" },
                  { top: "90%", left: "50%", icon: Globe, label: "Compliance" },
                  { top: "70%", left: "15%", icon: Zap, label: "Engineering" },
                  { top: "30%", left: "15%", icon: BookOpen, label: "Strategy" },
                ].map((node, i) => (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center gap-1"
                    style={{ top: node.top, left: node.left, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <node.icon size={22} className="text-gold" />
                    </div>
                    <span className="text-white/50 text-[10px] font-medium">{node.label}</span>
                  </div>
                ))}
                {/* Connection lines (decorative) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {[
                    "M200,200 L200,55",
                    "M200,200 L340,135",
                    "M200,200 L340,275",
                    "M200,200 L200,355",
                    "M200,200 L60,275",
                    "M200,200 L60,135",
                  ].map((d, i) => (
                    <path
                      key={i}
                      d={d}
                      stroke="rgba(201,168,76,0.15)"
                      strokeWidth="1"
                      fill="none"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap justify-center gap-8 sm:gap-16">
            {[
              { icon: Award, text: "Founded by Visa product leadership" },
              { icon: GraduationCap, text: "Academic backing from KSU FinTech" },
              {
                icon: Globe,
                text: "Rooted in Atlanta, built for the U.S. payments ecosystem",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/60 text-xs sm:text-sm"
              >
                <item.icon size={16} className="text-gold shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Membership Works ── */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                How Membership Works
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                We built a simple process that respects your time while letting
                us maintain a high-quality community.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Submit a Short Application",
                desc: "Tell us about your role, experience, and what you're looking for in the community.",
                icon: BookOpen,
              },
              {
                step: "02",
                title: "We Review for Fit",
                desc: "We look for real payments experience (2+ years) for Professional membership, or verified enrollment for Student membership.",
                icon: Shield,
              },
              {
                step: "03",
                title: "Join Your Track",
                desc: "Accepted applicants are added to either the Professional Community or the Student Branch, with tailored benefits for each.",
                icon: Users,
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="relative bg-ice rounded-2xl p-8 h-full group hover:bg-gradient-to-br hover:from-navy hover:to-navy-light transition-all duration-300">
                  <span className="text-6xl font-bold text-navy/5 group-hover:text-white/5 absolute top-4 right-6 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <item.icon
                      size={24}
                      className="text-gold-dark group-hover:text-gold transition-colors"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy group-hover:text-white mb-3 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="text-center text-sm text-slate mt-10 max-w-2xl mx-auto bg-ice-dark/50 p-4 rounded-lg">
              Not everyone who applies will be accepted as a Professional
              Member. If you&apos;re early in your journey, we&apos;ll often
              recommend you start in the Student branch or as an Early Career
              member.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Two Branches, One Community ── */}
      <section className="py-24 bg-ice">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Two Branches, One Community
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Whether you&apos;re a seasoned practitioner or just beginning your
                payments journey, there&apos;s a place for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Professional Card */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-lg border border-ice-dark overflow-hidden h-full flex flex-col">
                <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                      <Shield size={20} className="text-navy" />
                    </div>
                    <div>
                      <span className="text-xs text-gold font-semibold tracking-wider uppercase">
                        Curated
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        Professional Branch
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    For practitioners with real experience in
                    payments&mdash;product, risk, operations, compliance,
                    partnerships, and more. We curate this group to keep the
                    conversations high-signal and deeply relevant.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Application-based, with 2+ years payments experience expected",
                      "Access to closed Professional-only sessions and discussions",
                      "Priority invites to intimate events and future trainings",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          size={18}
                          className="text-gold-dark shrink-0 mt-0.5"
                        />
                        <span className="text-navy-lighter">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership#professional"
                    className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-light transition-all w-full"
                  >
                    Apply as Professional
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Student Card */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl shadow-lg border border-ice-dark overflow-hidden h-full flex flex-col">
                <div className="bg-gradient-to-r from-gold-dark to-gold p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <GraduationCap size={20} className="text-gold-dark" />
                    </div>
                    <div>
                      <span className="text-xs text-navy font-semibold tracking-wider uppercase">
                        Growth Track
                      </span>
                      <h3 className="text-xl font-bold text-navy">
                        Student & Early-Career Branch
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-slate text-sm leading-relaxed mb-6">
                    For students and professionals with less than 2 years in
                    payments who want to learn, get exposure, and connect with
                    the ecosystem. We&apos;ll clearly mark this as a Student
                    track until you build experience.
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Access to student-focused events and content",
                      "Discounted or free access to select sessions",
                      "Ability to upgrade to Professional when you hit experience milestones",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          size={18}
                          className="text-gold-dark shrink-0 mt-0.5"
                        />
                        <span className="text-navy-lighter">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership#student"
                    className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-all w-full"
                  >
                    Apply as Student
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <p className="text-center text-sm text-slate mt-8 bg-white/60 p-4 rounded-lg max-w-2xl mx-auto">
              Student & Early-Career members do not yet have full Professional
              status, but we&apos;ll help you build toward it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Membership Benefits Overview ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                What Members Get Access To
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Benefits */}
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield size={20} className="text-gold-dark" />
                  <h3 className="text-lg font-semibold text-navy">
                    For Professional Members
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Curated peer group with real experience",
                    "Closed-door roundtables on topics like terminals, ACH, risk, and pricing",
                    "Priority access to intimate in-person events (75\u2013100 seats)",
                    "Early access to future trainings and certifications",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-ice rounded-xl p-4"
                    >
                      <Star
                        size={18}
                        className="text-gold-dark shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-navy-lighter">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Student Benefits */}
            <AnimatedSection delay={0.15}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap size={20} className="text-gold-dark" />
                  <h3 className="text-lg font-semibold text-navy">
                    For Student Members
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Student-only sessions with industry mentors",
                    "Access to recordings of select Professional talks",
                    "Discounts on events and future trainings",
                    "Guidance on how to move toward Professional membership",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 bg-ice rounded-xl p-4"
                    >
                      <Star
                        size={18}
                        className="text-gold-dark shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-navy-lighter">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 text-gold-dark hover:text-navy font-medium transition-colors"
              >
                See full membership details <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Events Teaser ── */}
      <section className="py-24 bg-ice">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Intimate, Curated Events
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                We host small, curated events so you&apos;re not just
                collecting swag. Expect focused sessions, real conversations,
                and dinner with people who actually work in payments.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-lg border border-ice-dark overflow-hidden max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-navy to-navy-light p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={16} className="text-gold" />
                  <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                    Featured Event
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Atlanta Founders&apos; Mixer & Payments Salon
                </h3>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-ice text-navy px-3 py-1 rounded-full">
                    <Users size={12} /> Limited to 25&ndash;75 attendees
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-gold/10 text-gold-dark px-3 py-1 rounded-full">
                    $75 ticket
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-navy/5 text-navy px-3 py-1 rounded-full">
                    <Shield size={12} /> Priority: Professional members
                  </span>
                </div>
                <p className="text-sm text-slate mb-6">
                  An evening of real talk with payments founders, operators, and
                  builders. No panels of people who&apos;ve never shipped
                  anything.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors"
                >
                  View Upcoming Events <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Who We're Looking For ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Who We&apos;re Actively Looking For Right Now
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professionals */}
            <AnimatedSection>
              <div className="bg-ice rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                    <Briefcase size={20} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">
                    Professionals
                  </h3>
                </div>
                <p className="text-sm text-slate mb-4">
                  You&apos;ve spent at least 2 years in payments roles like:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Payments product manager",
                    "Risk/fraud/compliance analyst or manager",
                    "Payments operations, settlement, or reconciliation specialist",
                    "Technical account manager or payments consultant",
                  ].map((role, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-navy-lighter"
                    >
                      <CheckCircle size={14} className="text-gold-dark shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 text-sm text-slate border-t border-ice-dark pt-4">
                  <p>
                    You&apos;re willing to share experiences, not just consume
                    content.
                  </p>
                  <p>
                    You care about leveling up the industry, not just your own
                    resume.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Students */}
            <AnimatedSection delay={0.15}>
              <div className="bg-ice rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                    <GraduationCap size={20} className="text-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">
                    Students & Early-Career
                  </h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "You're studying or recently graduated in fields like fintech, business, CS, or related areas.",
                    "You're serious about payments as a career path, not just \"exploring.\"",
                    "You're willing to show up consistently and contribute.",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy-lighter"
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

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link
                href="/membership#professional"
                className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-lg hover:bg-navy-light transition-all shadow-md"
              >
                Apply as Professional <ArrowRight size={16} />
              </Link>
              <Link
                href="/membership#student"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3 rounded-lg hover:bg-navy hover:text-white transition-all"
              >
                Apply as Student <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Testimonials / Founder Credibility ── */}
      <section className="py-24 bg-gradient-to-br from-navy to-navy-light">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why the Bar Matters
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "What makes NPPN different is the bar. Everyone in the room actually does the work day-to-day.",
                author: "Senior Payments PM",
                role: "Top-10 U.S. Bank",
              },
              {
                quote:
                  "I've been in a dozen Slack groups for payments. This is the first one where I actually learn something every week.",
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
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full">
                  <div className="text-gold text-3xl mb-4">&ldquo;</div>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {item.quote}
                  </p>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {item.author}
                    </p>
                    <p className="text-white/50 text-xs">{item.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Ready to Join a Community That Values Quality?
            </h2>
            <p className="text-slate mb-10 max-w-xl mx-auto">
              Submit your application today. We review every one personally and
              respond within 7&ndash;10 business days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership#professional"
                className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Apply as a Professional <ArrowRight size={20} />
              </Link>
              <Link
                href="/membership#student"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-8 py-4 rounded-lg hover:bg-navy hover:text-white transition-all text-lg"
              >
                Apply as a Student
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
