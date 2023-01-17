import React, { useState } from "react";
import "../styles/App.css";
import { movies } from "../utils/movieList";

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [results, setResult] = useState(movies);
    const [filterResult, setFilterResult] = useState([]);

    function handleClick(e) {
        e.preventDefault();
        let res = results.filter((val) => val.title.toLowerCase().includes(inputValue) )
        setFilterResult(res);
    }
    
    function handleChange(e) {
        setInputValue(e.target.value)
    }

    return (
        <div id="main">
            <form id="form">
                <input
                    type="text"
                    onChange={handleChange}
                    value={inputValue}
                    id="movie-input"
                ></input>
                <button id="button" onClick={handleClick}>
                    Search
                </button>
            </form>
            <div id="result">
                {filterResult &&
                    filterResult.map((movie) => (
                        <div key={movie.id} className="movie">{movie.title}</div>
                    ))}
            </div>
        </div>
    );
};

export default App;
