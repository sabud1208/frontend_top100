import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class HomeCard extends Component {
  state={
    count:0
  }

clickHandler =  () => {
    this.props.onClick(this.props.artistObj)
  }

  render(){

    return (<div className="artist-card artist-card-home" >
            <h2>Spot: {this.props.index}</h2>
        <h3>Artist Name: {this.props.artistObj.artist.name}</h3>
        <h3>Song: {this.props.artistObj.name}</h3>
        <img src={this.props.image}/>
        <Link to= {`/${this.props.artistObj.name}`}>{this.props.button}</Link>
      </div>)
  }

}

export default HomeCard
