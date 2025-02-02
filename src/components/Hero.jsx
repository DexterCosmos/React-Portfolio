// src/components/Hero.js
import React from "react";
import images from "../assets/images.jsx";

const Hero = () => {
    return (
        <div className="hero text-center" id="home">
            <div className="container">
                <div className="banner-outline has-after">
                    <div
                        className="hero-banner img-holder has-after"
                        style={{ width: "500px", height: "680px" }}
                    >
                        <img
                            src={images.Herobanner}
                            width="500"
                            height="680"
                            alt="Drew Hays"
                            className="img-cover"
                        />

                    </div>

                    <span className="span title">Nomaan</span>
                </div>

                <div className="hero-content">
                    <h1 className="h1 title">
                        Number's tell stories – I craft them to life...
                    </h1>

                    <div className="wrapper">
                        <a href="https://github.com/DexterCosmos" className="btn btn:hover">
                            <span className="span">Github</span>
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nomaan-ansari-121320211/"
                            className="btn btn:hover"
                        >
                            <span className="span">LinkedIn</span>
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </a>

                        <a
                            href={images.resume}
                            className="btn btn:hover"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="span">Download CV</span>
                            <i className="fas fa-download gradient-color" aria-hidden="true"></i>
                        </a>
                    </div>

                    <p className="hero-text">
                        Data is your canvas, insights are your masterpiece.
                    </p>
                </div>

                <img
                    src={images.Heroshape1}
                    width="559"
                    height="232"
                    alt="shape"
                    className="shape shape-1"
                />

                <img
                    src={images.Heroshape2}
                    width="1358"
                    height="497"
                    alt="shape"
                    className="shape shape-2"
                />
            </div>
        </div>
    );
};

export default Hero;
