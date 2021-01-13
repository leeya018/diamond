import React, { useState, useEffect } from "react";
import "../styles/filter.css";

const CaratFilter = ({
  ind,
  diamondsStock,
  updateFilteredStock,
  filterName,
  updateActiveFilter,
  activeFilter,
}) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    updateList();
  }, [from, to]);

  const updateList = () => {
    let newList = diamondsStock.filter((item) => {
      if (item[filterName] >= (from || -100) && item[filterName] <= (to || 100))
        return item;
    });
    console.log(newList);
    updateFilteredStock(newList);
  };

  return (
    <div className="carat-filter" key={ind}>
      <div>
        <p onClick={() => updateActiveFilter(filterName)}>{filterName}</p>
        {(from || to) && <span>{`${from}-${to}`}</span>}
      </div>
      {activeFilter == filterName && (
        <>
          <input type="number" onChange={(e) => setFrom(e.target.value)}  />
          <input type="number" onChange={(e) => setTo(e.target.value)}  />
        </>
        
      )}
    </div>
  );
};

export default CaratFilter;
