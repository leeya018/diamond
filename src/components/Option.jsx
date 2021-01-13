import React from "react";

export default function Option({
  index,
  activeOptKey,
  updateActiveOptKey,
  handleUpdateList,
  filterOpt,
}) {
    console.log("key")
  const pickOption = (e) => {
    handleUpdateList(e);
    updateActiveOptKey(index);
  };
  return (
    <li
      onClick={pickOption}
      style={{ backgroundColor: activeOptKey === index ? "black" : "white" }}
    >
      {filterOpt}
    </li>
  );
}
