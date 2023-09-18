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
    name: "Гвоздика розовая Помероса",
    price: "130",
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
  },
  {
    _id: "7",
    name: "Гладиолус белый",
    price: "110",
    // описание, характеристики
    img: "belye_gladiolusy"
  },
  {
    _id: "8",
    name: "Гладиолус фиолетовый",
    price: "110",
    // описание, характеристики
    img: "gladiolus_fioletovyj"
  },
  {
    _id: "9",
    name: "Роза красная",
    price: "95",
    // описание, характеристики
    img: "rosy_red"
  },
  {
    _id: "10",
    name: "Роза сиреневая",
    price: "110",
    // описание, характеристики
    img: "rosy_lilac"
  },
  {
    _id: "11",
    name: "Роза Ред Наоми",
    price: "220",
    // описание, характеристики
    img: "rosy_red-naomi"
  },
  {
    _id: "12",
    name: "Роза кустовая Джульетта",
    price: "420",
    // описание, характеристики
    img: "rosy_Julietta"
  },
  {
    _id: "13",
    name: "Хризантема желтая",
    price: "290",
    // описание, характеристики
    img: "hrizantema-zheltaja"
  },
  {
    _id: "14",
    name: "Хризантема розовая Росана",
    price: "290",
    // описание, характеристики
    img: "hrizantema-rozova-rosana"
  },
  {
    _id: "15",
    name: "Хризантема кустовая Серинити",
    price: "240",
    // описание, характеристики
    img: "hrizantema-kustovaja-seriniti"
  },
  {
    _id: "16",
    name: "Роза кустовая Сильвер Шедоу",
    price: "200",
    // описание, характеристики
    img: "kustovaja-roza-silver-shedou"
  },
  {
    _id: "17",
    name: "Роза кустовая Гранд Трендсеттер",
    price: "340",
    // описание, характеристики
    img: "kustovaya-roza-grand-trendsetter"
  },
  {
    _id: "18",
    name: "Роза Фри Спирит",
    price: "260",
    // описание, характеристики
    img: "rosy-fri-spirit"
  },
  {
    _id: "19",
    name: "Кустовая пионовидная роза Джелато",
    price: "380",
    // описание, характеристики
    img: "rosy-zhelato"
  },
  {
    _id: "20",
    name: "Кустовая пионовидная роза Свит Джелато",
    price: "380",
    // описание, характеристики
    img: "rosy-svit_zhelato"
  },
  {
    _id: "21",
    name: "Пионовидная роза Кахала",
    price: "120",
    // описание, характеристики
    img: "pionovidnaja-roza-kahala"
  },
  {
    _id: "22",
    name: "Роза Кахала",
    price: "260",
    // описание, характеристики
    img: "rosy-kahala"
  },
  {
    _id: "23",
    name: "Кустовая пионовидная роза Саммер",
    price: "380",
    // описание, характеристики
    img: "kustovaja-pionovidnaja-roza-sammer-roz"
  },
  {
    _id: "24",
    name: "Хризантема Сантини розовая",
    price: "170",
    // описание, характеристики
    img: "hrizantema-santini-rose"
  },
  {
    _id: "25",
    name: "Гвоздика розовая",
    price: "130",
    // описание, характеристики
    img: "gvozdika-rozovaya"
  },
  {
    _id: "26",
    name: "Гвоздика нежно-розовая",
    price: "130",
    // описание, характеристики
    img: "gvozdika-light-rozovaya"
  },
  {
    _id: "27",
    name: "Гвоздика Яблочный чай",
    price: "130",
    // описание, характеристики
    img: "gvozdika-apple-tea"
  },
  {
    _id: "28",
    name: "Гвоздика белая",
    price: "130",
    // описание, характеристики
    img: "gvozdika-belaya"
  },
  {
    _id: "29",
    name: "Пионы Сара Бернар",
    price: "600",
    // описание, характеристики
    img: "rozovye-piony-sarabernar"
  },
  {
    _id: "30",
    name: "Гиперикум белый",
    price: "320",
    // описание, характеристики
    img: "giperikum-belyj"
  },
  {
    _id: "31",
    name: "Эвкалипт",
    price: "250",
    // описание, характеристики
    img: "eucalyptus"
  },
  {
    _id: "32",
    name: "Тюльпан лиловый Sugar Prince",
    price: "120",
    // описание, характеристики
    img: "tjulpan-lilovy-shugar-princ"
  },
  {
    _id: "33",
    name: "Танацетум желтый",
    price: "220",
    // описание, характеристики
    img: "hrizantema-tanacetum-zheltyj"
  },
  {
    _id: "34",
    name: "Тюльпан белый Antarctica",
    price: "120",
    // описание, характеристики
    img: "tjulpan-bely-antarctica"
  },
  {
    _id: "35",
    name: "Тюльпан красный Red life",
    price: "120",
    // описание, характеристики
    img: "red-tulip"
  },
  {
    _id: "36",
    name: "Тюльпан темно-розовый",
    price: "120",
    // описание, характеристики
    img: "tjulpan-temno-rozovyj"
  },
  {
    _id: "37",
    name: "Тюльпан желтый с малиновой окантовкой",
    price: "120",
    // описание, характеристики
    img: "tjulpan-zheltyj-s-malinovoj-okantovkoj-cape-town"
  },
  {
    _id: "38",
    name: "Гвоздика бордовая",
    price: "110",
    // описание, характеристики
    img: "gvozdika-bordovaya"
  },
  {
    _id: "39",
    name: "Фиолетовые пионы",
    price: "340",
    // описание, характеристики
    img: "malinovye-piony"
  },
  {
    _id: "40",
    name: "Пионы гранатовые",
    price: "340",
    // описание, характеристики
    img: "pion_granatovyj"
  },
  {
    _id: "41",
    name: "Пионы Белая Сара",
    price: "340",
    // описание, характеристики
    img: "pion_sara_belaya"
  },
  {
    _id: "42",
    name: "Кустовая хризантема Бакарди",
    price: "240",
    // описание, характеристики
    img: "hrizantema_bakkardi_oranzhevaya"
  },
  {
    _id: "43",
    name: "Лимонные пионы",
    price: "340",
    // описание, характеристики
    img: "limonnyj_pion"
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
