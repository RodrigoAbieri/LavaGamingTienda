import React from "react";

function ItemDetails(item) {

  return (
    <div>
        <img src={item.details.url} alt={item.details.description} width="500" height="300"></img>
        <p>{item.details.price}</p>
        <p>{item.details.description}</p>
    </div>
  );
}

export default ItemDetails;