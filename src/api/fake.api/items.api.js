const items = [
  {
    _id: "1",
    name: "Фрезия",
    price: "110",
    // описание, характеристики
    img: "freesia"
  },
  {
    _id: "2",
    name: "Гвоздика",
    price: "110",
    // описание, характеристики
    img: "gvozdika-pink"
  },
  {
    _id: "3",
    name: "Лилия",
    price: "110",
    // описание, характеристики
    img: "liliya"
  },
  {
    _id: "4",
    name: "Гипсофила радужная",
    price: "110",
    // описание, характеристики
    img: "raduzhnaja-gipsofila"
  },
  {
    _id: "5",
    name: "Ромашки",
    price: "110",
    // описание, характеристики
    img: "romashka"
  },
  {
    _id: "6",
    name: "Статика персиковая",
    price: "110",
    // описание, характеристики
    img: "statica-persikovaja"
  }
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(items);
    }, 1000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(items.find((user) => user._id === id));
    }, 500);
  });

export default {
  fetchAll,
  getById
};
