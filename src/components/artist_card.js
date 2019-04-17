import React, { Component } from 'react';


class ArtistCard extends Component {


clickHandler =  () => {
    this.props.onClick(this.props.artistObj)
  }

  render(){
    return (<div>
      <span>{this.props.index}</span>
      <h3>{this.props.artistObj.name}</h3>
      <img onClick={() => this.props.clickHandler(this.props.artistObj)}src={this.props.image}/>
      <button onClick={() => this.props.onClick(this.props.artistObj)}>Button</button>
    </div>)
  }

}

export default ArtistCard
