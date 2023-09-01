import React from "react";
import ItemBasket from "../components/itemBasket";
import { useBasket } from "../hooks/useBasket";

const Basket = () => {
  const { cartList } = useBasket();

  return (
    <div className="wrapper">
      <h1>Корзина</h1>

      {cartList.length !== 0 &&
        cartList.map((item) => (
          <ItemBasket
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            img={item.img}
            amount={item.amount}
          />
        ))}

      {cartList.length === 0 && (
        <div className="container-fix d-flex justify-content-between align-items-center">
          В корзине пока пусто
        </div>
      )}

      {/* <ItemBasket />
      <ItemBasket />
      <ItemBasket /> */}
    </div>
  );
};

export default Basket;
