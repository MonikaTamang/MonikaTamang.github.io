"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero"
import Navbar from "@/components/NavBar";
import CursorGlow from "@/components/CursorGlow";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Reveal from "@/components/Reveal";
import ShootingStars from "@/components/ShootingStars";
import IntroWrapper from "@/components/IntroWrapper";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [startStars, setStartStars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartStars(true);
    }, 1200); // after intro animation starts

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {startStars && <ShootingStars />}


      {/* 🌌 Background Glow */}
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
              I'm a full-stack developer focused on building modern web applications using React, Next.js, Python, and FastAPI. I enjoy creating clean UI systems, scalable APIs, and production-ready applications.
            </p>
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
                { title: "Frontend", items: "React, Next.js, Tailwind CSS" },
                { title: "Backend", items: "Python, FastAPI, Node.js" },
                { title: "Tools", items: "Git, PostgreSQL, Docker" },
              ].map((skill, i) => (
                <Reveal
                  key={i}>
                  <div
                    className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 transition"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400">{skill.items}</p>
                  </div>
                </Reveal>
              ))}
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

              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-blue-500/50 transition">
                <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">
                  Expense Tracker App
                </h3>

                <p className="text-gray-400 mt-3">
                  Full-stack expense tracking app with analytics dashboard and real-time updates.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  React • FastAPI • PostgreSQL
                </p>

                <div className="mt-5 flex gap-6">
                  <a className="text-sm text-blue-400 hover:underline">Live</a>
                  <a className="text-sm text-blue-400 hover:underline">GitHub</a>
                </div>
              </div>

              <div className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-blue-500/50 transition">
                <h3 className="text-xl font-semibold text-blue-400 group-hover:text-blue-300">
                  Task Manager API
                </h3>

                <p className="text-gray-400 mt-3">
                  REST API with authentication and role-based access control.
                </p>

                <p className="text-sm text-gray-500 mt-3">
                  Python • FastAPI • JWT
                </p>

                <div className="mt-5">
                  <a className="text-sm text-blue-400 hover:underline">GitHub</a>
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
              Full Stack Developer (Self Projects)
            </h3>

            <p className="text-gray-400 text-sm">2024 – Present</p>

            <p className="text-gray-300 mt-2 max-w-2xl">
              Developed and deployed multiple full-stack applications using
              Next.js and FastAPI, focusing on performance and clean architecture.
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
            <div className="mt-8 text-gray-400 text-sm">
              Or email me directly:{" "}
              <span className="text-white"><a
                href="mailto:tamang.monika@gmail.com"
                className="text-blue-400 hover:underline"
              >
                tamang.monika@gmail.com
              </a></span>


              <p>💻 <span className="text-white">github.com/MonikaTamang</span></p>
            </div>
          </section>
        </Reveal>

      </div>
    </main>
  );
}