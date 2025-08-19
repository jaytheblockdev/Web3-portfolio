import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Hero Section
function Hero() {
  return (
    <section
      id="home"
      className="relative h-[120vh] flex flex-col justify-center items-center text-center text-white"
    >
      {/* Background image with reduced blur */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${process.env.PUBLIC_URL || ""}/profile-bg.jpeg`}
          alt="Joshua Uwaoma"
          className="w-full h-full object-cover blur-[1px]"
        />
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero content */}
      <h1 className="text-7xl font-bold drop-shadow-lg">Joshua Uwaoma</h1>
      <p className="mt-4 text-2xl drop-shadow-md">
        Blockchain Developer • Web3 Enthusiast • Smart Contracts
      </p>

      {/* Call to action buttons */}
      <div className="mt-8 flex gap-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-2xl font-medium shadow-md transition">
          View My Work
        </button>
        <button className="border border-white px-8 py-4 rounded-2xl font-medium hover:bg-white hover:text-black transition">
          Contact
        </button>
      </div>
    </section>
  );
}

// Main App
export default function App() {
  const [showButton, setShowButton] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
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

      {/* Hero Section */}
      <Hero />

      {/* About */}
      <section id="about" className="scroll-mt-24 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m an experienced Web3 developer passionate about building decentralized applications and Solidity smart contracts that push the boundaries of blockchain technology. I specialize in smart contract development, DeFi protocols, and exploring how blockchain can create open, borderless financial systems. I care about clean architecture, secure code, and creating on-chain products that are actually useful.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-300">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Solidity", "Hardhat", "Ethers.js", "Web3.js",
              "React", "Node.js", "TailwindCSS", "Git/GitHub"
            ].map((skill) => (
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
            {[1, 2].map((n) => (
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
          <h2 className="text-3xl font-bold mb-4 text-indigo-300">Got an Idea? Let’s Ship It 🚀</h2>
          <p className="text-gray-300 mb-6">
            Whether you’re building the next dApp, smart contract, or Web3 platform, I’d love to collaborate.
          </p>
          <a href="mailto:your.email@example.com" className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium">
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} Joshua Uwaoma
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
