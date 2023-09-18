import React, { useEffect, useState } from "react";
import api from "../../api";
import Counter from "../counter";
import { useModal } from "../../hooks/useModal";
import { useBasket } from "../../hooks/useBasket";
import Loader from "../loader";

const FlowerPage = ({ itemId }) => {
  const [item, setItem] = useState();
  const { closeModal } = useModal();
  const { sumBasket, updateSum } = useBasket();
  let amount = 1;
  const { addItem } = useBasket();

  useEffect(() => {
    api.items.getById(itemId).then((data) => setItem(data));
  }, []);

  if (item) {
    const { name, price, img } = item;

    const handleSubmit = () => {
      amount = sumBasket;
      addItem({ amount, _id: itemId, name, price, img });
      updateSum(0);
      closeModal();
    };

    return (
      <div className="container container-fix">
        <div className="row">
          <div className="col">
            <img
              src={require(`../../img/flowers2/${img}.jpg`)}
              alt={name}
              className="flower-page-img"
            />
          </div>

          <div className="col">
            <h1 className="mb-4">{name}</h1>
            <h3 className="flower-page-price">{price} ₽</h3>
            <Counter amount={amount} />
            <button className="btn btn-dark me-2" onClick={handleSubmit}>
              В корзину
            </button>
            <button className="btn btn-dark">Избранное</button>
          </div>
        </div>
      </div>
    );
  }

  return <Loader />;
};

export default FlowerPage;
