import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import "./StarShip.scss";

const StarShip = () => {
  const [starships, setStarShips] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const getStarShips = (url) =>
    axios
      .get(url)
      .then((response) => response)
      .then((res) => {
        const data = res.data;
        setStarShips(data);
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    getStarShips(`https://swapi.dev/api/starships/?search=${searchValue}`);
  }, [searchValue]);

  useEffect(() => {
    getStarShips("https://swapi.dev/api/starships");
  }, []);

  return (
    <div className="Starship">
      <Search
        searchValue={searchValue}
        onSearch={setSearchValue}
        placeholder="Search Starship"
      />
      {!starships ? (
        <div>loading...</div>
      ) : (
        starships.results.map((ship) => (
          <div key={ship.url} className="Starship_container">
            <span className="Starship_name"> {ship.name} </span>
            <span className="Starship_model"> {ship.model} </span>
            <span className="Starship_passengers"> {ship.passengers} </span>
          </div>
        ))
      )}
      <Pagination
        next={starships?.next}
        previous={starships?.previous}
        onChangePage={getStarShips}
      />
    </div>
  );
};

export default StarShip;
