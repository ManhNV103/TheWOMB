import React, { useState } from "react";

export default function Advertiser(props) {
  const [selected, setSelected] = useState(false);

  const handleClick = e => {
    setSelected(!selected);
    props.onSelect(props.id);
    if (!selected) {
      props.chosenAdvertisers.add(props.id);
    } else {
      props.chosenAdvertisers.delete(props.id);
    }
  };

  return (
    <div
     className={"advertiser-cell" + (selected ? " selected" : "")}
      onClick={handleClick}
    >
      <div className="advertiser-img-ratio">
        <img className="advertiser-img" src={props.image} alt={props.name} />
      </div>
    </div>
  );
}
