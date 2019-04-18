import React, { Component } from 'react';
import HomeList from '../components/home_list'

class Home extends Component{

  state={
    allArtists: [],
    userInput: " "

  }

  // http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Billie%20Eilish&api_key=5888e399a697c41b22612e13ed652177&format=json
  componentDidMount(){
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=5888e399a697c41b22612e13ed652177&format=json')
    .then(resp => resp.json())
    .then(artists => this.setState({allArtists: artists['tracks'].track}))
  }
  render(){
    console.log(this.state.allArtists);
    return(
      <div>
      <HomeList allArtists= {this.state.allArtists}/>
      </div>
    )
  }
}

export default Home
