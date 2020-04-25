import React from 'react';
import { Link } from 'react-router-dom'

const MovieCard = props => {

    return <div className="movie-card" key={props.id} onClick={() => props.onClick(props.id)}>
    <div className="movie-header " style={{ backgroundSize: 'cover', backgroundImage: `url("https://image.tmdb.org/t/p/w440_and_h660_face${props.image_path}")` }}>
  
    </div>
    <div className="movie-content">
      <div className="movie-content-header">
        <Link style={{ display: 'inline' }} to="#">
          <h3 className="movie-title">{props.title}</h3>
        </Link>
        <div className="imax-logo">{props.rating}</div>
      </div>
      <div className="movie-info">
        <div className="info-section">
          <span>{props.description.substring(0, 80)}{props.description.length > 80 && <span>.....</span>}</span>
  
        </div>
  
      </div>
    </div>
  </div>;
  }


export default MovieCard;
