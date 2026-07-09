"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Trophy,
  Globe,
  Flag,
  TrendingUp,
  GraduationCap,
  Building2,
  ChevronUp,
  Minus,
  ArrowRight,
  Star,
  Award,
  MapPin,
} from "lucide-react";

const nationalRankings = [
  {
    rank: 1,
    name: "Kennesaw State University",
    location: "Kennesaw, GA",
    program: "FinTech Program",
    score: 98,
    change: "up",
    highlights: [
      "Industry-leading curriculum",
      "Strong employer partnerships",
      "NEF academic partner",
    ],
    featured: true,
  },
  {
    rank: 2,
    name: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    program: "FinTech Certificate",
    score: 94,
    change: "same",
    highlights: [
      "Research excellence",
      "Deep tech focus",
      "Cross-disciplinary approach",
    ],
    featured: false,
  },
  {
    rank: 3,
    name: "MIT Sloan School of Management",
    location: "Cambridge, MA",
    program: "FinTech Track",
    score: 93,
    change: "down",
    highlights: [
      "Blockchain research leadership",
      "Venture ecosystem",
      "Faculty publications",
    ],
    featured: false,
  },
  {
    rank: 4,
    name: "NYU Stern School of Business",
    location: "New York, NY",
    program: "FinTech MBA Specialization",
    score: 91,
    change: "up",
    highlights: [
      "Wall Street proximity",
      "Industry mentorship",
      "Case-based learning",
    ],
    featured: false,
  },
  {
    rank: 5,
    name: "University of Pennsylvania (Wharton)",
    location: "Philadelphia, PA",
    program: "FinTech & Digital Innovation",
    score: 90,
    change: "same",
    highlights: ["Executive education", "Research centers", "Alumni network"],
    featured: false,
  },
  {
    rank: 6,
    name: "Stanford University",
    location: "Stanford, CA",
    program: "Digital Economy",
    score: 89,
    change: "down",
    highlights: [
      "Silicon Valley connections",
      "Startup incubation",
      "AI in finance research",
    ],
    featured: false,
  },
  {
    rank: 7,
    name: "Duke University (Fuqua)",
    location: "Durham, NC",
    program: "FinTech Concentration",
    score: 87,
    change: "up",
    highlights: [
      "Quantitative analytics",
      "Industry partnerships",
      "Innovation labs",
    ],
    featured: false,
  },
  {
    rank: 8,
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    program: "FinTech Initiative",
    score: 86,
    change: "same",
    highlights: [
      "Data science integration",
      "Student competitions",
      "Corporate sponsors",
    ],
    featured: false,
  },
  {
    rank: 9,
    name: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    program: "Computational Finance",
    score: 85,
    change: "up",
    highlights: [
      "Quantitative strength",
      "Tech-driven curriculum",
      "Industry placement",
    ],
    featured: false,
  },
  {
    rank: 10,
    name: "UC Berkeley (Haas)",
    location: "Berkeley, CA",
    program: "FinTech & Blockchain",
    score: 84,
    change: "same",
    highlights: ["Bay Area ecosystem", "Open innovation", "Diverse cohorts"],
    featured: false,
  },
];

const globalRankings = [
  {
    rank: 1,
    name: "Kennesaw State University",
    country: "United States",
    flag: "\ud83c\uddfa\ud83c\uddf8",
    score: 98,
    change: "up",
    featured: true,
  },
  {
    rank: 2,
    name: "National University of Singapore",
    country: "Singapore",
    flag: "\ud83c\uddf8\ud83c\uddec",
    score: 95,
    change: "same",
    featured: false,
  },
  {
    rank: 3,
    name: "Imperial College London",
    country: "United Kingdom",
    flag: "\ud83c\uddec\ud83c\udde7",
    score: 94,
    change: "up",
    featured: false,
  },
  {
    rank: 4,
    name: "Georgia Institute of Technology",
    country: "United States",
    flag: "\ud83c\uddfa\ud83c\uddf8",
    score: 93,
    change: "same",
    featured: false,
  },
  {
    rank: 5,
    name: "ETH Zurich",
    country: "Switzerland",
    flag: "\ud83c\udde8\ud83c\udded",
    score: 92,
    change: "down",
    featured: false,
  },
  {
    rank: 6,
    name: "MIT Sloan School of Management",
    country: "United States",
    flag: "\ud83c\uddfa\ud83c\uddf8",
    score: 91,
    change: "down",
    featured: false,
  },
  {
    rank: 7,
    name: "Hong Kong University of Science and Technology",
    country: "Hong Kong",
    flag: "\ud83c\udded\ud83c\uddf0",
    score: 90,
    change: "up",
    featured: false,
  },
  {
    rank: 8,
    name: "University of Oxford (Sa\u00efd)",
    country: "United Kingdom",
    flag: "\ud83c\uddec\ud83c\udde7",
    score: 89,
    change: "same",
    featured: false,
  },
  {
    rank: 9,
    name: "NYU Stern School of Business",
    country: "United States",
    flag: "\ud83c\uddfa\ud83c\uddf8",
    score: 88,
    change: "up",
    featured: false,
  },
  {
    rank: 10,
    name: "Tsinghua University",
    country: "China",
    flag: "\ud83c\udde8\ud83c\uddf3",
    score: 87,
    change: "same",
    featured: false,
  },
];

function ChangeIndicator({ change }: { change: string }) {
  if (change === "up")
    return <ChevronUp size={14} className="text-success" />;
  if (change === "down")
    return <ChevronUp size={14} className="text-error rotate-180" />;
  return <Minus size={14} className="text-slate-light" />;
}

export default function RankingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
                <Trophy size={14} className="text-gold-dark" />
                <span className="text-gold-dark text-xs font-semibold tracking-wider uppercase">
                  2026 Rankings
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-6">
                FinTech Program Rankings
              </h1>
              <p className="text-lg text-slate leading-relaxed max-w-xl">
                Our annual ranking of the top FinTech programs nationally and
                globally. Evaluated on curriculum, industry partnerships,
                outcomes, and innovation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-14 bg-white border-b border-ice">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                {
                  icon: GraduationCap,
                  label: "Curriculum Rigor",
                  desc: "Depth and breadth of FinTech coursework",
                },
                {
                  icon: Building2,
                  label: "Industry Ties",
                  desc: "Employer partnerships and placement rates",
                },
                {
                  icon: TrendingUp,
                  label: "Graduate Outcomes",
                  desc: "Employment rates and salary benchmarks",
                },
                {
                  icon: Star,
                  label: "Innovation Index",
                  desc: "Research output and thought leadership",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon size={20} className="text-gold-dark" />
                  </div>
                  <h4 className="text-sm font-semibold text-navy mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* National Rankings */}
      <section className="py-20 bg-ice/50">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Flag size={22} className="text-gold-dark" />
              <h2 className="text-3xl font-bold text-navy tracking-tight">
                National Rankings
              </h2>
            </div>
            <p className="text-slate mb-10">
              Top FinTech programs across the United States for 2026.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {nationalRankings.map((school, i) => (
              <AnimatedSection key={school.rank} delay={i * 0.04}>
                <div
                  className={`rounded-xl p-5 sm:p-6 transition-all ${
                    school.featured
                      ? "bg-navy text-white shadow-xl ring-1 ring-gold/20"
                      : "bg-white border border-ice-dark hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div
                      className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base ${
                        school.featured
                          ? "bg-gold text-navy"
                          : "bg-ice text-navy"
                      }`}
                    >
                      #{school.rank}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          className={`text-base font-bold ${
                            school.featured ? "text-white" : "text-navy"
                          }`}
                        >
                          {school.name}
                        </h3>
                        {school.featured && (
                          <span className="text-[10px] font-semibold bg-gold/20 text-gold px-2 py-0.5 rounded-full uppercase tracking-wider">
                            NEF Partner
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span
                          className={`text-xs ${
                            school.featured ? "text-white/40" : "text-slate"
                          }`}
                        >
                          <MapPin
                            size={11}
                            className="inline mr-1 -mt-0.5"
                          />
                          {school.location}
                        </span>
                        <span
                          className={`text-xs ${
                            school.featured ? "text-white/40" : "text-slate"
                          }`}
                        >
                          {school.program}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {school.highlights.map((h, j) => (
                          <span
                            key={j}
                            className={`text-[11px] px-2.5 py-0.5 rounded-full ${
                              school.featured
                                ? "bg-white/8 text-white/60"
                                : "bg-ice text-slate"
                            }`}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div
                        className={`text-2xl font-bold ${
                          school.featured ? "text-gold" : "text-navy"
                        }`}
                      >
                        {school.score}
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <ChangeIndicator change={school.change} />
                        <span
                          className={`text-[10px] ${
                            school.featured
                              ? "text-white/30"
                              : "text-slate-light"
                          }`}
                        >
                          vs 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* KSU Spotlight */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="bg-navy rounded-2xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
                    <Award size={14} className="text-gold" />
                    <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                      #1 Ranked Program
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
                    Kennesaw State University
                  </h2>
                  <p className="text-white/40 leading-relaxed mb-6">
                    KSU&apos;s FinTech program earned the top spot in both
                    national and global rankings for 2026. Industry-aligned
                    curriculum, deep employer partnerships in Atlanta&apos;s
                    payments corridor, and job-ready graduates.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "98", label: "Overall Score" },
                      { value: "96%", label: "Placement Rate" },
                      { value: "#1", label: "National & Global" },
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-gold">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/30 mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      title: "Industry-Leading Curriculum",
                      desc: "Courses designed with input from Visa, FIS, Global Payments, and other Atlanta-based payments leaders.",
                    },
                    {
                      title: "NEF Academic Partner",
                      desc: "Official academic partner of NEF, giving students direct access to industry professionals.",
                    },
                    {
                      title: "Payments Corridor Advantage",
                      desc: "Located in the heart of Atlanta\u2019s payments ecosystem, home to 70% of all U.S. payment transactions.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4"
                    >
                      <h4 className="text-sm font-semibold text-gold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/40">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Global Rankings */}
      <section className="py-20 bg-ice/50">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Globe size={22} className="text-gold-dark" />
              <h2 className="text-3xl font-bold text-navy tracking-tight">
                Global Rankings
              </h2>
            </div>
            <p className="text-slate mb-10">
              The world&apos;s top FinTech programs for 2026.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl border border-ice-dark overflow-hidden">
              <div className="grid grid-cols-[60px_1fr_1fr_80px_60px] sm:grid-cols-[70px_1fr_1fr_100px_70px] gap-2 px-5 py-3 bg-navy text-white text-[11px] font-medium uppercase tracking-wider">
                <span>Rank</span>
                <span>Institution</span>
                <span>Country</span>
                <span className="text-right">Score</span>
                <span className="text-right">Trend</span>
              </div>
              {globalRankings.map((school) => (
                <div
                  key={school.rank}
                  className={`grid grid-cols-[60px_1fr_1fr_80px_60px] sm:grid-cols-[70px_1fr_1fr_100px_70px] gap-2 px-5 py-4 items-center border-b border-ice last:border-b-0 transition-colors hover:bg-ice/30 ${
                    school.featured ? "bg-gold/[0.03]" : ""
                  }`}
                >
                  <span
                    className={`font-bold text-sm ${
                      school.featured ? "text-gold-dark" : "text-navy"
                    }`}
                  >
                    #{school.rank}
                  </span>
                  <span className="text-sm font-medium text-navy truncate flex items-center gap-1.5">
                    {school.name}
                    {school.featured && (
                      <Trophy
                        size={11}
                        className="text-gold-dark shrink-0"
                      />
                    )}
                  </span>
                  <span className="text-sm text-slate">
                    {school.flag} {school.country}
                  </span>
                  <span
                    className={`text-sm font-bold text-right ${
                      school.featured ? "text-gold-dark" : "text-navy"
                    }`}
                  >
                    {school.score}
                  </span>
                  <span className="flex justify-end">
                    <ChangeIndicator change={school.change} />
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-gold-dark tracking-[0.2em] uppercase mb-3">
              Join the Network
            </p>
            <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
              Join the #1 ranked FinTech network
            </h2>
            <p className="text-slate mb-8 max-w-xl mx-auto">
              Whether you&apos;re a student at a top-ranked program or an
              industry professional, NEF connects you with the payments
              community that matters.
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
