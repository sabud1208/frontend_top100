import React from 'react'



class ArtistInfo extends React.Component {
  render(){
    return(
  <div className= 'info'>
    <h2>{this.props.artistInfo.name}</h2>
    <span>Plays: {this.props.artistInfo.playcount}</span>
    <span>Fans: {this.props.artistInfo.listeners}</span>
    <img src={this.props.artistInfo ? this.props.artistInfo.image[2]["#text"] : ''}/>
    </div>
  )
  }

}

export default ArtistInfo
