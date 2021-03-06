import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ArtistsList from '../components/artists_list'

class ArtistsContainer extends React.Component {
  state={
    allArtists: []

  }
  // http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Billie%20Eilish&api_key=5888e399a697c41b22612e13ed652177&format=json
  componentDidMount(){
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=5888e399a697c41b22612e13ed652177&format=json')
    .then(resp => resp.json())
    .then(artists => this.setState({allArtists: artists["artists"].artist}))
  }

  render(){
    return( <div className="artists">
    <h3>Top 100 Artist</h3>
    <ArtistsList allArtists ={this.state.allArtists} onClick= {this.props.onClick} user={this.props.user}/>
    </div>)
  }

}

export default ArtistsContainer
