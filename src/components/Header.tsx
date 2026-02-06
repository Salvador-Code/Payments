"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Membership", href: "/membership" },
    { label: "Events", href: "/events" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-sm py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center group-hover:bg-navy-light transition-colors">
            <span className="text-gold font-bold text-lg">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-navy font-bold text-xl tracking-tight leading-none">
              NPPN
            </span>
            <span className="text-slate text-[10px] tracking-widest uppercase leading-none mt-0.5 hidden sm:block">
              National Payments Professionals Network
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-lighter hover:text-gold-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm text-slate hover:text-navy transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/membership"
            className="relative group inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-light transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Apply for Membership
            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-navy text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              We review every application to keep the community high-signal.
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col">
          <div className="px-6 py-5 flex items-center justify-between border-b border-ice-dark">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-gold font-bold text-lg">N</span>
              </div>
              <span className="text-navy font-bold text-xl">NPPN</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-navy">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-navy py-3 border-b border-ice hover:text-gold-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-lg font-medium text-navy py-3 border-b border-ice hover:text-gold-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="px-6 mt-auto pb-8">
            <Link
              href="/membership"
              className="block w-full text-center bg-navy text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-navy-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
