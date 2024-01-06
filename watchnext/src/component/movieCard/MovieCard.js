import {Link, useNavigate} from 'react-router-dom';
import './MovieCard.css';
import Slideshow from '../slideshow/SlideShow';
import Button from 'react-bootstrap/esm/Button';

const MovieCard = ({movie})=>{
    const navigate = useNavigate()

    function reviews(movieId){
        navigate(`/Reviews/${movieId}`);
    }
    return(
          
                <div className="card">
                      <Link className="link" to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                        <div className="card-image">
                           <Slideshow imageUrls={movie.backdrops} />
                        </div>
                        </Link>
                        <div className="card-content">
                            <h2>{movie.title}</h2>
                            <div className='genres'>
                            
                                {movie.genres.map((genre)=>(
                                    <div className='genre'>{genre}</div>
                                
                                ))}
                            
                            </div>
                           
                            <div className='reviews'>
                                <div>{movie.releaseDate}</div>
                                <div className='movie-review-button-container'>
                                <Button variant= "info" onClick={()=> reviews(movie.imdbId)}>Reviews</Button>   
                                </div>
                            </div>
                           
                         
                                        
                         </div>
                </div>
               
               
        
        
    )
}

export default MovieCard;