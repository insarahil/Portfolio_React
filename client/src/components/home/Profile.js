import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-detials">
            <div className="col">
              <div className="col-icon">
                <a href="/">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram-square"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello I'M <span className="highlighted-text">Raheel</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {""}
                <h1>
                  {""}
                  <Typewriter
                    options={{
                      strings: [
                        "MERN Stack Dev ⚛️",
                        "Full Stack Dev🌐",
                        "HTML CSS & JavaScript Dev 🔴",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </span>
              <span className="profile-role-tagline primary-text">
                Knack of building applications with front and back end
                operations
              </span>
            </div>
            <div className="profile-option">
              <button className="btn primary-btn">Hire Me</button>
              <a href="Resume.pdf" download="Raheel.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
