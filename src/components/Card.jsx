import React from "react";
import image from "../images/mount-fuji.png";

const Card = (props) => {
  return (
    <div className="card">
      <img src={require(`../images/${props.item.imageUrl}`)} alt="logo" className="travel-image" />
      <i class="fa-solid fa-location-dot location-dot">
        <span className="location-text">{props.item.location}</span>
      </i>
      <a href={props.item.googleMapsUrl} className="google-maps">View on Google Maps</a>
      <h1>{props.item.title}</h1>
      <h4>{props.item.startDate} - {props.item.endDate}</h4>
      <p>{props.item.description}</p>
    </div>
  );
};

export default Card;
