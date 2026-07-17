import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaUsers } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      text: "To help entrepreneurs transform their ideas into successful businesses using the power of Artificial Intelligence.",
    },
    {
      icon: <FaEye />,
      title: "Our Vision",
      text: "To make startup creation simple, accessible, and innovative for everyone.",
    },
    {
      icon: <FaUsers />,
      title: "Who We Help",
      text: "Students, entrepreneurs, freelancers, and early-stage startups looking for smart business solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-slate-950 py-28 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main About */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-cyan-400 uppercase tracking-widest font-semibold">
              About Us
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
              Building The Future Of
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Startup Creation
              </span>
            </h2>


            <p className="mt-6 text-lg text-slate-400 leading-8">
              LaunchPad AI is an AI-powered startup assistant that helps users
              convert their business ideas into professional brands.
              From elevator pitches to marketing campaigns, our platform
              provides everything needed to launch faster.
            </p>


            <p className="mt-5 text-lg text-slate-400 leading-8">
              By combining Artificial Intelligence with simple workflows,
              LaunchPad AI removes the complexity of starting a business.
            </p>


          </motion.div>


          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-10
            "
          >

            <div className="space-y-6">

              <div className="text-6xl">
                🤖
              </div>

              <h3 className="text-3xl font-bold text-white">
                AI-Powered Innovation
              </h3>

              <p className="text-slate-400 leading-7">
                Generate ideas, create branding strategies, and prepare
                marketing materials with intelligent AI assistance.
              </p>


            </div>

          </motion.div>

        </div>


        {/* Mission Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {cards.map((card,index)=>(

            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              transition={{
                duration:0.5,
                delay:index*0.15
              }}
              viewport={{once:true}}

              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              hover:-translate-y-3
              transition
              "
            >

              <div
                className="
                w-14
                h-14
                flex
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-r
                from-indigo-600
                to-cyan-500
                text-white
                text-2xl
                mb-6
                "
              >
                {card.icon}
              </div>


              <h3 className="text-2xl font-semibold text-white mb-4">
                {card.title}
              </h3>


              <p className="text-slate-400 leading-7">
                {card.text}
              </p>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;