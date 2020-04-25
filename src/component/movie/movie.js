import React, { Component } from 'react';
import './movie.css'
import { connect } from 'react-redux';
import Header from '../header'

import { getMovieDetailById } from '../../redux-container/movie/action'

class Movie extends Component {
    componentDidMount() {
        this.props.GetMovieDetailById(sessionStorage.getItem('movieId'))
    }

    render() {
        console.log(this.props.movieList)
        const { movieDetail } = this.props
        return <div>
            <div className="container-fluid">
                <Header searchBar={false} title="Movie Details" />

                {movieDetail && <div className="wrapper">

                    <div className="main_card">
                        <div className="card_right">
                            <div className="img_container">
                                <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${movieDetail.poster_path}`} alt="" />
                            </div>
                        </div>
                        <div className="card_datails">
                            <h1>{movieDetail.title} ({movieDetail.vote_average})</h1>
                            <div className="card_cat">
                                <p className="genre">{movieDetail.release_date} | {movieDetail.runtime} | Director </p>
                            </div>
                            <p className="genre1">Cast: Actor1,Actor3,Actor3 </p>
                            <p className="disc">{movieDetail.overview}</p>

                        </div>
                    </div>

                </div>}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        movieDetail: state.movie.movieDetail

    }
}
const mapDispatchToProps = dispatch => {
    return {
        GetMovieDetailById: (id) => dispatch(getMovieDetailById(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);