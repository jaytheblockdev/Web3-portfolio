import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-gray-900/70 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-lg font-bold tracking-wide">
            Joshua Uwaoma
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-indigo-400">Home</a>
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#skills" className="hover:text-indigo-400">Skills</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="scroll-mt-24 min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Joshua Uwaoma
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Blockchain Developer • Web3 Enthusiast • Smart Contracts
          </motion.p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-indigo-500 hover:bg-indigo-500/10 px-6 py-3 rounded-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m a Web3 developer focused on building decentralized applications and
            Solidity smart contracts. I care about clean architecture, secure code,
            and creating on-chain products that are actually useful.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-300">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Solidity","Hardhat","Ethers.js","Web3.js","React","Node.js","TailwindCSS","Git/GitHub"]
              .map((skill) => (
              <div key={skill} className="bg-gray-700/70 px-4 py-6 rounded-xl text-center hover:bg-gray-700 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-300">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1,2].map((n) => (
              <div key={n} className="bg-gray-800 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">Project {n}</h3>
                <p className="text-gray-400 mb-4">
                  Coming soon — this is where your smart contract & DApp case studies will go.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-indigo-400 hover:underline">GitHub</a>
                  <a href="#" className="text-indigo-400 hover:underline">Live Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Want to collaborate or hire me? I’m open to roles and freelance work.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} Joshua Uwaoma
      </footer>
    </div>
  );
}
