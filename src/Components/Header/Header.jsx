import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.drsnapchat.com/wp-content/uploads/2023/05/cropped-NRP0TWTyz8C0TwwIWBiCb3YuLATOd9tquS3TXr8T-61x60.webp"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  الصفحة الرئيسية
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  خدماتنا
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  اتصل بنا
                </Link>
              </li>
            </ul>
              <li className="nav-item">Make a call: +966575770510</li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
