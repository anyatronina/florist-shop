import React from "react";
import Counter from "../counter";
import { useModal } from "../../hooks/useModal";
import { useBasket } from "../../hooks/useBasket";
import Loader from "../loader";
import Comments from "../comments";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserId,
  getIsLoggedIn,
  updateUserBasket
} from "../../store/users";
import { useHistory } from "react-router-dom";
import { getItemById } from "../../store/items";

const FlowerPage = ({ itemId }) => {
  const item = useSelector(getItemById(itemId));
  const currentUserId = useSelector(getCurrentUserId());
  const { closeModal, statusModal } = useModal();
  const {
    // addItem,
    sumBasket,
    updateSum
  } = useBasket();
  const loggedIn = useSelector(getIsLoggedIn());
  const dispatch = useDispatch();
  const history = useHistory();
  let amount = 1;

  if (item) {
    const { name, price, img } = item;

    const handleSubmit = () => {
      closeModal();
      if (!loggedIn) {
        return history.push(`/login`);
      }
      amount = sumBasket;
      dispatch(
        updateUserBasket({
          _id: currentUserId,
          basket: { _id: itemId, amount }
        })
      );
      // addItem({ idBasket: nanoid(3), amount, _id: itemId, name, price, img });
      updateSum(0);
    };

    return (
      <>
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
        {loggedIn && !statusModal && <Comments />}
      </>
    );
  }

  return <Loader />;
};

export default FlowerPage;
