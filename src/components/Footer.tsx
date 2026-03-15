import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="NPI Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold text-xl">NPI</span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed">
              National Payments Institute. A curated community for
              serious payments practitioners and aspiring professionals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
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
                    className="text-sm text-slate-light hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Membership
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/membership#professional"
                  className="text-sm text-slate-light hover:text-gold transition-colors"
                >
                  Professional Branch
                </Link>
              </li>
              <li>
                <Link
                  href="/membership#student"
                  className="text-sm text-slate-light hover:text-gold transition-colors"
                >
                  Student & Early-Career
                </Link>
              </li>
              <li>
                <Link
                  href="/membership#faq"
                  className="text-sm text-slate-light hover:text-gold transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about#veterans"
                  className="text-sm text-slate-light hover:text-gold transition-colors"
                >
                  Veterans Initiative
                </Link>
              </li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gold mb-4">
              Coming Soon
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-light flex items-center gap-2">
                Courses
                <span className="text-[10px] bg-navy-lighter px-2 py-0.5 rounded-full text-gold">
                  Soon
                </span>
              </li>
              <li className="text-sm text-slate-light flex items-center gap-2">
                Certification
                <span className="text-[10px] bg-navy-lighter px-2 py-0.5 rounded-full text-gold">
                  Soon
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="text-sm text-slate-light hover:text-gold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-lighter flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-light">
            &copy; {new Date().getFullYear()} National Payments Institute. All
            rights reserved.
          </p>
          <p className="text-xs text-slate-light">
            Rooted in Atlanta. Built for the U.S. payments ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
