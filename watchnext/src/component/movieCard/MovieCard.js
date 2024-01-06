import {Link} from 'react-router-dom';
import './MovieCard.css';
import Slideshow from '../slideshow/SlideShow';

const MovieCard = ({movie})=>{
    
    return(
                <Link className="link" to="/">
                <div className="card">
                        <div className="card-image">
                           <Slideshow imageUrls={movie.backdrops} />
                        </div>
                        <div className="card-content">
                            <h2>{movie.title}</h2>
                            <div className='genres'>
                            
                                {movie.genres.map((genre)=>(
                                    <div className='genre'>{genre}</div>
                                
                                ))}
                            
                            </div>
                            <div>
                                <p>{movie.releaseDate}</p>
                            </div>
                        </div>
                </div>
                </Link>
        
        
    )
}

export default MovieCard;