"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy-lighter py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Have a question about membership, events, or partnerships? We&apos;d
              love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {submitted ? (
                  <div className="bg-ice rounded-2xl p-10 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-600" />
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
                        <label className="block text-sm font-medium text-navy-lighter mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
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
                          required
                          className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-lighter mb-1">
                        Subject *
                      </label>
                      <select
                        required
                        className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
                      >
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
                      <label className="block text-sm font-medium text-navy-lighter mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full border border-ice-dark rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-lg hover:bg-navy-light transition-all disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <div className="space-y-6">
                  <div className="bg-ice rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                        <Mail size={18} className="text-gold" />
                      </div>
                      <h4 className="font-semibold text-navy">Email</h4>
                    </div>
                    <p className="text-sm text-slate">
                      hello@nppn.org
                    </p>
                    <p className="text-xs text-slate mt-1">
                      We respond within 2&ndash;3 business days.
                    </p>
                  </div>

                  <div className="bg-ice rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                        <MapPin size={18} className="text-gold" />
                      </div>
                      <h4 className="font-semibold text-navy">Location</h4>
                    </div>
                    <p className="text-sm text-slate">
                      Atlanta, Georgia
                    </p>
                    <p className="text-xs text-slate mt-1">
                      Events hosted across metro Atlanta. Virtual events
                      nationwide.
                    </p>
                  </div>

                  <div className="bg-navy rounded-xl p-6 text-white">
                    <h4 className="font-semibold mb-2">
                      Interested in Partnerships?
                    </h4>
                    <p className="text-sm text-white/60 mb-3">
                      We partner with organizations that share our commitment to
                      elevating payments professionals. Get in touch to discuss
                      sponsorship, speaking opportunities, or academic
                      partnerships.
                    </p>
                    <p className="text-sm text-gold">
                      partnerships@nppn.org
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
