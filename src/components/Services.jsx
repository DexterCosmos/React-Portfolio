// src/components/Services.js
import React from "react";

const Services = () => {
  return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="container">
        <ul className="service-list">
          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-icon-4.svg"
                  width="80"
                  height="80"
                  loading="lazy"
                  alt="Data Cleaning Service"
                />
              </div>
              <h3 className="card-title">
                <a href="#">Data Cleaning & Standardization</a>
              </h3>
            </div>
          </li>

          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-icon-1.svg"
                  width="80"
                  height="80"
                  loading="lazy"
                  alt="Data Analysis Service"
                />
              </div>
              <h3 className="card-title">
                <a href="#">Data Analysis & Insights Generation</a>
              </h3>
            </div>
          </li>

          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-icon-2.svg"
                  width="80"
                  height="80"
                  loading="lazy"
                  alt="Data Visualization Service"
                />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Data Visualization &<br /> Reporting
                </a>
              </h3>
            </div>
          </li>

          <li className="service-item">
            <div className="service-card">
              <div className="card-icon">
                <img
                  src="./assets/images/service-icon-3.svg"
                  width="80"
                  height="80"
                  loading="lazy"
                  alt="Business Intelligence Service"
                />
              </div>
              <h3 className="card-title">
                <a href="#">
                  Business Intelligence &<br /> Performance
                </a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
