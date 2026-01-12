import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // new CSS

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://inotebook-xew3.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      props.showAlert("Logged in successfully!", "success");
      navigate("/");
    } else {
      props.showAlert(json.error || "Invalid details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-heading">🔐 Login to <span className="highlight">iNoteBook</span></h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control input-field"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control input-field"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
