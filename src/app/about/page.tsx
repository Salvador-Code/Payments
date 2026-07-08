"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Target,
  Shield,
  Users,
  Award,
  GraduationCap,
  Globe,
  ArrowRight,
  Heart,
  Lightbulb,
  Scale,
  Medal,
  Handshake,
  Linkedin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-32 overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold text-gold/70 tracking-[0.2em] uppercase mb-4">
                Our Story
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                About NEF
              </h1>
              <p className="text-lg text-white/40 leading-relaxed max-w-xl">
                National Excellence of Fintech was founded with a simple
                belief: the payments industry needs a community where experience
                is valued, conversations are real, and membership means
                something.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight mb-6">
                The community we wished existed
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                We set out to build the community we wished existed when we
                started our careers in payments. Too many industry groups
                optimize for member count over member quality. Too many events
                are vendor pitches disguised as thought leadership.
              </p>
              <p className="text-slate leading-relaxed">
                NEF is different by design. We review every application. We cap
                our events. We separate Professional and Student tracks so that
                everyone gets value at their level. And we&apos;re rooted in the
                real work of payments&mdash;not the buzzwords.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Target,
                    label: "Curated Membership",
                    desc: "Every application reviewed by our team",
                  },
                  {
                    icon: Users,
                    label: "Real Practitioners",
                    desc: "2+ years payments experience required",
                  },
                  {
                    icon: GraduationCap,
                    label: "Student Pipeline",
                    desc: "Dedicated track for emerging talent",
                  },
                  {
                    icon: Globe,
                    label: "Atlanta Roots",
                    desc: "Built for the U.S. payments ecosystem",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-ice/70 border border-ice-dark rounded-xl p-5 hover:bg-ice transition-colors"
                  >
                    <item.icon size={20} className="text-gold-dark mb-3" />
                    <h4 className="text-sm font-semibold text-navy mb-1">
                      {item.label}
                    </h4>
                    <p className="text-xs text-slate">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Standard */}
      <section className="py-24 bg-ice/50">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Quality First
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight">
                Our standard for membership
              </h2>
            </div>
            <div className="bg-white rounded-2xl border border-ice-dark p-8 sm:p-10">
              <p className="text-slate leading-relaxed text-center max-w-2xl mx-auto mb-10">
                The strength of any professional community comes from the
                quality of its members. We review every application, look for
                real experience, and maintain a clear distinction between
                Professional and Student tracks.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Selective by Design",
                    desc: "We don\u2019t optimize for maximum members. We optimize for the right mix.",
                  },
                  {
                    icon: Scale,
                    title: "Honest About Levels",
                    desc: "Student members are clearly marked. No one is misrepresented.",
                  },
                  {
                    icon: Heart,
                    title: "Community First",
                    desc: "Members share, mentor, and contribute\u2014not just consume.",
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <item.icon size={22} className="text-gold-dark" />
                    </div>
                    <h4 className="text-sm font-semibold text-navy mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Leadership
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
                Meet the founders
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                NEF was founded by practitioners who saw the gap between existing
                industry groups and what payments professionals actually need.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            <AnimatedSection>
              <div className="bg-ice/30 hover:bg-ice/60 border border-transparent hover:border-ice-dark rounded-2xl p-8 h-full transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center text-gold font-bold text-xl">
                    SS
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">
                      Salvador Santos
                    </h3>
                    <p className="text-sm text-gold-dark font-medium">
                      Co-Founder
                    </p>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  Senior Payments &amp; Product Leader at Visa, where he leads
                  B2B product development for acceptance solutions. 10+ years
                  building fintech and payments products managing $40B+ in
                  payment volume across 100,000+ merchants.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "Money20/20 Amplify \u201924",
                    "Hispanic Executive 30 Under 30",
                    "KSU FinTech Advisor",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-gold/10 text-gold-dark px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate text-sm leading-relaxed">
                  Also founded DisruptivePM, an AI-powered product management
                  mentorship platform, and serves as Atlanta Chapter Director for
                  Techqueria, a community of 2,000+ Latino professionals in tech.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-ice/30 hover:bg-ice/60 border border-transparent hover:border-ice-dark rounded-2xl p-8 h-full transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center text-navy font-bold text-xl">
                    RV
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">
                      Robert Velarde
                    </h3>
                    <p className="text-sm text-gold-dark font-medium">
                      Co-Founder
                    </p>
                  </div>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  Operations &amp; Partnerships Executive at Kennesaw State
                  University, leading strategic partnerships that fuel research,
                  workforce development, and innovation within KSU&apos;s Digital
                  Financial Technologies Program.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {[
                    "U.S. Military Veteran",
                    "TS Eligible",
                    "$20B+ Budget Oversight",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-gold/10 text-gold-dark px-2.5 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate text-sm leading-relaxed">
                  Over a decade of experience spanning higher education, federal
                  contracting, and management consulting. Co-founder of CMSV
                  Consulting, advising public and private clients on data-driven
                  decision-making and operational excellence. Previously managed
                  $20B+ defense and aerospace program budgets.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-ice/30 hover:bg-ice/60 border border-transparent hover:border-ice-dark rounded-2xl p-8 h-full transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center text-gold font-bold text-xl">
                    BW
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy">
                      Benjamin Willhite-Mettler
                    </h3>
                    <p className="text-sm text-gold-dark font-medium">
                      Co-Founder
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Founding pillars */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: Award,
                title: "Visa Product Leadership",
                desc: "Built and shipped payments products used by millions at enterprise scale.",
              },
              {
                icon: GraduationCap,
                title: "KSU FinTech Partnership",
                desc: "Deep ties to Kennesaw State\u2019s #1-ranked FinTech program.",
              },
              {
                icon: Lightbulb,
                title: "Rooted in Atlanta",
                desc: "Building from the epicenter of U.S. payments processing.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-ice/30 border border-ice-dark rounded-xl p-5 text-center">
                  <item.icon size={20} className="text-gold-dark mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-navy mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Veterans Initiative */}
      <section id="veterans" className="py-24 bg-navy scroll-mt-24 relative overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
                <Medal size={14} className="text-gold" />
                <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                  Giving Back
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                Our commitment to veterans
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto">
                Veterans bring discipline, leadership, and
                adaptability&mdash;exactly the traits that make great payments
                professionals.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-7">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Medal size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Free Veterans Payments Cohorts
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Each quarter, we run a free, structured cohort for U.S.
                      military veterans and transitioning service members. Small
                      cohorts of 15&ndash;20 veterans ensure real mentorship and
                      hands-on learning.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-7">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Handshake size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Quarterly Veterans Networking Night
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      Dedicated networking dinners where veterans connect
                      face-to-face with payments professionals. No awkward
                      panels&mdash;just intimate dinner where real relationships
                      form. Completely free for veteran attendees.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-24 bg-ice/50">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
                Roadmap
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
                What&apos;s coming next
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                We&apos;re building NEF in phases. Here&apos;s what&apos;s on
                the roadmap.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                phase: "Now",
                title: "Membership & Events",
                items: [
                  "Application-based membership",
                  "Curated in-person events",
                  "Community discussions",
                ],
                active: true,
              },
              {
                phase: "Next",
                title: "Courses",
                items: [
                  "Cohort-based payments courses",
                  "Taught by industry practitioners",
                  "Certificate of completion",
                ],
                active: false,
              },
              {
                phase: "Future",
                title: "Certification",
                items: [
                  "Payments mastery exam",
                  "Industry-recognized credential",
                  "Continuing education units",
                ],
                active: false,
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-7 h-full ${
                    item.active
                      ? "bg-navy text-white"
                      : "bg-white border border-ice-dark"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold tracking-[0.15em] uppercase ${
                      item.active ? "text-gold/70" : "text-gold-dark"
                    }`}
                  >
                    {item.phase}
                  </span>
                  <h3
                    className={`text-lg font-bold mb-4 ${
                      item.active ? "text-white" : "text-navy"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {item.items.map((li, j) => (
                      <li
                        key={j}
                        className={`text-sm flex items-start gap-2 ${
                          item.active ? "text-white/50" : "text-slate"
                        }`}
                      >
                        <span
                          className={
                            item.active ? "text-gold/60" : "text-gold-dark"
                          }
                        >
                          &bull;
                        </span>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
              Be part of something selective
            </h2>
            <p className="text-slate mb-8 max-w-xl mx-auto">
              If you&apos;re serious about payments and want to join a community
              that values quality over quantity, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership#professional"
                className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-7 py-3.5 rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
              >
                Apply as Professional <ArrowRight size={16} />
              </Link>
              <Link
                href="/membership#student"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all"
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
