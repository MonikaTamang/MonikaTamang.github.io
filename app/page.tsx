"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import CursorGlow from "@/components/CursorGlow";
import Reveal from "@/components/Reveal";
import ShootingStars from "@/components/ShootingStars";
import ContactForm from "@/components/ContactForm";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [startStars, setStartStars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartStars(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {startStars && <ShootingStars />}

      <div className="absolute inset-0 -z-10" />
      <CursorGlow />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 md:px-20">

        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <Reveal>
          <section id="about" className="py-24">
            <h2 className="text-3xl font-semibold mb-10">
              <span className="border-b border-white/10 pb-2">About Me</span>
            </h2>

            <p className="text-gray-400 max-w-3xl leading-relaxed">
              Full-stack developer with 3+ years of experience building production-ready web applications, business websites, and API systems.

Experienced in React, Next.js, Node.js, Laravel, Django and MySQL with hands-on work in real business environments including UAE-based companies.

I focus on building scalable, clean, and business-driven systems rather than just static websites.</p>
          </section>
        </Reveal>

        {/* SKILLS */}
        <Reveal>
          <section className="py-24">
            <h2 className="text-3xl font-semibold mb-10">
              <span className="border-b border-white/10 pb-2">Skills</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Frontend", items: "React, Next.js, Tailwind CSS, JavaScript" },
                { title: "Backend", items: "Node.js, Laravel, PHP, Python (Django), REST APIs" },
                { title: "Database & Tools", items: "MySQL, Git, Postman, Vite" },

              ].map((skill, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 transition"
                >
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* WHAT I BUILT */}
        <Reveal>
          <section className="py-24">
            <h2 className="text-3xl font-bold mb-10">What I Built</h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
    <div>✔ Built and deployed UAE business websites</div>
    <div>✔ Integrated frontend with backend APIs (Node.js / Laravel)</div>
    <div>✔ Developed real-time restaurant ordering system</div>
    <div>✔ Worked with production MySQL databases</div>
  </div>
</section>
        </Reveal>


        {/* LIVE PROJECTS */}
        <Reveal>
          <section className="py-24">
            <h2 className="text-3xl font-bold mb-10">Live Projects</h2>

            <div className="grid md:grid-cols-3 gap-6">

              {/* AAYU */}
              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-blue-500/50 transition">
                <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">
                  Aayu Groups – Business Management Website
                </h3>

                <p className="text-gray-400 mt-3">
                  Full-stack business management website with admin dashboard and content management system built for a tax and accounting service company.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  Next.js • Laravel Filament • MySQL • HTML • CSS • JavaScript • Admin Panel System
                </p>

                <div className="mt-5">
                  <a
                    href="https://aayugroups.com/"
                    target="_blank"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Live Website
                  </a>
                </div>
              </div>

              {/* ALGEDAR */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">Algedar Group</h3>

                <p className="text-gray-400 mt-3">
                  Business website developed for a Türkiye-based company with service pages, company branding, and responsive layout.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  HTML • CSS • JavaScript
                </p>

                <a
                  href="https://algedargroup.com"
                  target="_blank"
                  className="text-sm text-blue-400 hover:underline mt-3 inline-block"
                >
                  Live Website
                </a>
              </div>

              {/* URANOVA */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">Uranova Global Trading</h3>

                <p className="text-gray-400 mt-3">
                  Corporate business website developed for a trading company showcasing services, company profile, and contact system.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  HTML • CSS • JavaScript • PHP
                </p>

                <a
                  href="https://uranovaglobaltrading.com"
                  target="_blank"
                  className="text-sm text-blue-400 hover:underline mt-3 inline-block"
                >
                  Live Website
                </a>
              </div>

            </div>
          </section>
        </Reveal>

        {/* PROJECTS */}
        <Reveal>
          <section id="projects" className="py-24">
            <h2 className="text-3xl font-semibold mb-10">
              <span className="border-b border-white/10 pb-2">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* EXPENSE TRACKER */}
              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-blue-500/50 transition">
                <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">
                  Expense Tracker App
                </h3>

                <p className="text-gray-400 mt-3">
                  Full-stack expense tracking app with analytics dashboard and category-based financial insights.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  React • Node.js • MySQL
                </p>

                <div className="mt-5 flex gap-6">
                  <a
                    href="https://expense-tracker-zeta-jet-14.vercel.app/"
                    target="_blank"
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Live
                  </a>

                  <a
                    href="https://github.com/MonikaTamang"
                    target="_blank"
                    className="text-sm text-gray-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* RESTAURANT */}
              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-blue-500/50 transition">
                <h3 className="text-xl text-blue-400">
                  Restaurant Ordering System (Waiter App)
                </h3>

                <p className="text-gray-400 mt-3">
                 A real-time ordering system integrated with an existing .NET billing system using custom Node.js APIs.

Handled order processing, menu management, and system integration with MySQL database.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  Next.js • Node.js • MySQL • REST APIs
                </p>

                <div className="mt-5">
                  <a className="text-sm text-blue-400 hover:underline">
                    GitHub (Private / Client Project)
                  </a>
                </div>
              </div>

            </div>
          </section>
        </Reveal>

        {/* EXPERIENCE */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-10">Experience</h2>

          <div>
            <h3 className="text-xl text-blue-400">
              Full Stack Developer (Production Systems)
            </h3>

            <p className="text-gray-400 text-sm">2020 – Present</p>

            <p className="text-gray-300 mt-2 max-w-2xl">
              Built and deployed full-stack applications including business websites, CRM-style systems, and restaurant ordering platforms using React, Next.js, Laravel, and Node.js. Worked on API development, database design, and integration with enterprise systems.
            </p>
          </div>
        </section>

        {/* FOCUS */}
        <Reveal>
          <section className="py-24">
            <h2 className="text-3xl font-bold mb-10">What I Focus On</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Clean UI & UX",
                "Scalable Backend",
                "Performance Optimization",
              ].map((item) => (
                <div
                  key={item}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* CONTACT */}
        <Reveal>
          <section id="contact" className="py-24 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>

            <p className="text-gray-400 mb-6">
              Feel free to reach out for opportunities or collaboration.
            </p>

            <ContactForm />
            <div className="mt-6 flex gap-4">

              <a
                href="/MonikaTamang_CV.pdf"
                target="_blank"
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm"
              >
                View CV
              </a>

              <a
                href="/MonikaTamang_CV.pdf"
                download="MonikaTamang_CV.pdf"
                className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm"
              >
                Download
              </a>

            </div>

            <div className="mt-8 text-gray-400 text-sm">
              <p>
                Email:{" "}
                <a
                  href="mailto:tamang.monika@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  tamang.monika@gmail.com
                </a>
              </p>

              <p className="mt-2">
                GitHub:{" "}
                <a
                  href="https://github.com/MonikaTamang"
                  className="text-blue-400 hover:underline"
                >
                  github.com/MonikaTamang
                </a>
              </p>
            </div>
          </section>
        </Reveal>

      </div>
      <FloatingActions />
    </main>
  );
}