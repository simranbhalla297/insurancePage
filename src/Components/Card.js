import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="section2-content">
      <div className="section2-item">
        <img src={props.details.imgUrl} className="middle_img" />
        <h3 className="header3">{props.details.heading}</h3>
        <p className="para dark">{props.details.description}</p>
      </div>
    </div>
  );
}

export default Card;
