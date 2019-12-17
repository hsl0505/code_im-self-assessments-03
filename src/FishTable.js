import React from "react";
import FishTableRow from "./FishTableRow";

//TODO: FishTable will have many FishTableRows

const FishTable = props => {
  const arr = props.fishes;
  const mapArr = arr.map(ele => <FishTableRow key={ele.name} fish={ele} />);
  return <div>{mapArr}</div>;
};

export default FishTable;
