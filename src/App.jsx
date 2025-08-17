export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold mb-6 animate-pulse">🚀 My Web3 Portfolio</h1>
      <p className="text-lg text-gray-300 mb-10">
        Blockchain Developer | Smart Contracts | DApps
      </p>

      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
