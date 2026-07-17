import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pt-32 pb-24"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">

        {/* Left Side */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-sm">
            🚀 AI-Powered Startup Assistant
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Build Your
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Startup{" "}
            </span>
            With AI
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-8 max-w-xl">
            LaunchPad AI helps entrepreneurs transform ideas into professional
            businesses by generating elevator pitches, branding, landing page
            copy, marketing content, and much more using Artificial Intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-full border border-slate-500 text-white hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-5 mt-14">

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">500+</h2>
              <p className="text-slate-300 mt-2">Ideas Created</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">95%</h2>
              <p className="text-slate-300 mt-2">AI Accuracy</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-5 text-center">
              <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
              <p className="text-slate-300 mt-2">AI Support</p>
            </div>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&auto=format&fit=crop&q=80"
            alt="AI Illustration"
            className="w-full max-w-lg rounded-3xl shadow-[0_20px_80px_rgba(99,102,241,0.5)]"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;