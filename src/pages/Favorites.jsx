import React from "react";
import "../css/Favorites.css"

import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";


const Favorites = () => {

    const {favorites} = useMovieContext();

    if(favorites){

        return(
            <div className="movies-grid">
				{favorites.map((movie) => {
					return (
						<MovieCard
							key={movie.id}
							movie={movie}
						/>
					);
				})}
			</div>
        )

    }
        return (
            <div className="favorites-empty">
                <h2>No favorites yet :(</h2>
                <p>Start adding movies to the favorites and they will appear here</p>
            </div>
            
            )

    


};

export default Favorites;
