"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader2,
  Handshake,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-ice-dark rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all placeholder:text-slate-light";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-32 overflow-hidden grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <p className="text-xs font-semibold text-gold/70 tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Contact us
            </h1>
            <p className="text-lg text-white/40 max-w-2xl">
              Questions about membership, events, or partnerships? We&apos;d
              love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-ice/50 border border-ice-dark rounded-2xl p-10 text-center">
                    <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={28} className="text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Message Sent
                    </h3>
                    <p className="text-slate text-sm">
                      Thanks for reaching out. We&apos;ll get back to you within
                      2&ndash;3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-navy/70 mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className={inputClass}
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy/70 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className={inputClass}
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy/70 mb-1.5">
                        Subject *
                      </label>
                      <select name="subject" required className={inputClass}>
                        <option value="">Select a topic...</option>
                        <option value="membership">Membership Question</option>
                        <option value="events">Events</option>
                        <option value="partnership">
                          Partnership / Sponsorship
                        </option>
                        <option value="press">Press Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy/70 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-navy-light transition-all disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <div className="space-y-5">
                  <div className="bg-ice/50 border border-ice-dark rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
                        <Mail size={16} className="text-gold" />
                      </div>
                      <h4 className="font-semibold text-sm text-navy">Email</h4>
                    </div>
                    <p className="text-sm text-slate">
                      hello@nationalpaymentinstitute.org
                    </p>
                    <p className="text-xs text-slate-light mt-1">
                      We respond within 2&ndash;3 business days.
                    </p>
                  </div>

                  <div className="bg-ice/50 border border-ice-dark rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
                        <MapPin size={16} className="text-gold" />
                      </div>
                      <h4 className="font-semibold text-sm text-navy">
                        Location
                      </h4>
                    </div>
                    <p className="text-sm text-slate">Atlanta, Georgia</p>
                    <p className="text-xs text-slate-light mt-1">
                      Events across metro Atlanta. Virtual events nationwide.
                    </p>
                  </div>

                  <div className="bg-navy rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-gold/20 rounded-lg flex items-center justify-center">
                        <Handshake size={16} className="text-gold" />
                      </div>
                      <h4 className="font-semibold text-sm text-white">
                        Partnerships
                      </h4>
                    </div>
                    <p className="text-sm text-white/40 mb-3">
                      We partner with organizations that share our commitment to
                      elevating payments professionals.
                    </p>
                    <p className="text-sm text-gold">
                      partnerships@nationalpaymentinstitute.org
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
