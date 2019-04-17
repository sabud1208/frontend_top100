import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class ArtistCard extends Component {

clickHandler =  () => {
    this.props.onClick(this.props.artistObj)
  }

  render(){
    return (
    <Link to={`/${this.props.artistObj.name}`} >
      <div className="artist-card" >
        <span>{this.props.index}</span>
        <h3>{this.props.artistObj.name}</h3>
        <img onClick={() => this.props.clickHandler(this.props.artistObj)}src={this.props.image}/>
        <button onClick={() => this.props.onClick(this.props.artistObj)}>Button</button>
      </div>
    </Link>
  )
  }

}

export default ArtistCard
