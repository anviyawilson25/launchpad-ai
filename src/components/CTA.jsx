import { motion } from "framer-motion";

function CTA() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-slate-950
      py-28
      px-6
      "
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>


      <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}

        className="
        relative
        max-w-5xl
        mx-auto
        text-center
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-8
        py-16
        "
      >

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Start Your Journey
        </p>


        <h2
          className="
          mt-5
          text-4xl
          md:text-6xl
          font-extrabold
          text-white
          leading-tight
          "
        >
          Ready To Build Your
          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            to-purple-400
            bg-clip-text
            text-transparent
            "
          >
            {" "}Startup With AI?
          </span>
        </h2>


        <p
          className="
          mt-6
          max-w-2xl
          mx-auto
          text-lg
          text-slate-400
          leading-8
          "
        >
          Transform your idea into a complete brand with AI-generated
          pitches, marketing content, and business strategies.
        </p>



        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-5
          "
        >

          <button
            className="
            px-10
            py-4
            rounded-full
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-white
            font-semibold
            shadow-xl
            hover:scale-105
            transition
            "
          >
            Get Started 🚀
          </button>



          <button
            className="
            px-10
            py-4
            rounded-full
            border
            border-white/20
            text-white
            hover:bg-white/10
            transition
            "
          >
            Explore Features
          </button>


        </div>


      </motion.div>


    </section>
  );
}

export default CTA;