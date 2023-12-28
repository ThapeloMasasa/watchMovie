import api from './api/axiosConfig.js';
import './App.css';
import { useState, useEffect } from 'react';
import Layout from './component/Layout.js';
import { Routes, Route } from 'react-router-dom';
import Home from './component/home/Home.js';
import Header from './component/header/Header.js';
import Trailer from './component/trailer/Trailer.js';


function App() {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try{
      const response = await api.get('/api/v1/movies');
      console.log('data',response.data);
      setMovies(response.data);
      

    }catch(error){
      console.log(error);
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
      </Route>
    </Routes>    
    </div>
  );
}

export default App;
