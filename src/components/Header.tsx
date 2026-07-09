"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Membership", href: "/membership" },
    { label: "Events", href: "/events" },
    { label: "Rankings", href: "/rankings" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_0_rgba(15,23,41,0.06)] py-2.5"
          : "py-5 border-b border-ice-dark/60"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.svg"
            alt="NEF Logo"
            width={36}
            height={36}
            className="w-9 h-9"
            priority
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight leading-none text-navy">
              NEF
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5 hidden sm:block text-slate-light">
              National Excellence of Fintech
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                isActive(item.href)
                  ? "text-navy bg-ice"
                  : "text-slate hover:text-navy hover:bg-ice/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-[13px] font-medium text-slate hover:text-navy transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 bg-gold text-navy text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-light transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Apply Now
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-navy transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-ice">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Image
                  src="/logo.svg"
                  alt="NEF Logo"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
                <span className="text-navy font-bold text-lg">NEF</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-navy rounded-lg hover:bg-ice transition-colors"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-6 gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium py-3.5 px-4 rounded-xl transition-colors ${
                    isActive(item.href)
                      ? "text-navy bg-ice"
                      : "text-slate hover:text-navy hover:bg-ice/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate py-3.5 px-4 rounded-xl hover:text-navy hover:bg-ice/50 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="px-6 mt-auto pb-8">
              <Link
                href="/membership"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gold text-navy font-semibold px-6 py-3.5 rounded-xl hover:bg-gold-light transition-colors"
              >
                Apply for Membership
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
