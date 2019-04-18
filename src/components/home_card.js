import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class HomeCard extends Component {

clickHandler =  () => {
    this.props.onClick(this.props.artistObj)
  }

  render(){
    return (<div className="artist-card" >
        <span>{this.props.index}</span>
        <h3>{this.props.artistObj.name}</h3>
        <img src={this.props.image}/>
        <Link to= {`/${this.props.artistObj.name}`}>{this.props.button}</Link>
      </div>)
  }

}

export default HomeCard
