import { motion } from "framer-motion";
import { FaLightbulb, FaRobot, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb />,
    step: "01",
    title: "Enter Your Startup Idea",
    description:
      "Provide your business name, category, target audience, and goals through a simple AI-powered form.",
  },
  {
    icon: <FaRobot />,
    step: "02",
    title: "AI Creates Your Brand",
    description:
      "LaunchPad AI analyzes your idea and generates branding, elevator pitch, landing page copy, and marketing content.",
  },
  {
    icon: <FaRocket />,
    step: "03",
    title: "Launch With Confidence",
    description:
      "Review your AI-generated results and use them to build and promote your startup.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-slate-950 py-28 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Workflow
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            How LaunchPad AI Works
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-lg">
            Transform your idea into a complete startup identity in three simple steps.
          </p>

        </motion.div>


        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}

              className="
              relative
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

              {/* Number */}
              <span className="absolute top-5 right-6 text-5xl font-bold text-white/10">
                {item.step}
              </span>


              {/* Icon */}
              <div
                className="
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                text-3xl
                text-white
                bg-gradient-to-r
                from-indigo-600
                to-cyan-500
                mb-8
                "
              >
                {item.icon}
              </div>


              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>


              <p className="text-slate-400 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;