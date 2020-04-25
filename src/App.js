import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux';
import Movie from './component/movie'
import Movielist from './component/movieList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h2>Samsung Playlist List</h2>
        <Switch>
          <Route path="/movie">

            <Movie />
          </Route>
          <Route exact path="/">
            <Movielist />
          </Route>
        </Switch>

      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {


  }
}
const mapDispatchToProps = dispatch => {
  return {
    // getUserData:() => dispatch(getUserData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
