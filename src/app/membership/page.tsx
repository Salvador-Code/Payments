"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Shield,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Loader2,
} from "lucide-react";

/* ── Application Modal ── */
function ApplicationModal({
  type,
  onClose,
}: {
  type: "professional" | "student";
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      if (type === "professional") {
        const checkedAreas: string[] = [];
        form.querySelectorAll<HTMLInputElement>('input[name="area"]:checked').forEach((cb) => {
          checkedAreas.push(cb.value);
        });

        const res = await fetch("/api/apply-professional", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            linkedinUrl: formData.get("linkedinUrl"),
            currentTitle: formData.get("currentTitle"),
            currentEmployer: formData.get("currentEmployer"),
            yearsExperience: formData.get("yearsExperience"),
            areasOfWork: checkedAreas,
            roleDescription: formData.get("roleDescription"),
            hopeToGet: formData.get("hopeToGet"),
            canContribute: formData.get("canContribute"),
          }),
        });

        if (!res.ok) throw new Error("Submission failed");
      } else {
        const res = await fetch("/api/apply-student", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            linkedinUrl: formData.get("linkedinUrl"),
            isStudent: formData.get("isStudent"),
            university: formData.get("university"),
            program: formData.get("program"),
            expectedGraduation: formData.get("expectedGraduation"),
            whyPayments: formData.get("whyPayments"),
            hopeToGain: formData.get("hopeToGain"),
          }),
        });

        if (!res.ok) throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-black/50">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-navy mb-3">
            Application Received
          </h3>
          <p className="text-slate text-sm mb-2">
            Thanks for your application. We typically review applications within
            7&ndash;10 business days and will email you with next steps.
          </p>
          {type === "student" && (
            <p className="text-slate text-xs mt-2">
              If you&apos;re already at or near 2 years of experience, our team
              may consider you for Professional membership.
            </p>
          )}
          <button
            onClick={onClose}
            className="mt-6 bg-navy text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-navy-light transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto modal-overlay bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8">
        {/* Modal header */}
        <div
          className={`p-6 rounded-t-2xl ${
            type === "professional"
              ? "bg-gradient-to-r from-navy to-navy-light"
              : "bg-gradient-to-r from-gold-dark to-gold"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {type === "professional" ? (
                <Shield size={24} className="text-gold" />
              ) : (
                <GraduationCap size={24} className="text-navy" />
              )}
              <h3
                className={`text-xl font-bold ${
                  type === "professional" ? "text-white" : "text-navy"
                }`}
              >
                {type === "professional"
                  ? "Professional Membership Application"
                  : "Student / Early-Career Application"}
              </h3>
            </div>
            <button
              onClick={onClose}
              className={`p-1 rounded-lg transition-colors ${
                type === "professional"
                  ? "text-white/70 hover:text-white hover:bg-white/10"
                  : "text-navy/70 hover:text-navy hover:bg-navy/10"
              }`}
            >
              <X size={20} />
            </button>
          </div>
          <p
            className={`text-sm mt-2 ${
              type === "professional" ? "text-white/60" : "text-navy/60"
            }`}
          >
            We&apos;re intentionally small and selective. This application helps
            us ensure the right mix of members.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* About You */}
          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              About You
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy-lighter mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-lighter mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-lighter mb-1">
                  LinkedIn URL {type === "student" ? "(optional)" : "*"}
                </label>
                <input
                  type="url"
                  name="linkedinUrl"
                  required={type === "professional"}
                  className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              {type === "professional" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-navy-lighter mb-1">
                      Current Title *
                    </label>
                    <input
                      type="text"
                      name="currentTitle"
                      required
                      className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Payments Product Manager"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-navy-lighter mb-1">
                      Current Employer *
                    </label>
                    <input
                      type="text"
                      name="currentEmployer"
                      required
                      className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Acme Payments Inc."
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Experience / Status */}
          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              {type === "professional" ? "Experience" : "Status"}
            </h4>

            {type === "professional" ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy-lighter mb-1">
                    How many years have you worked in payments? *
                  </label>
                  <select
                    name="yearsExperience"
                    required
                    className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="2-4">2&ndash;4 years</option>
                    <option value="5-9">5&ndash;9 years</option>
                    <option value="10-15">10&ndash;15 years</option>
                    <option value="15+">15+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-lighter mb-1">
                    Which areas of payments do you work in? *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Product",
                      "Risk/Fraud",
                      "Compliance",
                      "Operations",
                      "Engineering",
                      "Sales/Partnerships",
                      "Strategy",
                      "Other",
                    ].map((area) => (
                      <label key={area} className="flex items-center gap-2 text-sm text-navy-lighter">
                        <input
                          type="checkbox"
                          name="area"
                          value={area}
                          className="rounded border-ice-dark text-gold focus:ring-gold"
                        />
                        {area}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-lighter mb-1">
                    Tell us briefly how your role connects to payments *
                  </label>
                  <textarea
                    name="roleDescription"
                    required
                    rows={3}
                    className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                    placeholder="I manage the card-present processing pipeline for..."
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy-lighter mb-1">
                    Are you currently a student? *
                  </label>
                  <select
                    name="isStudent"
                    required
                    className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, currently enrolled</option>
                    <option value="recent">Recently graduated (within 1 year)</option>
                    <option value="no">No, early-career professional (&lt;2 years in payments)</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-lighter mb-1">
                      University / Institution
                    </label>
                    <input
                      type="text"
                      name="university"
                      className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="Kennesaw State University"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-lighter mb-1">
                      Program / Major
                    </label>
                    <input
                      type="text"
                      name="program"
                      className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                      placeholder="FinTech / Business"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-lighter mb-1">
                    Expected Graduation Date
                  </label>
                  <input
                    type="month"
                    name="expectedGraduation"
                    className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Intent & Fit */}
          <div>
            <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-4">
              {type === "professional" ? "Intent & Fit" : "Intent"}
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-lighter mb-1">
                  {type === "professional"
                    ? "What do you hope to get out of this community? *"
                    : "Why are you interested in payments? *"}
                </label>
                <textarea
                  name={type === "professional" ? "hopeToGet" : "whyPayments"}
                  required
                  rows={3}
                  className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-lighter mb-1">
                  {type === "professional"
                    ? "What can you contribute to other members? *"
                    : "What do you hope to gain from the Student / Early-Career branch? *"}
                </label>
                <textarea
                  name={type === "professional" ? "canContribute" : "hopeToGain"}
                  required
                  rows={3}
                  className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                />
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="border-t border-ice-dark pt-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 rounded border-ice-dark text-gold focus:ring-gold"
              />
              <span className="text-sm text-slate">
                I agree to follow NPI&apos;s community code and confidentiality
                guidelines. *
              </span>
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition-all ${
              type === "professional"
                ? "bg-navy text-white hover:bg-navy-light"
                : "bg-gold text-navy hover:bg-gold-light"
            } disabled:opacity-70`}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Submitting...
              </>
            ) : (
              <>
                Submit Application <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── FAQ Item ── */
function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ice-dark">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium text-navy pr-4">{question}</span>
        {open ? (
          <ChevronUp size={18} className="text-slate shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-slate shrink-0" />
        )}
      </button>
      {open && (
        <p className="text-sm text-slate pb-5 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

/* ── Membership Page ── */
export default function MembershipPage() {
  const [modalType, setModalType] = useState<
    "professional" | "student" | null
  >(null);

  return (
    <>
      {modalType && (
        <ApplicationModal
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy-lighter py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Membership by Application, Not Algorithm
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
              We don&apos;t optimize for maximum member count. We optimize for
              the right mix of practitioners and serious future practitioners.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setModalType("professional")}
                className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-gold-light transition-all shadow-lg"
              >
                Apply as Professional <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setModalType("student")}
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg hover:border-gold hover:text-gold transition-all"
              >
                Apply as Student
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Branch Comparison */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              Compare Membership Branches
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-4 text-slate font-medium border-b-2 border-ice-dark">
                      &nbsp;
                    </th>
                    <th className="text-left py-4 px-4 border-b-2 border-navy">
                      <div className="flex items-center gap-2">
                        <Shield size={18} className="text-gold-dark" />
                        <span className="font-semibold text-navy">
                          Professional Branch
                        </span>
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 border-b-2 border-gold">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={18} className="text-gold-dark" />
                        <span className="font-semibold text-navy">
                          Student & Early-Career
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Primary Audience",
                      pro: "Experienced payments practitioners",
                      stu: "Students & professionals with <2 years",
                    },
                    {
                      label: "Experience Level",
                      pro: "2+ years in payments roles",
                      stu: "Currently enrolled or <2 years",
                    },
                    {
                      label: "How You Join",
                      pro: "Application reviewed by our team",
                      stu: "Application with student verification",
                    },
                    {
                      label: "Professional-Only Events",
                      pro: "Full access",
                      stu: "Select access + recordings",
                    },
                    {
                      label: "Event Pricing",
                      pro: "Priority + preferred pricing",
                      stu: "Discounted access",
                    },
                    {
                      label: "Future Courses",
                      pro: "Early access + cohort priority",
                      stu: "Discounted access",
                    },
                    {
                      label: "Upgrade Path",
                      pro: "\u2014",
                      stu: "Apply for Professional when eligible",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-ice/50" : ""}>
                      <td className="py-3 px-4 font-medium text-navy">
                        {row.label}
                      </td>
                      <td className="py-3 px-4 text-navy-lighter">{row.pro}</td>
                      <td className="py-3 px-4 text-navy-lighter">{row.stu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Professional Membership Detail */}
      <section id="professional" className="py-20 bg-ice scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                <Shield size={24} className="text-gold" />
              </div>
              <div>
                <span className="text-xs text-gold-dark font-semibold tracking-wider uppercase">
                  Curated Branch
                </span>
                <h2 className="text-2xl font-bold text-navy">
                  Professional Membership
                </h2>
              </div>
            </div>

            <p className="text-slate leading-relaxed mb-8">
              NPI Professional membership is for people who already live and
              breathe payments. It is selective by design, so the community
              remains relevant, focused, and worth your time.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                  Eligibility
                </h4>
                <ul className="space-y-2">
                  {[
                    "2+ years working in payments (product, risk, ops, compliance, sales, engineering, etc.)",
                    "Clear explanation of how your role touches payments",
                    "Willingness to share and mentor, not just consume",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy-lighter"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold-dark shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {[
                    "Access to Professional-only sessions and discussion circles",
                    "Priority invitations and preferred pricing on intimate events",
                    "Early access to future course cohorts and the mastery certification exam",
                    "Professional badge you can add to LinkedIn (once accepted)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy-lighter"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold-dark shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => setModalType("professional")}
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-navy-light transition-all shadow-md"
            >
              Start Professional Application <ArrowRight size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Student Membership Detail */}
      <section id="student" className="py-20 bg-white scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
                <GraduationCap size={24} className="text-navy" />
              </div>
              <div>
                <span className="text-xs text-gold-dark font-semibold tracking-wider uppercase">
                  Growth Track
                </span>
                <h2 className="text-2xl font-bold text-navy">
                  Student & Early-Career Branch
                </h2>
              </div>
            </div>

            <p className="text-slate leading-relaxed mb-8">
              We created the Student & Early-Career branch for those who are
              serious about entering payments but still building experience.
              This track gives you access to learning and exposure, without
              misrepresenting your current level to employers or peers.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="bg-ice rounded-xl p-6">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                  Eligibility
                </h4>
                <ul className="space-y-2">
                  {[
                    "Currently enrolled in a degree-granting university program or <2 years in payments roles",
                    "Serious interest in payments as a career",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy-lighter"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold-dark shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-ice rounded-xl p-6">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                  Benefits
                </h4>
                <ul className="space-y-2">
                  {[
                    "Access to student-focused sessions and content",
                    "Access to recordings of select Professional talks (or some events)",
                    "Event discounts",
                    "Clear path to apply for Professional status once you hit 2+ years",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-navy-lighter"
                    >
                      <CheckCircle
                        size={14}
                        className="text-gold-dark shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm text-slate bg-ice p-4 rounded-lg mb-8">
              Student & Early-Career members are clearly marked as such in the
              community, so everyone knows who is still building experience.
            </p>

            <button
              onClick={() => setModalType("student")}
              className="inline-flex items-center gap-2 bg-gold text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-gold-light transition-all shadow-md"
            >
              Apply as Student / Early-Career <ArrowRight size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-ice scroll-mt-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy text-center mb-12">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <FaqItem
                question="Why is membership application-based?"
                answer="We believe the value of a professional community comes from the quality of its members. By reviewing every application, we ensure that conversations stay focused, relevant, and genuinely useful for practitioners. This isn't about exclusion—it's about making sure your time here is well spent."
              />
              <FaqItem
                question="What if my application is not accepted as a Professional member?"
                answer="We'll let you know why and often suggest the Student & Early-Career branch as a starting point. Many of our strongest future Professional members will come from this track. It's not a rejection—it's a 'not yet.'"
              />
              <FaqItem
                question="Can I re-apply later?"
                answer="Yes. We encourage re-applications after 6 months or once you've gained additional payments experience. We keep your original application on file to track your growth."
              />
              <FaqItem
                question="Can I be in the Student branch and then move up?"
                answer="That's exactly how we designed it. Once you've built 2+ years of payments experience, you can apply for Professional membership. We'll take your Student branch participation into account."
              />
              <FaqItem
                question="Is there a cap on how many Professional members you accept?"
                answer="We don't have a hard cap, but we do pace growth intentionally. We'd rather have 200 highly engaged members than 2,000 silent ones. Quality over quantity, always."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
