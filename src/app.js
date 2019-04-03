import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from './pages/HomePage';
import SpotifyWebApi from 'spotify-web-api-js';
import './style.css';
import AlbumPage from './pages/AlbumPage';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }

  getNowPlaying() {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[0].url
          }
        });
      })
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
        <Route path="/album/:album" component={AlbumPage} />
      </Router>
      /* <div>
        Now Playing: {this.state.nowPlaying.name}
      </div>
      <div>
        <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
      </div>
      {this.state.loggedIn &&
        <button onClick={() => this.getNowPlaying()}>
          Check Now Playing
      </button>
      } */
    )
  }
}

export default App;
