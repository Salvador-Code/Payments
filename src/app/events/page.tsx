"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  Shield,
  GraduationCap,
  ArrowRight,
  DollarSign,
} from "lucide-react";

const events = [
  {
    title: "Atlanta Founders' Mixer & Payments Salon",
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
      "A hands-on workshop covering the payments value chain, key players, and career paths. Led by NPPN Professional members who work at top-10 banks and fintechs.",
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
      "A technical deep dive into the real-time payments landscape. We'll break down rails, use cases, and what product teams actually need to know.",
    featured: false,
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy-lighter py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Intimate, Curated Events
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-4">
              We host small, curated events so you&apos;re not just collecting
              swag. Expect focused sessions, real conversations, and dinner
              with people who actually work in payments.
            </p>
            <p className="text-sm text-white/40 max-w-xl mx-auto">
              Professional members receive first access to all intimate events.
              If seats remain, we open a portion for Student & Early-Career
              members and selected non-members.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-8">
            {events.map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`rounded-2xl border overflow-hidden ${
                    event.featured
                      ? "border-gold shadow-lg"
                      : "border-ice-dark shadow-sm"
                  }`}
                >
                  {event.featured && (
                    <div className="bg-gold px-6 py-2">
                      <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                        Featured Event
                      </span>
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Date badge */}
                      <div className="shrink-0 w-20 h-20 bg-navy rounded-xl flex flex-col items-center justify-center text-white">
                        <span className="text-xs font-medium text-gold uppercase">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-2xl font-bold leading-none">
                          {event.date.split(" ")[1].replace(",", "")}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy mb-2">
                          {event.title}
                        </h3>
                        <p className="text-sm text-slate mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-xs text-navy-lighter bg-ice px-3 py-1.5 rounded-full">
                            <Clock size={12} /> {event.time}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-navy-lighter bg-ice px-3 py-1.5 rounded-full">
                            <MapPin size={12} /> {event.location}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-navy-lighter bg-ice px-3 py-1.5 rounded-full">
                            <Users size={12} /> {event.capacity}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-gold-dark bg-gold/10 px-3 py-1.5 rounded-full">
                            <DollarSign size={12} /> {event.price}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-navy bg-navy/5 px-3 py-1.5 rounded-full">
                            <Shield size={12} /> Priority: {event.priority}
                          </span>
                          {event.studentSeats && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark bg-gold/10 px-3 py-1.5 rounded-full">
                              <GraduationCap size={12} /> {event.studentSeats}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* RSVP */}
                      <div className="shrink-0">
                        <button className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-light transition-colors whitespace-nowrap">
                          RSVP <ArrowRight size={14} />
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
      <section className="py-20 bg-ice">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Want Priority Access to Events?
            </h2>
            <p className="text-slate mb-8">
              Professional members get first dibs on all events. Apply for
              membership to secure your spot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
                Apply as Student
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
