import React, { useEffect, useState } from "react";
import FlowerCard from "../flowerCard";
import api from "../../api";

const MainPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.items.fetchAll().then((data) => setItems(data));
  }, []);

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
        <div className="products-list">
          {items.length === 0 && (
            <div class="spinner-border" role="status">
              <span class="sr-only" />
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
      </section>

      <section className="footer">
        <div className="footer-info">
          <div className="footer-title">
            <h2>Feel free to contact us:</h2>
          </div>
          <div className="footer-contacts-list">
            <div className=".footer-contacts-item">instagram</div>
            <div className=".footer-contacts-item">vkontakte</div>
            <div className=".footer-contacts-item">telegram</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
