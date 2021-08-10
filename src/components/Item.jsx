import React from "react";

function Item(props) {
  const itemStyle = {
    border: "2px solid blue",
    width: "300px",
    display: "inline-block",
    padding: "1% 1% 1% 1%"
  }

  return (
    <div style={itemStyle}>
        <h3>{props.infoProd.title}</h3>
        <h6>{props.infoProd.id}</h6>
        <p>{props.infoProd.price}</p>
    </div>
  );
}

export default Item;