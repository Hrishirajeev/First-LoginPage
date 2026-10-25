import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login-split.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function checkLogin(evt) {
    evt.preventDefault(); // stops page reload
    setError("");
    setSuccess("");

    // frontend validation
    if (email === "" || password === "") {
      setError("Please fill all the fields");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Enter a valid email");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // call backend (Render)
    axios
      .post("https://trendo-backend-oy2c.onrender.com/api/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data === true) {
          setSuccess("Login successful!");
          setTimeout(function () {
            navigate("/dashboard");
          }, 1000);
        } else {
          setError("Invalid email or password");
        }
      })
      .catch(function () {
        setError("Server not reachable. Try again.");
      });
  }

  return (
    <div className="login-page">
      <div className="brand-panel">
        <div className="circle c1"></div>
        <div className="circle c2"></div>

        <div className="brand-content">
          <div className="logo">T</div>
          <h1>Trendo</h1>
          <p>Where trends begin.</p>
        </div>
      </div>

      <div className="form-panel">
        <form className="login-card" onSubmit={checkLogin}>
          <h2 className="title">Welcome back!</h2>
          <p className="subtitle">Login to continue to Trendo</p>

          {error && <div className="alert error">{error}</div>}
          {success && <div className="alert success">{success}</div>}

          <label>Email</label>
          <input
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={handleEmail}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePassword}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;