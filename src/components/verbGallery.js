'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Request from 'superagent'

module.exports = class VerbGallery extends React.Component {
  constructor(props){
   super(props)
   this.state = {images: []}
  }

  componentDidMount(){
    Request
    .get('/database')
    .end(function(err, res){
      this.setState(
        {images: JSON.parse(res.text)}
      )
    }.bind(this))
  }

  render (){
    var verbPics = this.props.text
    
    return (
      <div className="verbGallery">
        {this.state.images.map(function(image){
          switch(image.category) {
            case "verbs":
            return (<img className= "indAskImg Black" src={image.filepath} onClick={this.props.onClick} />)
            break;
          }
        }, this)}
      </div>
    )
  }
}
