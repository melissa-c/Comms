'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Request from 'superagent'

module.exports = class ImgGallery extends React.Component {
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

   return  (
  <div>
    <div className="imgGallery">
      {this.state.images.map(function(image){
        return(<img className= "indAskImg" src={image.filepath} onClick={this.props.onClick}></img>)
      }, this)}
      
    </div>
    <button className='yellow'></button>
    <button className='blue'></button>
    <button className='red'></button>
    <button className='green'></button>
   </div>
  )
      
  }
}

