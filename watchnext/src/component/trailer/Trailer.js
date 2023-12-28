import React from 'react';
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () =>{
    console.log("This is the key here")
    let params = useParams();
    let key = params.ytTrailerId;

    return (
        <div className="react-player-container">
                {(key!=null)? <ReactPlayer controls="true" playing={true} url={`https://youtube.com/watch?v=${key}`} width= '100%' height="100%"/>: null}
        </div>
    )
}

export default Trailer