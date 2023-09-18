import React, { useEffect, useState } from "react";
import FlowerCard from "../flowerCard";
import api from "../../api";
import _ from "lodash";
import { paginate } from "../../utils/paginate";
import Pagination from "../pagination";
import SearchLine from "../searchline";
import Loader from "../loader";
import SliderPrice from "../sliderPrice";
import GroupList from "../groupList";

const CatalogListPage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const [searchString, setSearchString] = useState("");
  const [priceSlider, setPrice] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState();

  const itemsFilter = [
    { _id: "1", name: "Цветы поштучно" },
    { _id: "2", name: "Букеты в бумаге" },
    { _id: "3", name: "Букеты в коробке" }
  ];

  const handleSearchItem = ({ target }) => {
    setSearchString(target.value);
  };

  const handlePriceSlider = (value) => {
    setPrice((prevState) => (prevState = value));
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleFilterSelect = (item) => {
    setSearchString("");
    setSelectedFilter(item);
  };

  const getFilteredItems = (searchString) => {
    const ArrIsLoaded = items.filter(
      (item) =>
        parseInt(item.price) >= priceSlider[0] &&
        parseInt(item.price) <= priceSlider[1]
    );

    const filteredByPrice = ArrIsLoaded.length === 0 ? items : ArrIsLoaded;
    if (searchString.trim() !== "") {
      return filteredByPrice.filter((item) =>
        item.name.toLowerCase().includes(searchString.toLowerCase().trim())
      );
    }
    return filteredByPrice;
  };

  useEffect(() => {
    api.items.fetchAll().then((data) => setItems(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  useEffect(() => {
    const filteredUsers = getFilteredItems(searchString);
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);

    if (usersCrop.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [items, searchString, priceSlider]);

  if (items.length > 0) {
    const price = items.map((item) => parseInt(item.price));

    const filteredItems = getFilteredItems(searchString);

    const count = filteredItems.length;
    const sortedItems = _.orderBy(filteredItems, "name");
    const userCrop = paginate(sortedItems, currentPage, pageSize);

    const clearFilter = () => {
      setSearchString("");
      setSelectedFilter();
    };

    return (
      <div className="d-flex wrapper-fix">
        <div className="container col-3 me-2">
          <SearchLine
            value={searchString}
            onChange={handleSearchItem}
          ></SearchLine>

          <SliderPrice price={price} onChange={handlePriceSlider} />
          <div className="container-fix">
            <GroupList
              items={itemsFilter}
              selectedItem={selectedFilter}
              onItemSelect={handleFilterSelect}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        </div>

        <div className="container-fix col-9 ps-4">
          <div className="d-flex flex-wrap justify-content-flex-start">
            {items.length > 0 &&
              userCrop.map((item) => (
                <FlowerCard
                  key={item._id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  id={item._id}
                />
              ))}
          </div>

          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  return <Loader />;
};

export default CatalogListPage;
