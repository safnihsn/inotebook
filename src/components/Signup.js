import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // new CSS

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.cpassword) {
      props.showAlert("Passwords do not match", "danger");
      return;
    }
    const { name, email, password } = credentials;
    const response = await fetch(
      "https://inotebook-xew3.onrender.com/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ name, email, password }),
      }
    );

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Account created successfully!", "success");
    } else {
      props.showAlert(json.error || "Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-heading">✨ Create an Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Name
            </label>
            <input
              type="text"
              className="form-control input-field"
              id="name"
              name="name"
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control input-field"
              id="email"
              name="email"
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control input-field"
              id="password"
              name="password"
              onChange={onChange}
              required
              minLength={8}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label fw-semibold">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control input-field"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              required
              minLength={8}
            />
          </div>

          <button type="submit" className="btn btn-signup">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
