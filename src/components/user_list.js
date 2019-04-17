import React from 'react'
import ArtistCard from './artist_card'

class UserList extends React.Component {

  render(){

    let arrayOfArtists = this.props.favor.map((artist) =>{
      return <ArtistCard key={artist.id} artistObj= {artist} clickHandler={this.props.clickHandler} image={artist.image_url} onClick={this.props.onClick}/>

    })
    return arrayOfArtists
  }

}

export default UserList
