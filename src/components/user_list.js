import React from 'react'
import ArtistCard from './artist_card'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class UserList extends React.Component {
  state={
    count: 0
  }

  render(){

    let arrayOfArtists = this.props.favor.map((artist, index) =>{
      return <ArtistCard index= {index + 1}key={artist.id} artistObj= {artist} image={artist.image_url} onClick={this.props.onClick} buttonB={<button onClick={() => this.props.onClick(artist)}>Delete</button>}/>

    })
    return arrayOfArtists
  }

}

export default UserList
