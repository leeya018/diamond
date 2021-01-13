import React from "react";
import Item from "./Item";
import "../styles/table.css";
import {tableKeys} from "../data.js";

export default function Table({ filteredStock }) {
  return (
    <table >
      <thead>
        <tr className="table-title">
          {tableKeys.map((t, k) => (
            <td key={k}>{t}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredStock.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </tbody>
    </table>
  );
}
