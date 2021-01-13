import react, { useState } from "react";
import "../styles/App.css";
import {diamondsStockData} from "../data.js";
import Filters from "./Filters";
import Sumup from "./Sumup";
import Table from "./Table";
function App() {
  const [diamondsStock, setDiamondsStock] = useState(diamondsStockData);
  const [filteredStock, setFilteredStock] = useState(diamondsStockData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Diamond app</h1>
        <Sumup filteredStock={filteredStock} />
        <Filters
          diamondsStock={diamondsStock}
          updateFilteredStock={setFilteredStock}
        />
        <Table filteredStock={filteredStock} />
      </header>
    </div>
  );
}

export default App;
