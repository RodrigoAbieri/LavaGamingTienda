import React, { useState, useEffect } from "react";
import ItemDetails from "./ItemDetails";


function ItemDetailContainer(props) {
    
  const [detailItem, setDetailItem] = useState([]);

  let getIntems = new Promise((resolve, reject) => {
    let array = {
      price: "$5000",
      url: "https://www.irrompibles.net/irrwp/wp-content/uploads/2018/12/images_2018_informes_red-dead-redemption-2_red-dead-redemption-2-review.jpg",
      description: "Red Dead Redemption 2",
    };

    setTimeout(() => {
      resolve(array);
    }, 2000);
  });

  useEffect(() => {
    getIntems.then((data) => setDetailItem(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ItemDetails details={detailItem} />
    </>
  );
}

export default ItemDetailContainer;