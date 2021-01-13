import React, { useState } from "react";
import "../styles/filters.css";
import Filter from "./Filter";
import CaratFilter from "./CaratFilter";
export default function Filters({ diamondsStock, updateFilteredStock }) {
  const [activeFilter, setActiveFilter] = useState("");
  const filterItemsData = [
    {
      name: "Shape",
      values: ["ROUND"],
    },
    {
      name: "Color",
      values: ["F", "R", "G", "H", "D", "FANCY", "I", "S-T", "Q-R"],
    },
    {
      name: "Clarity",
      values: ["WS1", "WS2", "SI1", "VS1", "VS1", "SI2", "If", "S-T", "Q-R"],
    },
    {
      name: "Cut",
      values: ["EX", "VG", "GD"],
    },
    {
      name: "Polish",
      values: ["EX", "VG", "GD"],
    },
    {
      name: "Symmetry",
      values: ["EX", "VG", "GD"],
    },
    {
      name: "Fluorescent",
      values: ["M", "N", "ST", "F "],
    },
  ];
  return (
    <div className="filters">
      {filterItemsData.map((filterItem, index) => (
        <Filter
          key={index}
          ind={index}
          activeFilter={activeFilter}
          updateActiveFilter={setActiveFilter}
          diamondsStock={diamondsStock}
          updateFilteredStock={updateFilteredStock}
          filterName={filterItem.name}
          filterOptions={filterItem.values}
        />
      ))}
      <CaratFilter
        key={8}
        ind={8}
        activeFilter={activeFilter}
        updateActiveFilter={setActiveFilter}
        diamondsStock={diamondsStock}
        updateFilteredStock={updateFilteredStock}
        filterName={"Carat"}
      />
    </div>
  );
}
