import React, { useContext, useEffect, useState } from "react";
import api from "../api";
import Loader from "../components/loader";

const BasketContext = React.createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

const BasketProvider = ({ children }) => {
  const [cartList, setList] = useState([]);
  const [basketLength, setLength] = useState();
  const [isLoading, setLoading] = useState(true);
  const [sumBasket, setSum] = useState(0);

  useEffect(() => {
    api.basket.fetchAll().then((data) => setList(data));
    setLength(api.basket.getLength());
    setLoading(false);
  }, []);

  const updateSum = (sum) => {
    setSum(sum);
  };

  // function addItem({ amount, _id, ...data }) {
  //   if (basketLength) {
  //     let isAdded = false;

  //     setList(
  //       cartList.map((item) => {
  //         if (item._id === _id) {
  //           isAdded = true;
  //           return { ...item, amount: item.amount + amount };
  //         }
  //         return { ...item };
  //       })
  //     );

  //     if (!isAdded) {
  //       api.basket.addItem({ amount, _id, ...data });
  //       api.basket.fetchAll().then((data) => setList(data));
  //       setLength(api.basket.getLength());
  //     }
  //   } else {
  //     api.basket.addItem({ amount, _id, ...data });
  //     api.basket.fetchAll().then((data) => setList(data));
  //     setLength(api.basket.getLength());
  //   }
  // }

  function addItem({ idBasket, amount, _id, ...data }) {
    api.basket.addItem({ idBasket, amount, _id, ...data });
    setLength(cartList.length);
  }

  function removeItem(idBasket) {
    setList(api.basket.removeItem(idBasket));
    setLength(api.basket.getLength());
  }

  return (
    <BasketContext.Provider
      value={{
        cartList,
        basketLength,
        addItem,
        removeItem,
        sumBasket,
        updateSum
      }}
    >
      {!isLoading ? children : <Loader />}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
