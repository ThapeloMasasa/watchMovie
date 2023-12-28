import api from './api/axiosConfig.js';
import './App.css';
import { useState, useEffect } from 'react';
import Layout from './component/Layout.js';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home/Home.js';
import Header from './component/header/Header.js';
import Trailer from './component/trailer/Trailer.js';
import Reviews from './component/reviews/Reviews.js';


function App() {

  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try{
      const response = await api.get('/api/v1/movies');
      console.log('data',response.data);
      setMovies(response.data);
      

    }catch(error){
      console.log(error);
    }
    
  }

    const getMovieData = async(MovieId) =>{
      try{
        const response = await api.get(`/api/v1/movies/${movieId}`);
        const singleMovie = response.data;
        setMovie(singleMovie);
        setReviews(singleMovie.reviews)
      }catch(err){
        console.log(err)
      }
    }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home movies ={movies}/>}></Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie ={movie} reviews={reviews} SetReviews={setReviews}/>}></Route>
      </Route>
    </Routes>    
    </div>
  );
}

export default App;
