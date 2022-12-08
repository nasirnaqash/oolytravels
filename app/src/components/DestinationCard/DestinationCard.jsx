import React from "react";

const DestinationCard = ({ data }) => {
  return (
    <a href={`/destinations/${data.id}`} className="destination-card">
      <figure className="card-banner">
        <img
          src={data.image}
          width="1140"
          height="1100"
          loading="lazy"
          alt="Malé, Maldives"
          className={`
            
            img-cover
            ${data.size === "small" ? "!h-[300px]" : "!h-[600px]"}
              !rounded-7xl
            
            `}
        />
      </figure>

      <div className="card-content">
        <h3 className="h3 card-title !mb-6">{data.country}</h3>
        <p className="card-subtitle !text-8xl">{data.state}</p>
      </div>
    </a>
  );
};

export default DestinationCard;
