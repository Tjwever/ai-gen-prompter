import Image from "next/image";
import Main from "./components/Main";
import PromptOuput from "./components/PromptOutput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="z-10 w-full max-w-5xl flex items-center justify-between font-mono text-sm p-4 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white">AI Prompt Generator</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <br />

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl p-8 bg-gray-900 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-white mb-6">Main Component</h2>
        <Main />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl p-8 bg-gray-900 rounded-lg shadow-lg mt-8 border border-gray-300">
        <h2 className="text-2xl font-bold text-white mb-6">Text Outputs</h2>
        <div className="w-full space-y-4">
          <PromptOuput />
        </div>
        <div className="mt-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Generate New Outputs
          </button>
        </div>
      </div>

      <footer className="w-full max-w-5xl mt-16 p-8 bg-gray-800 rounded-lg shadow-md text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">AI Prompt Generator is your go-to tool for creating engaging AI prompts.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-300">Email: info@aipromptgenerator.com</p>
            <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2024 AI Prompt Generator. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
