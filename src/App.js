import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux';
import Movie from './component/movie'
import Movielist from './component/movieList';
import Home from './component/home'

class App extends Component {
  render() {
    console.log(process.env.PUBLIC_URL)
    return (
      <Fragment>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/movie`}>
            <Movie />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/home`}>
<Home />
            </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
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
