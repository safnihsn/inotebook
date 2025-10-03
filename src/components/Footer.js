import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>iNotebook</h5>
            <p className="text-light">
              Your secure digital notebook for storing notes in the cloud. Fill Free to Touch Us Anytime.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/notes" className="text-light text-decoration-none">My Notes</a></li>
              
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3">
              <Link to="https://github.com/safnihsn/inotebook" className="text-light"><i className="fab fa-github"></i></Link>
                 <Link to="" className="text-light"><i className="fab fa-twitter"></i></Link>
                       <Link to="" className="text-light"><i className="fab fa-linkedin"></i></Link>
            </div>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">© {new Date().getFullYear()} iNotebook. All rights reserved.</p>
          </div>
          <div className="col text-end">
            <small>Made with ❤️ by Jagriti Kanwar.</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;