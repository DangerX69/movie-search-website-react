import "../css/MovieCard.css";
import {FaFacebook,FaYoutube,FaThumbsUp} from 'react-icons/fa';
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({movie}) => {

  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
  const favorite = isFavorite(movie.id);

   function onFavClick(e){
    e.preventDefault();
    if(favorite) removeFromFavorites(movie.id)
      else addToFavorites(movie)


   }

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-poster-image" />
            <div className="movie-overlay">
                <button className={`favorite-button ${favorite?"active":""}`} onClick={onFavClick}>
                  <FaThumbsUp/>
                </button>
            </div>
        </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>

      </div>
    </div>
  )
}

export default MovieCard
