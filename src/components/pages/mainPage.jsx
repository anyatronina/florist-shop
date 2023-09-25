import React from "react";
import FlowerCard from "../flowerCard";
import { generateRandomId } from "../../utils/generateRandomId";
import Loader from "../loader";
import { useSelector } from "react-redux";
import { getItems, loadItemsList } from "../../store/items";

const MainPage = () => {
  const items = useSelector(getItems());
  const itemsLoading = useSelector(loadItemsList());

  return (
    <main className="main">
      <section className="intro">
        <div className="wrapper">
          <h1 className="intro-title">Nature's Beauty Delivered to You</h1>
          <p className="intro-subtitle">
            Nature's beauty is just a click away with our online flower and
            plant shop. We offer a wide variety of flowers that will bring a
            touch of nature to your home!
          </p>
        </div>
      </section>

      <section className="offer">
        <div className="offer-title">Что мы можем предложить:</div>
        <div className="products-list d-flex justify-content-center">
          {itemsLoading && <Loader />}

          {!itemsLoading &&
            items.map((item) => (
              <FlowerCard
                name={item.name}
                price={item.price}
                img={item.img}
                id={item._id}
              />
            ))}
        </div>
      </section>

      <section className="footer">
        <div className="footer-info">
          <div className="footer-title">
            <h2>Мы всегда открыты для обратной связи:</h2>
          </div>
          <div className="footer-contacts-list">
            <div className="me-3">instagram</div>
            <div className="me-3">vkontakte</div>
            <div className="me-3">telegram</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
