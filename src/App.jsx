export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-500">Your Name</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Blockchain Developer | Web3 Enthusiast | Smart Contracts
        </p>
        <a
          href="#projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a passionate blockchain developer focused on building decentralized
          applications and smart contracts. I’m constantly learning and exploring
          Web3 technologies, from Solidity and Hardhat to Ethers.js and React.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Solidity", "Hardhat", "Web3.js", "Ethers.js", "React", "Node.js", "TailwindCSS", "GitHub"].map((skill) => (
            <div
              key={skill}
              className="bg-gray-700 p-6 rounded-xl shadow-md hover:bg-gray-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">NFT Marketplace</h3>
            <p className="text-gray-400 mb-4">
              A decentralized NFT marketplace built with Solidity, Hardhat, and React.
            </p>
            <a href="#" className="text-indigo-500 hover:underline">View Project →</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Crypto Dashboard</h3>
            <p className="text-gray-400 mb-4">
              A dashboard showing live crypto prices using Web3.js and APIs.
            </p>
            <a href="#" className="text-indigo-500 hover:underline">View Project →</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-6">Let’s build something amazing together.</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-indigo-500">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-indigo-500">LinkedIn</a>
          <a href="mailto:your@email.com" className="hover:text-indigo-500">Email</a>
        </div>
      </section>
    </div>
  );
}
