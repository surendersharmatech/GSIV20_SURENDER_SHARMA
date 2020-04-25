import React, { Component } from 'react';
import './movieList.css'
import { connect } from 'react-redux';

import { getMovieList } from '../../redux-container/movie/action'

class MovieList extends Component {
  componentDidMount() {
    this.props.getMovieList()
  }
  render() {
    console.log(this.props.movieList)
    const { movieList } = this.props
    return <div>

      <div className="container">

        {movieList && movieList.map((item, index) => {
          return <div className="movie-card" key={index}>
            <div className="movie-header " style={{ backgroundSize: 'cover', backgroundImage: `url("https://image.tmdb.org/t/p/w440_and_h660_face${item.poster_path}")` }}>

            </div>
            <div className="movie-content">
              <div className="movie-content-header">
                <a href="#">
                  <h3 className="movie-title">{item.title}</h3>
                </a>
                <div className="imax-logo">{item.vote_average}</div>
              </div>
              <div className="movie-info">
                <div className="info-section">
                  <span>{item.overview.substring(0, 80)}{item.overview.length > 80 && <span>.....</span>}</span>

                </div>

              </div>
            </div>
          </div>

        })}


      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    movieList: state.movie.movieList

  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMovieList: () => dispatch(getMovieList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);