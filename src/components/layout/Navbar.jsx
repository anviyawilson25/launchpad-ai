function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            LaunchPad AI
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Sign In Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Sign In
        </button>

      </div>
    </nav>
  );
}

export default Navbar;