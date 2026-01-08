import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // 🔥 THIS STOPS PAGE REFRESH

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>

      {/* 🔥 FORM WITH onSubmit */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 🔥 submit button */}
        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "10px" }}>
        New user?{" "}
        <span
          style={{ color: "#6366f1", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register here
        </span>
      </p>
    </div>
  );
}
