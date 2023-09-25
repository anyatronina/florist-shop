import React from "react";
import ItemBasket from "../components/itemBasket";
import { useBasket } from "../hooks/useBasket";
import Loader from "../components/loader";

const Basket = () => {
  const { cartList, removeItem, basketLength } = useBasket();

  const handleDelete = (idBasket) => {
    removeItem(idBasket);
  };

  if (cartList.length !== basketLength)
    return (
      <div className="wrapper-fix">
        <h1 className="mt-3">Корзина</h1>
        <Loader />;
      </div>
    );

  return (
    <div className="wrapper-fix">
      <h1 className="mt-3">Корзина</h1>

      {cartList.length !== 0 &&
        cartList.map((item) => (
          <ItemBasket
            key={item.idBasket}
            idBasket={item.idBasket}
            id={item._id}
            name={item.name}
            price={item.price}
            img={item.img}
            amount={item.amount}
            onDelete={handleDelete}
          />
        ))}

      {cartList.length === 0 && (
        <div className="container-fix d-flex justify-content-between align-items-center">
          В корзине пока пусто
        </div>
      )}
    </div>
  );
};

export default Basket;
