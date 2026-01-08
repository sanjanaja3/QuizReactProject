import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
    return emailRegex.test(data.email) && passRegex.test(data.password);
  };

  const submit = () => {
    if (!validate()) {
      alert("Invalid email or password");
      return;
    }

    // get existing users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check duplicate email
    const exists = users.find((u) => u.email === data.email);
    if (exists) {
      alert("User already registered");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered successfully");
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={submit}>Register</button>
    </div>
  );
}
