'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Request from 'superagent'

function change(e){
  if(e.target.name==="red"){
    var elements = []
    elements = document.getElementsByClassName('Red').className = "hidden"
    console.log(elements)
  }
}

module.exports = class ImgGallery extends React.Component {
  constructor(props){
   super(props)
    console.log(this.props.onClick);
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

  update(e){

  }

  render (){
    if(this.props.parentName==="askpage"){
      return  (
        <div>
          <div className="imgGallery">
            {this.state.images.map(function(image){
                    
              switch(image.category) {
                
                case "food":
                    return(<img id='yellow' className= "indAskImg Orange" src={image.filepath} onClick={this.props.onClick}></img>)
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
          <button name='green' className='btnJumpGreen' onClick={change}></button>
          <button name='red' className='btnJumpRed' onClick={change}></button>
          <button name='orange' className='btnJumpOrange' onClick={change}></button>
        </div>
      )
    }
    else{
      return  (
          <div>
            <div className="imgGallery">
              {this.state.images.map(function(image, index){
                      
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
          <button name='yellow' className='btnJumpYellow' onClick={change}></button>
          <button name='green' className='btnJumpGreen' onClick={change}></button>
          <button name='red' className='btnJumpRed' onClick={change}></button>
          <button name='orange' className='btnJumpOrange' onClick={change}></button>
          </div>
      )
    }
  }
}
