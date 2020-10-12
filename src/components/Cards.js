import React from "react";
import ImageArray from "./CardData";
import * as utils from "./utils";

const Cards = (props) => {
  return utils.suffleArray(ImageArray).map((image) => (
    <div key={image} className="image-frame">
      <img src={image} alt="" name={image} onClick={props.click} />
    </div>
  ));
};

export default Cards;
