import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme on mount + when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand brand-text" to="/">
          i<span className="highlight">Notebook</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active-link" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div className="theme-toggle mx-3" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "☀️"}
          </div>

          {!localStorage.getItem("token") ? (
            <div className="d-flex">
              <Link className="btn nav-btn mx-2" to="/login" role="button">
                Login
              </Link>
              <Link className="btn nav-btn mx-2" to="/signup" role="button">
                Sign Up
              </Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="btn logout-btn">
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
