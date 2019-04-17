import React from 'react'
import ArtistCard from './artist_card'

class UserList extends React.Component {
  state={
    count: 0
  }

  render(){

    let arrayOfArtists = this.props.favor.map((artist, index) =>{
      return <ArtistCard index= {index + 1}key={artist.id} artistObj= {artist} clickHandler={this.props.clickHandler} image={artist.image_url} onClick={this.props.onClick}/>

    })
    return arrayOfArtists
  }

}

export default UserList
