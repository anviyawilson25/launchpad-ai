import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-slate-950 border-t border-white/10 py-16 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand */}
          <div>

            <h2
              className="
              text-3xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-400
              to-purple-400
              bg-clip-text
              text-transparent
              "
            >
              LaunchPad AI
            </h2>


            <p className="mt-5 text-slate-400 leading-7">
              Empowering entrepreneurs to transform ideas into successful
              businesses using Artificial Intelligence.
            </p>


            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                bg-white/10
                text-white
                hover:bg-cyan-500
                transition
                "
              >
                <FaGithub />
              </a>


              <a
                href="#"
                className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                bg-white/10
                text-white
                hover:bg-cyan-500
                transition
                "
              >
                <FaLinkedin />
              </a>


              <a
                href="#"
                className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                bg-white/10
                text-white
                hover:bg-cyan-500
                transition
                "
              >
                <FaTwitter />
              </a>

            </div>

          </div>



          {/* Product */}
          <div>

            <h3 className="text-white font-semibold text-xl mb-5">
              Product
            </h3>


            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white transition">
                Features
              </li>

              <li className="hover:text-white transition">
                How It Works
              </li>

              <li className="hover:text-white transition">
                Pricing
              </li>

              <li className="hover:text-white transition">
                Updates
              </li>

            </ul>

          </div>




          {/* Company */}
          <div>

            <h3 className="text-white font-semibold text-xl mb-5">
              Company
            </h3>


            <ul className="space-y-3 text-slate-400">

              <li className="hover:text-white transition">
                About
              </li>

              <li className="hover:text-white transition">
                Careers
              </li>

              <li className="hover:text-white transition">
                Blog
              </li>

              <li className="hover:text-white transition">
                Contact
              </li>

            </ul>

          </div>




          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold text-xl mb-5">
              Contact
            </h3>


            <div className="flex items-center gap-3 text-slate-400">

              <FaEnvelope className="text-cyan-400"/>

              support@launchpadai.com

            </div>


            <p className="mt-4 text-slate-400">
              Kerala, India
            </p>


          </div>


        </div>



        {/* Bottom */}
        <div
          className="
          mt-14
          pt-8
          border-t
          border-white/10
          text-center
          text-slate-500
          "
        >

          © 2026 LaunchPad AI. All Rights Reserved.

        </div>


      </div>


    </footer>
  );
}

export default Footer;