import React from "react";

const FeatureCard = ({ data, smallTitle = false }) => {
  return (
    <div className="popular-card">
      <figure className="card-banner">
        <a href={`/packages/${data.id}`}>
          <img
            src={data.image}
            width="740"
            height="518"
            loading="lazy"
            alt={data.address}
            className="img-cover"
          />
        </a>

        <span className="card-badge">
          <ion-icon name="time-outline"></ion-icon>
          <time datetime="P12D">{data.days} Days</time>
        </span>
      </figure>

      <div className="card-content">
        <div className="card-wrapper">
          <div className="card-price">From {data.startingPrice}</div>

          <div className="card-rating">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>

            <data value="2">({data.rating})</data>
          </div>
        </div>

        <h3 className="card-title">
          {smallTitle ? data.title.substring(0, 100) + "..." : data.title}
        </h3>

        <address className="card-location">{data.address}</address>
      </div>
    </div>
  );
};

export default FeatureCard;
