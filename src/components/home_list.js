import React from 'react'
import HomeCard from './home_card'

class HomeList extends React.Component {
state={
  count: 0
}
  render(){
    let arrayOfArtists = this.props.allArtists.map((artist, index)=>{
      return  <HomeCard index= {index + 1} key={artist.name} artistObj= {artist} image= {artist.image[2]["#text"]} />

    })
    return (<div className="artist-list">{arrayOfArtists}</div>)
  }

}

export default HomeList
