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
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy-lighter py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                About NPI
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                The National Payments Institute was founded with a
                simple belief: the payments industry needs a community where
                experience is valued, conversations are real, and membership
                means something.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-slate leading-relaxed mb-4">
                We set out to build the community we wished existed when we
                started our careers in payments. Too many industry groups
                optimize for member count over member quality. Too many events
                are vendor pitches disguised as thought leadership. Too many
                &ldquo;networks&rdquo; are just email lists.
              </p>
              <p className="text-slate leading-relaxed">
                NPI is different by design. We review every application. We
                cap our events. We separate Professional and Student tracks so
                that everyone gets value at their level. And we&apos;re rooted
                in the real work of payments&mdash;not the buzzwords.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "Curated Membership", desc: "Every application reviewed by our team" },
                  { icon: Users, label: "Real Practitioners", desc: "2+ years payments experience required" },
                  { icon: GraduationCap, label: "Student Pipeline", desc: "Dedicated track for emerging talent" },
                  { icon: Globe, label: "Atlanta Roots", desc: "Built for the U.S. payments ecosystem" },
                ].map((item, i) => (
                  <div key={i} className="bg-ice rounded-xl p-5">
                    <item.icon size={24} className="text-gold-dark mb-3" />
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
      <section className="py-20 bg-ice">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Our Standard for Membership
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10">
              <p className="text-slate leading-relaxed text-center max-w-2xl mx-auto mb-10">
                We believe the strength of any professional community comes from
                the quality of its members. That&apos;s why we review every
                application, look for real experience, and maintain a clear
                distinction between Professional and Student tracks. This
                isn&apos;t a mass mailing list&mdash;it&apos;s a curated network
                where your time is respected.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Selective by Design",
                    desc: "We don't optimize for maximum members. We optimize for the right mix.",
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
                      <item.icon size={24} className="text-gold-dark" />
                    </div>
                    <h4 className="text-sm font-semibold text-navy mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                Where We Come From
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection>
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                  <Award size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Founded by Visa Product Leadership
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    NPI was founded by payments professionals with hands-on
                    experience building products at scale. Our founding team
                    includes product leaders from Visa and other top-tier
                    payments organizations who saw firsthand the gap between
                    existing industry groups and what practitioners actually
                    need.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <GraduationCap size={20} className="text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Academic Backing from KSU FinTech
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Our partnership with Kennesaw State University&apos;s FinTech
                    program ensures we have a strong pipeline of student talent
                    and academic rigor backing our educational initiatives. This
                    partnership is central to our Student & Early-Career branch.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                  <Lightbulb size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Rooted in Atlanta
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Atlanta is home to some of the largest payments processors
                    and FinTech companies in the world. We&apos;re building
                    NPI from this epicenter, with plans to serve the broader
                    U.S. payments ecosystem through both in-person and virtual
                    experiences.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Veterans Initiative */}
      <section id="veterans" className="py-20 bg-white scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
                <Medal size={14} className="text-gold-dark" />
                <span className="text-gold-dark text-xs font-semibold tracking-wider uppercase">
                  Giving Back
                </span>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Our Commitment to Veterans
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                We believe the payments industry has a responsibility to create
                pathways for those who&apos;ve served. Veterans bring discipline,
                leadership, and adaptability&mdash;exactly the traits that make
                great payments professionals.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection>
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <Medal size={20} className="text-navy" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Free Veterans Payments Cohorts
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    Each quarter, we run a free, structured cohort for U.S.
                    military veterans and transitioning service members. The
                    program covers the fundamentals of payments&mdash;card
                    networks, ACH, real-time payments, risk, compliance, and
                    more&mdash;taught by NPI Professional members who volunteer
                    their expertise. Cohorts are small (15&ndash;20 veterans) to
                    ensure real mentorship and hands-on learning.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                  <Handshake size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    Quarterly Veterans Networking Night
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    After each cohort, we host a dedicated networking dinner
                    where veterans connect face-to-face with payments
                    professionals from our member community. No awkward panels or
                    cold intros&mdash;just an intimate dinner where real
                    relationships form. Our Professional members show up as
                    mentors, connectors, and advocates. These nights are
                    completely free for veteran attendees.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-20 bg-ice">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">
                What&apos;s Coming Next
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                We&apos;re building NPI in phases. Here&apos;s what&apos;s on
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
                  className={`rounded-xl p-6 h-full ${
                    item.active
                      ? "bg-navy text-white"
                      : "bg-white border border-ice-dark"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold tracking-wider uppercase ${
                      item.active ? "text-gold" : "text-gold-dark"
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
                  <ul className="space-y-2">
                    {item.items.map((li, j) => (
                      <li
                        key={j}
                        className={`text-sm flex items-start gap-2 ${
                          item.active ? "text-white/70" : "text-slate"
                        }`}
                      >
                        <span className={item.active ? "text-gold" : "text-gold-dark"}>
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Be Part of Something Selective
            </h2>
            <p className="text-slate mb-8 max-w-xl mx-auto">
              If you&apos;re serious about payments and want to join a community
              that values quality over quantity, we&apos;d love to hear from
              you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership#professional"
                className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-gold-light transition-all shadow-lg"
              >
                Apply as Professional <ArrowRight size={16} />
              </Link>
              <Link
                href="/membership#student"
                className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-navy hover:text-white transition-all"
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
