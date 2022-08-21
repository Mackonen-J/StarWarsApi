import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import { StarShipResponseProps, StarshipResultProps } from '../global/types';
import './StarShip.scss';

const StarShip = () => {
    const [starships, setStarShips] = useState<StarShipResponseProps>();
    const [searchValue, setSearchValue] = useState<string>('');

    const getStarShips = (url: string) =>
        axios
            .get(url)
            .then((response) => {
                const data = response.data;
                setStarShips(data);
            })
            .catch((err) => console.log(err));

    useEffect(() => {
        getStarShips(`https://swapi.dev/api/starships/?search=${searchValue}`);
    }, [searchValue]);

    useEffect(() => {
        getStarShips('https://swapi.dev/api/starships');
    }, []);

    return (
        <div className="Starship">
            <Search searchValue={searchValue} onSearch={setSearchValue} placeholder="Search Starship" />
            {!starships ? (
                <div>loading...</div>
            ) : (
                <>
                    {(starships?.results as unknown as [StarshipResultProps]).map(
                        ({ name, model, passengers, url }) => (
                            <div key={url} className="Starship_container">
                                <span className="Starship_name"> {name} </span>
                                <span className="Starship_model"> {model} </span>
                                <span className="Starship_passengers"> {passengers} </span>
                            </div>
                        ),
                    )}
                    <Pagination next={starships?.next} previous={starships?.previous} onChangePage={getStarShips} />
                </>
            )}
        </div>
    );
};

export default StarShip;
