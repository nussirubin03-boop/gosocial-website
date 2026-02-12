"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Content Strategy & Algorithm Research",
    text: "Audience research, trend mapping, and algorithm-level planning that turns content into predictable growth.",
  },
  {
    title: "Professional Video Shoots",
    text: "Cinematic social-first production with premium composition, lighting direction, and performance-focused hooks.",
  },
  {
    title: "Short-Form Video Editing",
    text: "Fast, sharp edits engineered for retention with captions, pacing systems, and conversion-driven storytelling.",
  },
  {
    title: "Instagram Growth & Engagement",
    text: "Community acceleration through strategic interactions, authority positioning, and high-signal engagement loops.",
  },
  {
    title: "Story & Reel Management",
    text: "Consistent publishing operations that protect brand quality while maximizing daily visibility and relevance.",
  },
  {
    title: "Targeted Outreach & Lead Generation",
    text: "Outbound + inbound workflows that convert social attention into booked calls and qualified opportunities.",
  },
];

const gallery = [
  "Instagram Embed Placeholder 01",
  "Instagram Embed Placeholder 02",
  "Instagram Embed Placeholder 03",
  "Instagram Embed Placeholder 04",
  "Instagram Embed Placeholder 05",
  "Instagram Embed Placeholder 06",
];

const pricing = [
  {
    name: "BASIC PACKAGE",
    price: "$1,500",
    period: "/ month",
    features: ["1 Video per week", "Professional editing", "Posting & optimization"],
  },
  {
    name: "PREMIUM PACKAGE",
    price: "$3,000",
    period: "/ month",
    badge: "Most Recommended",
    featured: true,
    features: [
      "2 Videos per week",
      "2 Reels per week",
      "2 Video shoots per month",
      "2 Instagram stories per week",
      "Posting, commenting & engagement management",
    ],
  },
  {
    name: "GOLD PACKAGE",
    price: "$5,000",
    period: "/ month",
    features: [
      "3 Videos per week",
      "Everything in Premium",
      "Advanced Instagram outreach",
      "Growth strategy & targeting",
    ],
  },
];

export default function HomePage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const syncGalleryScroll = () => {
      const section = document.getElementById("gallery");
      const track = document.getElementById("gallery-track");
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
      track.style.transform = `translate3d(-${progress * 42}%, 0, 0)`;
    };

    syncGalleryScroll();
    window.addEventListener("scroll", syncGalleryScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncGalleryScroll);
    };
  }, []);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <main className="bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="inline-flex items-center gap-3" onClick={closeMobileNav}>
            <Image src="/gosocial-logo-mark.svg" alt="GoSocial" width={44} height={44} priority />
            <span className="text-2xl font-black tracking-tight text-slate-950">
              <span className="text-brand-teal">Go</span>Social
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-brand-teal">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileNavOpen((v) => !v)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-bold uppercase tracking-[0.15em] md:hidden"
            aria-label="Open mobile navigation"
          >
            Menu
          </button>
        </div>

        {isMobileNavOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <nav className="grid gap-4 text-sm font-semibold">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={closeMobileNav} className="transition hover:text-brand-teal">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="home" className="relative isolate overflow-hidden px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
        <div className="hero-orb pointer-events-none absolute -right-16 top-24 -z-10 h-80 w-80 rounded-full bg-brand-teal/20 blur-3xl" />
        <div className="hero-orb-delayed pointer-events-none absolute left-0 top-44 -z-10 h-64 w-64 rounded-full bg-slate-200 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <p className="reveal inline-flex rounded-full border border-brand-teal/20 bg-brand-teal/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand-teal">
            Strategic Video Systems for Real Client Growth
          </p>

          <h1 className="reveal mt-6 max-w-5xl text-5xl font-black leading-[0.9] tracking-tight text-slate-950 md:text-7xl xl:text-8xl">
            Go Beyond Content. Go Viral. Go Social.
          </h1>

          <p className="reveal mt-7 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            We turn strategic content into real clients through powerful short-form video systems.
          </p>

          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-brand-teal"
            >
              Book a Strategy Call
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-slate-300 px-8 py-4 text-sm font-bold text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-slate-900"
            >
              See Our Work
            </a>
          </div>

          <div className="reveal mt-14 grid gap-4 sm:grid-cols-3">
            {[
              ["120M+", "Views generated"],
              ["600+", "Videos produced"],
              ["92%", "Client retention"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white/85 p-5 backdrop-blur">
                <p className="text-3xl font-black text-slate-950">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="reveal relative min-h-[380px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-brand-teal p-9 text-white shadow-luxe">
          <div className="absolute right-8 top-8 h-16 w-16 animate-float rounded-2xl border border-white/55" />
          <div className="absolute bottom-8 left-8 h-24 w-24 animate-soft-pulse rounded-full border border-white/35" />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">Image Placeholder</p>
          <h3 className="mt-5 max-w-sm text-3xl font-black leading-tight">Proven Growth. Creative Strategy. Real Results.</h3>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/85">Replace with a premium team, studio, or client success image.</p>
        </div>

        <div className="reveal">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Proven Growth. Creative Strategy. Real Results.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            GoSocial helps brands dominate social media through consistent, creative, high-performing content. We create,
            shoot, edit, and develop content strategies based on deep research of platform algorithms. We don&apos;t guess.
            We study trends, analyze performance data, and build systems that turn views into customers.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            We handle ideation, scripting, shooting, editing, posting, engagement, and outreach — so our clients focus on
            running their business.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="reveal mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">A complete social growth operating system.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="reveal group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-brand-teal/40 hover:shadow-luxe"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-sm font-bold text-brand-teal">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-extrabold leading-tight text-slate-900 transition group-hover:text-brand-teal">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="overflow-hidden py-24">
        <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-10">
          <p className="reveal text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">Video Gallery</p>
          <h2 className="reveal mt-4 text-4xl font-black tracking-tight md:text-5xl">When users scroll down, our work moves sideways.</h2>
          <p className="reveal mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Replace each card with your Instagram embed URL or custom iframe block.
          </p>
        </div>

        <div id="gallery-track" className="flex w-[220%] gap-6 px-6 transition-transform duration-200 will-change-transform lg:px-10">
          {gallery.map((item) => (
            <article key={item} className="reveal min-h-[320px] min-w-[300px] flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-md md:min-w-[380px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Instagram Embed Ready</p>
              <div className="my-6 grid h-[190px] place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-sm font-semibold text-slate-500">
                {item}
              </div>
              <p className="text-sm text-slate-500">Drop your embed code here and keep the same card shell styling.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="reveal mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">Pricing</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Choose your growth velocity.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricing.map((plan, idx) => (
            <article
              key={plan.name}
              className={`reveal relative rounded-3xl border bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-luxe ${
                plan.featured ? "border-brand-teal ring-2 ring-brand-teal/30" : "border-slate-200 hover:border-slate-300"
              }`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-teal px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-black tracking-wide text-slate-950">{plan.name}</h3>
              <p className="mt-4 text-4xl font-black text-brand-teal">
                {plan.price}
                <span className="ml-1 text-base font-semibold text-slate-500">{plan.period}</span>
              </p>
              <ul className="mt-7 space-y-3 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-teal" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
        <div className="reveal rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">Contact</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Let&apos;s build your social engine.</h2>
          <form className="mt-8 grid gap-5">
            {[
              { label: "Name", type: "text" },
              { label: "Email", type: "email" },
              { label: "Company", type: "text" },
            ].map((field) => (
              <label key={field.label} className="grid gap-2 text-sm font-semibold text-slate-700">
                {field.label}
                <input
                  type={field.type}
                  placeholder={`Your ${field.label.toLowerCase()}`}
                  className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-teal"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Message
              <textarea
                rows={5}
                placeholder="Tell us about your goals"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-teal"
              />
            </label>
            <button type="submit" className="mt-3 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-brand-teal">
              Book a Strategy Call
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-black tracking-tight">
              <span className="text-brand-teal">Go</span>Social
            </p>
            <p className="text-sm text-slate-500">Strategic Content. Scalable Growth.</p>
          </div>
          <div className="flex gap-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
            <span className="rounded-full border border-slate-300 px-3 py-1">Instagram</span>
            <span className="rounded-full border border-slate-300 px-3 py-1">TikTok</span>
            <span className="rounded-full border border-slate-300 px-3 py-1">LinkedIn</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
