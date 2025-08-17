import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Joshua Uwaoma
        </motion.h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Blockchain Developer | Web3 Enthusiast | Smart Contract Builder
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full">
          Connect Wallet
        </button>
      </section>

      {/* Bio Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-300">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I’m <span className="text-white font-bold">Joshua Uwaoma</span>, an experienced Web3 developer passionate about building
          decentralized applications that push the boundaries of blockchain technology.  
          I specialize in smart contract development, DeFi protocols, and exploring how blockchain can
          create open, borderless financial systems.  
          <br />  
          My goal is to leverage blockchain to solve real-world problems and contribute to the future
          of the decentralized internet.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-gray-800">
        <h2 className="text-3xl font-semibold mb-8 text-center text-blue-300">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Placeholder projects - replace later */}
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-400">Coming soon...</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-400">Coming soon...</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Project 3</h3>
            <p className="text-gray-400">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-300">Get In Touch</h2>
        <p className="text-gray-300 mb-6">
          Interested in collaborating or hiring me? Let’s connect!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-950 text-gray-500">
        © {new Date().getFullYear()} Joshua Uwaoma. All rights reserved.
      </footer>
    </div>
  );
}
