import React from "react";
import "../styles/sumup.css"
export default function Sumup({ filteredStock }) {
  const getTotalPrice = () => {
    return filteredStock.reduce((acc, item) => {
      return acc + item["Total Price"];
    }, 0);
  };
  return (
    <div>
      <p>Number of diamonds : {filteredStock.length}</p>
      <p>Total price : <span className="total">${' '+getTotalPrice().toFixed(2)}</span></p>
    </div>
  );
}
