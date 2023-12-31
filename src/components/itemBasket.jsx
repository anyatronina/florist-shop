import React from "react";
import Counter from "./counter";
// import { useBasket } from "../hooks/useBasket";

const ItemBasket = ({ _id, name, price, img, amount }) => {
  // const [sum, setSum] = useState(amount);

  // useEffect(() => {
  //   setSum(amount);
  // }, []);

  // const handleIncrement = () => {
  //   setSum((prevState) => ++prevState);
  // };

  // const handleDecrement = () => {
  //   if (sum !== 1) {
  //     setSum((prevState) => --prevState);
  //   }
  // };

  return (
    <div className="container-fix d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          className="cart-page-img me-4"
          src={require(`../img/flowers2/${img}.jpg`)}
          alt={name}
        />
        <p className="cart-page-p">{name}</p>
      </div>
      <div className="d-flex align-items-center">
        <div className="my-2 me-5">
          <Counter amount={amount} />
        </div>
        <p className="my-2 me-5 cart-page-price">{price} ₽</p>
        <button className="btn btn-outline-secondary">Удалить</button>
      </div>
    </div>
  );
};

export default ItemBasket;
