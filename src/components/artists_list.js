import React from 'react'
import ArtistCard from './artist_card'

class ArtistsList extends React.Component {
state={
  count: 0
}
  render(){
    let arrayOfArtists = this.props.allArtists.map((artist, index)=>{
      return  <ArtistCard index= {index + 1} key={artist.name} clickHandler= {this.props.clickHandler}  artistObj= {artist} image= {artist.image[2]["#text"]} onClick={this.props.favoriteArtist} buttonB = {<button onClick={() => this.props.favoriteArtist(artist)}>Add To Favorites</button>} user={this.props.user} button ={<button onClick={() => this.props.artistInfoHandler(artist, index)}> Artist Info</button>}/>

    })
    return arrayOfArtists
  }

}

export default ArtistsList
