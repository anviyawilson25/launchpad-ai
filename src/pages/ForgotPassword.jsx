import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaRocket } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert("Password reset link sent to your email!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            LaunchPad AI
          </h2>

          <div className="w-20 h-20 mx-auto mt-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-600/40">
            <FaRocket className="text-white text-4xl" />
          </div>

          <h1 className="text-4xl font-bold text-white mt-5">
            Forgot Password
          </h1>

          <p className="text-gray-300 mt-2">
            Enter your email to receive a password reset link.
          </p>

        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition duration-300 hover:scale-105"
          >
            Send Reset Link
          </button>

        </form>

        <p className="text-center text-gray-300 mt-6">
          Remember your password?
          <Link
            to="/login"
            className="text-purple-400 hover:text-purple-300 font-semibold ml-2"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;