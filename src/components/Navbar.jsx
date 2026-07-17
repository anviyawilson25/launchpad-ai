import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          LaunchPad AI
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-300 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-cyan-300 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-300 transition">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-300 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-white hover:text-cyan-300 transition">
            Login
          </button>

          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl px-6 py-6"
        >
          <ul className="space-y-6 text-white text-lg">

            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#features">Features</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <button className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold">
              Get Started
            </button>

          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;