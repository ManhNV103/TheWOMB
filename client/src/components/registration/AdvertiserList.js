import React, { useState } from "react";
import Advertiser from "./Advertiser";

const AdvertiserList = (props) => {
  const [selected, setSelected] = useState([]);
  const imagesPerRow = 5;

  const onSelect = id => {
    let index = selected.indexOf(id);
    if (index < 0) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter(value => value !== id));
    }
  };

  let advertiserList = null;

  if(props.advertisers.length) {
	 advertiserList = props.advertisers.map(advertiser => {
	   return (
	     <div style={{ width: 100 / imagesPerRow + "%" }} key={advertiser.id}>
	       <Advertiser
	         id={advertiser.id}
	         name={advertiser.name}
	         image={advertiser.image}
	         onSelect={onSelect}
	         chosenAdvertisers={props.chosenAdvertisers}
	       />
	     </div>
	   );
	 });
  }


  return <div className="advertiser-list">{advertiserList}</div>;
};

export default AdvertiserList;
