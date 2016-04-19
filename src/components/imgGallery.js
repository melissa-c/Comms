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
    if(this.props.sender==="askpage"){
      return  (
        <div>
          <div className="imgGallery">
            {this.state.images.map(function(image){
                    
              switch(image.category) {
                
                case "food":
                    return(<img className= "indAskImg Orange" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                case "home":
                    return(<img className= "indAskImg Yellow" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                case "outside":
                    return(<img className= "indAskImg Green" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                case "school":
                    return(<img className= "indAskImg Red" src={image.filepath} onClick={this.props.onClick}></img>)
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
    else{
      return  (
          <div>
            <div className="imgGallery">
              {this.state.images.map(function(image){
                      
                switch(image.category) {
                  case "body":
                    return(<img className= "indAskImg Purple" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                  case "emotions":
                    return(<img className= "indAskImg Blue" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                  case "home":
                      return(<img className= "indAskImg Yellow" src={image.filepath} onClick={this.props.onClick}></img>)
                      break;
                  case "outside":
                      return(<img className= "indAskImg Green" src={image.filepath} onClick={this.props.onClick}></img>)
                      break;
                  case "school":
                      return(<img className= "indAskImg Red" src={image.filepath} onClick={this.props.onClick}></img>)
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

