import React, { useState, useEffect } from "react";
import Item from "./Item";

function ItemList() {
    const [infoItem, setInfoItem] = useState([]);
  
    let task = new Promise((resolve, reject) => {
      
        let array = [
        {
          id: "1",
          title: "Juego 1",
          price: 100  
        },     
        {
          id: "2",
          title: "Juego 2",
          price: 200
        },
        {
          id: "3",
          title: "Juego 3",
          price: 300
        }
      ];
  
      setTimeout(() => {
        resolve(array);
      }, 2000);
    });
  
    useEffect(() => {
        task.then(data => setInfoItem(data))
    },[])
  
    return (
      <>{infoItem.length > 0 && infoItem.map((t) => <Item infoProd={t} />)}</>
    );
  }
  
  export default ItemList;
