import React from "react";

const SearchLine = ({ value, onChange }) => {
  return (
    <div className="container-fix">
      {/* <p className="fw-bold">Поиск по названию</p> */}
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={value}
        onChange={onChange}
        className="container searchline"
      ></input>
    </div>
  );
};

export default SearchLine;
