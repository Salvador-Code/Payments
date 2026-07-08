import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Newsletter strip */}
      <div className="border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">
                Stay in the loop
              </h3>
              <p className="text-sm text-white/40">
                Updates on events, new content, and community milestones.
                No spam.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full sm:w-72 min-w-0 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="inline-flex items-center justify-center gap-2 bg-gold text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-light transition-colors shrink-0 w-full sm:w-auto">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.svg"
                alt="NEF Logo"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <span className="font-bold text-lg text-white">NEF</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A curated community for serious payments practitioners and
              aspiring professionals. Quality over quantity, always.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.15em] text-white/30 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Membership", href: "/membership" },
                { label: "Events", href: "/events" },
                { label: "Rankings", href: "/rankings" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.15em] text-white/30 mb-5">
              Membership
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/membership#professional"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Professional Branch
                </Link>
              </li>
              <li>
                <Link
                  href="/membership#student"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Student & Early-Career
                </Link>
              </li>
              <li>
                <Link
                  href="/membership#faq"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about#veterans"
                  className="text-sm text-white/50 hover:text-gold transition-colors"
                >
                  Veterans Initiative
                </Link>
              </li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div>
            <h4 className="font-medium text-xs uppercase tracking-[0.15em] text-white/30 mb-5">
              Coming Soon
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/50 flex items-center gap-2">
                Courses
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gold/70">
                  Soon
                </span>
              </li>
              <li className="text-sm text-white/50 flex items-center gap-2">
                Certification
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gold/70">
                  Soon
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-sm text-white/50 hover:text-gold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} National Excellence of Fintech. All
            rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Rooted in Atlanta. Built for the U.S. payments ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
