import React from "react";

const Image = (props) => {
  return (
    <img
      className={props.className}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Image;
