import React, { useState } from "react";
import "../styles/filter.css";
import Option from "./Option";

const Filter = ({
  ind,
  diamondsStock,
  updateFilteredStock,
  filterName,
  filterOptions,
  updateActiveFilter,
  activeFilter,
}) => {
  const [activeOptKey, setActiveOptKey] = useState(-1);

  const updateList = (e) => {
    let newList = diamondsStock.filter((item) => {
      if (item[filterName] == e.target.innerText) return item;
    });
    console.log(newList);
    updateFilteredStock(newList);
  };

  return (
    <div key={ind}>
      <div>
        <p onClick={() => updateActiveFilter(filterName)}>{filterName}</p>
        <p className="choice">
          {filterOptions[activeOptKey] || " "}
        </p>
      </div>
      {activeFilter == filterName && (
        <ul>
          {filterOptions.map((filterOpt, index) => (
            <Option
              key={index}
              index={index}
              activeOptKey={activeOptKey}
              updateActiveOptKey={setActiveOptKey}
              handleUpdateList={updateList}
              filterOpt={filterOpt}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
