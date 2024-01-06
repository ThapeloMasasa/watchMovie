import MovieCard from "../movieCard/MovieCard";
import './watchList.css';

const WatchList = ({ movies }) => {
  return (
    <div className="cards-container">
      {
        movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))
      }
    </div>
  );
}

export default WatchList;
