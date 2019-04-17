import React from 'react'



class ArtistInfo extends React.Component {
  render(){
    return(
      <div className= 'info'>
    <h2>{this.props.artistInfo.name}</h2>
    <span>{this.props.artistInfo.playcount}</span>
    <span>{this.props.artistInfo.listeners}</span>
    <img src={this.props.artistInfo.image[2]["#text"]}/>
    </div>
  )
  }

}

export default ArtistInfo
