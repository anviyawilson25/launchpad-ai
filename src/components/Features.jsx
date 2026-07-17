import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaBrain, 
  FaPalette, 
  FaFileAlt, 
  FaBullhorn, 
  FaChartLine 
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "AI Elevator Pitch",
    description:
      "Generate a professional startup pitch in seconds with AI-powered suggestions.",
  },
  {
    icon: <FaBrain />,
    title: "Brand Blueprint",
    description:
      "Create your brand identity, mission, vision, and tone automatically.",
  },
  {
    icon: <FaPalette />,
    title: "Brand Design",
    description:
      "Get AI-powered ideas for colors, branding, and visual identity.",
  },
  {
    icon: <FaFileAlt />,
    title: "Landing Page Copy",
    description:
      "Generate compelling website copy that attracts your audience.",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Content",
    description:
      "Create social media captions and promotional content instantly.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth",
    description:
      "Receive AI-driven recommendations to improve your startup strategy.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative bg-slate-950 py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>


      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 font-semibold tracking-widest uppercase">
            Features
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Powerful AI Tools For Startups
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to create, brand, and launch your startup
            with the power of Artificial Intelligence.
          </p>

        </motion.div>


        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}

              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              shadow-xl
              hover:border-cyan-400/50
              transition
              "
            >

              <div
                className="
                w-16
                h-16
                flex
                items-center
                justify-center
                rounded-2xl
                text-3xl
                text-white
                bg-gradient-to-r
                from-indigo-600
                to-cyan-500
                mb-6
                "
              >
                {feature.icon}
              </div>


              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>


              <p className="text-slate-400 leading-7">
                {feature.description}
              </p>


              <button className="mt-6 text-cyan-400 font-semibold hover:text-white transition">
                Explore →
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;