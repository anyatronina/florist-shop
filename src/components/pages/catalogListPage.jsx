import React, { useEffect, useState } from "react";
import FlowerCard from "../flowerCard";
import api from "../../api";

const CatalogListPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.items.fetchAll().then((data) => setItems(data));
  }, []);

  return (
    <div className="d-flex wrapper">
      <div className="container-fix col-3 me-2">фильтрация</div>
      <div className="container-fix col-9 d-flex flex-wrap justify-content-evenly">
        {items.length === 0 && (
          <div className="spinner-border" role="status">
            <span className="sr-only" />
          </div>
        )}

        {items.map((item) => (
          <FlowerCard
            name={item.name}
            price={item.price}
            img={item.img}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogListPage;
