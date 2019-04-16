import React from 'react'
import ArtistCard from './artist_card'

class ArtistsList extends React.Component {

  render(){
    let arrayOfArtists = this.props.allArtists.map(artist=>{
      return <ArtistCard key={artist.name} artistObj= {artist} image= {artist.image[2]["#text"]}onClick={this.props.onClick} user={this.props.user}/>
    })
    return arrayOfArtists
  }

}

export default ArtistsList
