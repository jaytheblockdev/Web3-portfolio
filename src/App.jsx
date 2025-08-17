export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 shadow-md bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold">My Web3 Portfolio</h1>
        <p className="text-gray-600">Aspiring Blockchain Developer</p>
      </header>

      <section className="p-10 text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h2>
        <p className="text-lg max-w-2xl mx-auto">
          I build decentralized applications (DApps), smart contracts, and explore the future of Web3.
        </p>
      </section>

      <section className="p-10">
        <h3 className="text-3xl font-bold mb-6 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">ERC-20 Token</h4>
            <p className="text-gray-600 mb-4">
              A custom cryptocurrency built with Solidity and deployed on Ethereum testnet.
            </p>
            <a href="#" className="text-indigo-600 font-medium hover:underline">View Project</a>
          </div>
        </div>
      </section>

      <section className="p-10 bg-gray-100 text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
        <p className="text-gray-700 mb-4">
          Interested in working together? Reach out to me on my socials.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-indigo-600 font-medium hover:underline">GitHub</a>
          <a href="#" className="text-indigo-600 font-medium hover:underline">LinkedIn</a>
          <a href="#" className="text-indigo-600 font-medium hover:underline">Twitter</a>
        </div>
      </section>

      <footer className="p-6 text-center text-gray-500 bg-white">
        © {new Date().getFullYear()} [Joshua Uwaoma] | Built with ❤️ for Web3
      </footer>
    </div>
  );
}
