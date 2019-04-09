import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { setToken } from './store/actions';
import HomePage from './pages/HomePage';
import './style.css';
import AlbumPage from './pages/AlbumPage';

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    const { access_token, refresh_token } = params;
    if (!access_token) {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&scope=${process.env.SCOPE}&response_type=${process.env.TYPE}&redirect_uri=${process.env.REDIRECT_URI}`;
    } else {
      props.setToken(access_token);
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }
  render() {
    return (
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/album" component={AlbumPage} />
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  access_token: state.access_token,
})


const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    setToken
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
