import React from 'react'


class ArtistInfoContainer extends React.Component {

  render(){
    return(
      <div className='info'>

  <div className= 'info-card'>
         <h1>Artist Info</h1>
    <h2>{this.props.artistInfo.name}</h2>
    <span>Plays: {this.props.artistInfo.playcount}</span>
    <span>Fans: {this.props.artistInfo.listeners}</span>
    <img src={this.props.artistInfo ? this.props.artistInfo.image[2]["#text"] : ''}/>
    <a href={this.props.artistInfo.url}>More info</a>
    </div>
    </div>
  )
  }
}

export default ArtistInfoContainer
