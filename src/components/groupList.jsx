import React from "react";

const GroupList = ({ selectedItem, onItemSelect }) => {
  const items = [
    { _id: "1", name: "Цветы поштучно" },
    { _id: "2", name: "Авторские букеты" },
    { _id: "3", name: "Букеты в коробке" }
  ];

  return (
    <div className="container-fix">
      <p className="fw-bold mb-2">Категории</p>
      {items.map((item) => (
        <div
          className="form-check ms-3"
          role="button"
          onClick={() => onItemSelect(item)}
        >
          <input
            className="form-check-input"
            type="radio"
            name="filter"
            id={item._id}
            checked={item._id === selectedItem?._id ? true : false}
          />
          <label className="form-check-label" htmlFor={item._id}>
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default GroupList;

// <ul className="list-group">
//   <p className="fw-bold">Категории</p>
//   {items.map((item) => (
//     <li
//       key={item._id}
//       className={
//         "list-group-item" +
//         (selectedItem && item._id === selectedItem._id ? " active" : "")
//       }
//       onClick={() => onItemSelect(item)}
//       role="button"
//     >
//       {item.name}
//     </li>
//   ))}
// </ul>
