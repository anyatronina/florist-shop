import React from "react";
// import { useBasket } from "../hooks/useBasket";
// import { useBasket } from "../hooks/useBasket";

const ItemBasket = ({ id, name, price, img, amount, onDelete }) => {
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
        <p className="my-2 me-5 cart-page-price">{amount} шт.</p>

        <p className="my-2 me-5 cart-page-price">{price} ₽</p>
        <button
          className="btn btn-outline-secondary"
          onClick={() => onDelete(id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default ItemBasket;
