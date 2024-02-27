import React from "react";

const Photo = (props) => {
  return (
    <div>
      <img
        src={props.url}
        style={{ width: "100%", height: "auto", borderRadius: "14px" }}
      />
      <p>{props.description}</p>
    </div>
  );
};

export default Photo;
