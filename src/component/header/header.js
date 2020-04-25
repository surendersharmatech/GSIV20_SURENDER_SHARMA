import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovieList, getMovieListBySearching } from '../../redux-container/movie/action'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieName: ""
    }
  }

  onsearchMovie = (event) => {
    const { id, value } = event.target
    this.setState({ [id]: value });
    if (value.length < 2) {
      this.props.GetMovieList()
    }

  }
  onSearchClick = (e) => {
    e.preventDefault()
    this.props.GetMovieListBySearching(this.state.movieName)
  }
  render() {
    return <div>
      <nav class="navbar navbar-light bg-light justify-content-between"><form class="form-inline">
        <input class="form-control mr-sm-2" type="search" id="movieName" value={this.state.movieName} onChange={this.onsearchMovie} placeholder="Search" aria-label="Search" />
        <button onClick={this.onSearchClick} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
        <a class="navbar-brand">Navbar</a>

      </nav></div>;
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
    GetMovieList: () => dispatch(getMovieList()),
    GetMovieListBySearching: (name) => dispatch(getMovieListBySearching(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);