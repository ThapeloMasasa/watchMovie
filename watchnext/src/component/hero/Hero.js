import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import './Hero.css';

export const Hero = ({movies}) => {
  return (
    <div className='movie-carousel-container'>
        <Carousel>
            {
                movies.map((movie)=>{
                    return(
                        <Paper key={movie.id}>
                            <div className='movie-card-container'>
                                <div className='movie-card'style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className='movie-detail'>
                                        <div className='movie-poster'>
                                            <img src={movie.poster} alt={movie.title} className='movie-image'/>
                                        </div>
                                        <div className='movie-title'>
                                            <h4>{movie.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}
