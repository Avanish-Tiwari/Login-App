import { useState } from "react";
import { loginUser } from "../utils/api";

export default function Login({ onLogin, handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const data = await loginUser(email, password);

    if (data.token) {
      localStorage.setItem("token", data.token);
      onLogin(); // tell App.jsx login was successful
    } else {
      setError(data.error || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "100px auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Login</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: "100%",
          padding: "0.5rem",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <button onClick={handleRegister}
      style={{
          width: "100%",
          padding: "0.5rem",
          marginTop:"1rem",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >Register</button>
      <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#888" }}>
        Test: avanish@test.com / 1234
      </p>
    </div>
  );
}
