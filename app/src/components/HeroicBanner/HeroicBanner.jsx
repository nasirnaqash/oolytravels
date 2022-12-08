import React from "react";

const HeroicBanner = () => {
  return (
    <section
      className="section hero"
      style={{
        backgroundImage:
          "url('/assets/images/hero-bg-bottom.png') url('/assets/images/hero-bg-top.png')",
      }}
    >
      <div className="container">
        <img
          src="/assets/images/shape-1.png"
          width="61"
          height="61"
          alt="Vector Shape"
          className="shape shape-1"
        />

        <img
          src="/assets/images/shape-2.png"
          width="56"
          height="74"
          alt="Vector Shape"
          className="shape shape-2"
        />

        <img
          src="/assets/images/shape-3.png"
          width="57"
          height="72"
          alt="Vector Shape"
          className="shape shape-3"
        />

        <div className="hero-content">
          <p className="section-subtitle">Explore Your Travel</p>

          <h2 className="hero-title">See the magic</h2>

          <p className="hero-text">
            I travel not to go anywhere, but to go. I travel for travel's sake
            the great affair is to move.
          </p>

          <div className="btn-group">
            <a href="/enquire" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>

        <figure className="hero-banner">
          <img
            src="/assets/images/hero-banner.png"
            width="686"
            height="812"
            loading="lazy"
            alt="hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default HeroicBanner;
