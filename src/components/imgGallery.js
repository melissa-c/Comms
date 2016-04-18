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
        
  switch(image.category) {
    case "body":
        return(<img className= "indAskImgPurple" src={image.filepath} onClick={this.props.onClick}></img>)
        break;
    case "food":
        return(<img className= "indAskImgOrange" src={image.filepath} onClick={this.props.onClick}></img>)
        break;
    case "emotions":
        return(<img className= "indAskImgBlue" src={image.filepath} onClick={this.props.onClick}></img>)
        break;
    case "home":
        return(<img className= "indAskImgYellow" src={image.filepath} onClick={this.props.onClick}></img>)
        break;
    case "outside":
        return(<img className= "indAskImgGreen" src={image.filepath} onClick={this.props.onClick}></img>)
        break;
    case "school":
        return(<img className= "indAskImgRed" src={image.filepath} onClick={this.props.onClick}></img>)
        break;
    case "verbs":
        return(<img className= "indAskImgBlack" src={image.filepath} onClick={this.props.onClick}></img>)
        break;
  }
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

