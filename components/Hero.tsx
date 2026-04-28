"use client";
import TypewriterLoop from "./Typewriter";
import  MagneticButton  from "./Magneticbutton";
import { motion } from "framer-motion";
import IntroWrapper from "./IntroWrapper";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <IntroWrapper>
        <section className="h-screen flex flex-col justify-center">

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-blue-400 mb-3 tracking-[0.2em] text-sm uppercase"
            >
                Full Stack Developer
            </motion.p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-400">
                    <TypewriterLoop text ="Monika Tamang" />
                </span>
            </h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 mt-6 max-w-xl"
            >
                I build scalable, high-performance web applications.
            </motion.p>
            <div className="mt-10 flex gap-4">
                <MagneticButton>
              <a href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-blue-500/20"
            >
              View Projects
            </a>
            </MagneticButton>
            <MagneticButton>

            <a href="#contact"
              className="border border-white/20 hover:border-white px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
            </MagneticButton>
          </div>

        </section>
        </IntroWrapper>
    );
}