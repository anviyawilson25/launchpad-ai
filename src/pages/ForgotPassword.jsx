import { useState } from "react";
import "./ForgotPassword.css";


function ForgotPassword() {

  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if(email === "") {
      alert("Please enter your email");
      return;
    }

    alert("Password reset link sent");
  };


  return (

    <div className="forgot-container">

      <div className="forgot-box">

        <h1>Forgot Password</h1>

        <p>Enter your email to reset your password</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />


          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>

    </div>

  );
}


export default ForgotPassword;