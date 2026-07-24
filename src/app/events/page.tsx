"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  MapPin,
  Users,
  Clock,
  Shield,
  GraduationCap,
  ArrowRight,
  DollarSign,
  Sparkles,
} from "lucide-react";

const events = [
  {
    title: "Atlanta Founders\u2019 Mixer & Payments Salon",
    date: "March 28, 2026",
    time: "6:00 PM \u2013 9:00 PM EST",
    location: "The Gathering Spot, Atlanta, GA",
    capacity: "75 attendees",
    price: "$75",
    priority: "Professional members",
    studentSeats: "10 student seats available",
    description:
      "An evening of real talk with payments founders, operators, and builders. Expect curated conversations, not keynote monologues. Dinner and drinks included.",
    featured: true,
  },
  {
    title: "Payments Risk & Fraud Roundtable",
    date: "April 15, 2026",
    time: "12:00 PM \u2013 2:00 PM EST",
    location: "Virtual (Zoom)",
    capacity: "30 attendees",
    price: "Free for members",
    priority: "Professional members only",
    studentSeats: null,
    description:
      "A closed-door discussion on emerging fraud vectors, chargeback trends, and the evolving risk landscape. Chatham House rules apply.",
    featured: false,
  },
  {
    title: "Student & Early-Career: Payments 101 Workshop",
    date: "April 22, 2026",
    time: "5:00 PM \u2013 7:00 PM EST",
    location: "KSU Campus, Kennesaw, GA",
    capacity: "40 attendees",
    price: "Free",
    priority: "Student members",
    studentSeats: null,
    description:
      "A hands-on workshop covering the payments value chain, key players, and career paths. Led by NEFTI Professional members who work at top-10 banks and fintechs.",
    featured: false,
  },
  {
    title: "Veterans Networking Night: Payments & Purpose",
    date: "April 30, 2026",
    time: "6:00 PM \u2013 9:00 PM EST",
    location: "The Gathering Spot, Atlanta, GA",
    capacity: "50 attendees",
    price: "Free for veterans",
    priority: "Veterans + Professional members",
    studentSeats: null,
    description:
      "An intimate dinner pairing veterans from our Payments Cohort program with NEFTI Professional members. Build real relationships with people who can open doors in payments.",
    featured: false,
  },
  {
    title: "ACH Deep Dive: Same-Day ACH, RTP & FedNow",
    date: "May 8, 2026",
    time: "1:00 PM \u2013 3:00 PM EST",
    location: "Virtual (Zoom)",
    capacity: "50 attendees",
    price: "$25 members / $50 non-members",
    priority: "Professional members",
    studentSeats: "15 student seats at $10",
    description:
      "A technical deep dive into the real-time payments landscape. We\u2019ll break down rails, use cases, and what product teams actually need to know.",
    featured: false,
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-teal/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-teal-dark tracking-[0.2em] uppercase mb-4">
              Calendar
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-6">
              Intimate, curated events
            </h1>
            <p className="text-lg text-slate max-w-2xl mx-auto mb-3">
              Small, focused gatherings where every seat matters. Real
              conversations with people who actually work in payments.
            </p>
            <p className="text-sm text-slate-light max-w-xl mx-auto">
              Professional members receive first access. Remaining seats open
              for Student members and select non-members.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-5">
            {events.map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className={`rounded-2xl overflow-hidden transition-all hover:shadow-lg ${
                    event.featured
                      ? "border-2 border-teal/30 shadow-md hover:shadow-xl"
                      : "border border-ice-dark hover:border-ice-dark/50"
                  }`}
                >
                  {event.featured && (
                    <div className="bg-gradient-to-r from-teal to-teal-light px-6 py-2.5 flex items-center gap-2">
                      <Sparkles size={12} className="text-navy" />
                      <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                        Featured Event
                      </span>
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Date badge */}
                      <div className="shrink-0 w-[72px] h-[72px] bg-navy rounded-xl flex flex-col items-center justify-center">
                        <span className="text-[10px] font-medium text-teal/70 uppercase tracking-wider">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-2xl font-bold text-white leading-none">
                          {event.date.split(" ")[1].replace(",", "")}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-navy mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-slate mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate bg-ice px-3 py-1.5 rounded-lg">
                            <Clock size={11} /> {event.time}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate bg-ice px-3 py-1.5 rounded-lg">
                            <MapPin size={11} /> {event.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-slate bg-ice px-3 py-1.5 rounded-lg">
                            <Users size={11} /> {event.capacity}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-teal-dark bg-teal/10 px-3 py-1.5 rounded-lg font-medium">
                            <DollarSign size={11} /> {event.price}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-navy/60 bg-navy/[0.04] px-3 py-1.5 rounded-lg">
                            <Shield size={11} /> {event.priority}
                          </span>
                          {event.studentSeats && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-dark bg-teal/10 px-3 py-1.5 rounded-lg">
                              <GraduationCap size={11} /> {event.studentSeats}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* RSVP */}
                      <div className="shrink-0 lg:self-center">
                        <button className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-navy-light transition-colors whitespace-nowrap">
                          RSVP <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ice/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold text-teal-dark tracking-[0.2em] uppercase mb-3">
              Priority Access
            </p>
            <h2 className="text-3xl font-bold text-navy tracking-tight mb-4">
              Want first dibs on events?
            </h2>
            <p className="text-slate mb-8">
              Professional members get priority access to all events. Apply for
              membership to secure your spot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership#professional"
                className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-teal-light transition-all shadow-lg shadow-teal/20"
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
