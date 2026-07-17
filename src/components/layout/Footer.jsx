function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

        {/* Project Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-600">
            LaunchPad AI
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            AI-powered marketing assistant for startups and small businesses.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LaunchPad AI. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;