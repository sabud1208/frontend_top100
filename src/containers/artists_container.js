import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ArtistsList from '../components/artists_list'
import ArtistInfo from './artist_info'
import Input from'../components/input'

class ArtistsContainer extends React.Component {
  state={
    allArtists: [],
    userInput: " "

  }
  // http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Billie%20Eilish&api_key=5888e399a697c41b22612e13ed652177&format=json
  componentDidMount(){
    fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=5888e399a697c41b22612e13ed652177&format=json')
    .then(resp => resp.json())
    .then(artists => this.setState({allArtists: artists["artists"].artist}))
  }
  handleOnChange = (event) => {
     const userInput = event.target.value

     this.setState({
       userInput: userInput
     })
   }

   filterArray = (array) => {
    if(this.state.userInput === ""){
      return array
    } else {
      return [...array].filter(artist => artist.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    }
  }

  render(){
    console.log(this.state.userInput);
    return( <div className="artists">
    <h3>Top 100 Artist</h3>
    <Input userInput={this.state.userInput} handleOnChange={this.handleOnChange}/>
    <div className="artist-list">
    <ArtistsList allArtists ={this.filterArray(this.state.allArtists)} onClick= {this.props.onClick} user={this.props.user} clickHandler={this.props.clickHandler}/>
    </div>
        <div>{this.props.artistInfo ?  <ArtistInfo artistInfo ={this.props.artistInfo}/> : null }
    </div>

</div>)
  }

}

export default ArtistsContainer
