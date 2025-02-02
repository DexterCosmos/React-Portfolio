// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section className="section about" aria-label="about-me" id="about">
      <div className="container">
        <div className="tab-container">
          <ul className="tab-btn-list">
            <li className="tab-btn-item">
              <button className="tab-btn title h6 active" data-tab-btn="about">
                About Me
              </button>
            </li>
            <li className="tab-btn-item">
              <button className="tab-btn title h6" data-tab-btn="skillset">
                Skillset
              </button>
            </li>
            <li className="tab-btn-item">
              <button className="tab-btn title h6" data-tab-btn="Certificates">
                Certificates
              </button>
            </li>
            <li className="tab-btn-item">
              <button className="tab-btn title h6" data-tab-btn="Visualization">
                Visualizations
              </button>
            </li>
          </ul>

          {/* About Section */}
          <div className="tab-content active" data-tab-content="about">
            <div className="grid-list">
              <figure
                className="about-banner img-holder"
                style={{ "--width": "570", "--height": "420" }}
                data-tilt
              >
                <img
                  src="./assets/images/about-banner.png"
                  width="570"
                  height="420"
                  loading="lazy"
                  alt="about banner"
                  className="img-cover"
                />
              </figure>

              <div className="about-content">
                <h2 className="h4 title section-title">
                  A curious mind in the vast sea of data.
                </h2>
                <p className="section-text">
                  A curious mind navigating through complex patterns, uncovering
                  insights hidden in numbers, transforming raw data into
                  meaningful stories, a small part of the larger picture of
                  progress, driven by a passion to make sense of the world
                  through analysis.
                </p>

                <ul className="about-list">
                  <li className="about-item">
                    <p className="list-title">Name</p>
                    <span className="span title h5">Nomaan Ansari</span>
                  </li>
                  <li className="about-item">
                    <p className="list-title">Phone Number</p>
                    <span className="span title h5">(8080) 219935</span>
                  </li>
                  <li className="about-item">
                    <p className="list-title">Email Address</p>
                    <span className="span title h5">
                      Dexter.Cosmos@outlook.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skillset Section */}
          <div className="tab-content" data-tab-content="skillset">
            <div className="grid-list">
              <div className="skill-content">
                <h3 className="h4 title section-title">
                  Data without direction is just noise — I bring clarity and
                  strategy with my skillset.
                </h3>
                <p className="section-text">
                  In a world of endless data, I filter the noise and uncover
                  insights—turning numbers into narratives that drive impactful
                  decisions.
                </p>

                <ul className="skill-list">
                  <li>
                    <div className="skill-wrapper">
                      <span className="span">Data cleaning</span>
                      <span className="value">95%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "95%" }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-wrapper">
                      <span className="span">Insights Generation</span>
                      <span className="value">90%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "90%" }}></div>
                    </div>
                  </li>
                  <li>
                    <div className="skill-wrapper">
                      <span className="span">Data Visualization & Reporting</span>
                      <span className="value">92%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: "92%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>

              <figure className="skill-banner img-holder" data-tilt>
                <img
                  src="./assets/images/skill-banner.png"
                  width="570"
                  height="420"
                  loading="lazy"
                  alt="skill banner"
                  className="img-cover"
                />
              </figure>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="tab-content" data-tab-content="Certificates">
            <h3 className="h4 title section-title">
              Certified Data Analyst with proven expertise in data analysis,
              visualization, and statistical techniques.
            </h3>
            <ul className="grid-list">
              {[1, 2, 3].map((num) => (
                <li key={num}>
                  <div className="Certificates">
                    <figure className="card-banner img-holder" data-tilt>
                      <img
                        src={`./assets/images/Certificate-${num}.svg`}
                        width="534"
                        height="383"
                        loading="lazy"
                        alt="Certificate"
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visualization Section */}
          <div className="tab-content" data-tab-content="Visualization">
            <ul className="grid-list">
              {[1, 2, 3, 4].map((num) => (
                <li key={num}>
                  <div className="exhibition-card">
                    <figure className="card-banner img-holder" data-tilt>
                      <img
                        src={`./assets/images/visualization-${num}.gif`}
                        width="376"
                        height="200"
                        loading="lazy"
                        alt="Visualization"
                        className="img-cover"
                      />
                    </figure>
                    <div className="card-icon">
                      <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
