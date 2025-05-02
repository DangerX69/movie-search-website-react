import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

const Home = () => {

const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "2015" },
    { id: 3, title: "Interstellar", release_date: "2010" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search for movies...."
          className="search-form_input"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button className="search-form_button" type="submit">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Home;
