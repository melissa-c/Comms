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
        {images: JSON.parse(res.text), filter: "ALL"}
        )
    }.bind(this))
  }

  render (){
    if(this.props.sender==="askpage"){
      return  (
        <div>
          <div className="imgGallery">
            {this.state.images.filter(function(image){
              if(this.state.filter == "ALL"){
                return true
              } else{
              return image.category == this.state.filter}
            }, this).map(function(image){
            {this.state.images.map(function(image){

                    
              switch(image.category) {
                
                case "food":
                    return(<img id='orange' className= "indAskImg Orange" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                case "home":
                    return(<img  id='yellow' className= "indAskImg Yellow" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                case "outside":
                    return(<img  id='green' className= "indAskImg Green" src={image.filepath} onClick={this.props.onClick}></img>)
                    break;
                case "school":
                    return(<img  id='red' className= "indAskImg Red" src={image.filepath} onClick={this.props.onClick}></img>)
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
          
          <button name='orange' className='btnJumpOrange' onClick={function(){this.setState({filter: "food"})}.bind(this)}></button>
          <button name='green' className='btnJumpGreen' onClick={function(){this.setState({filter: "outside"})}.bind(this)}></button>
          <button name='red' className='btnJumpRed' onClick={function(){this.setState({filter: "school"})}.bind(this)}></button>
          <button name='yellow' className='btnJumpYellow' onClick={function(){this.setState({filter: "home"})}.bind(this)}></button>
        </div>
      )
      }
      else{
        return  (
            <div>
              <div className="imgGallery">
                {this.state.images.filter(function(image){
                  if(this.state.filter == "ALL"){
                    return true
                  } else{
                    return image.category == this.state.filter}
                }, this).map(function(image){
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
            <button name='blue' className='btnJumpBlue' onClick={function(){this.setState({filter: "body"})}.bind(this)}></button>
            <button name='purple' className='btnJumpPurple' onClick={function(){this.setState({filter: "emotions"})}.bind(this)}></button>
            <button name='green' className='btnJumpGreen' onClick={function(){this.setState({filter: "outside"})}.bind(this)}></button>
            <button name='red' className='btnJumpRed' onClick={function(){this.setState({filter: "school"})}.bind(this)}></button>
            <button name='yellow' className='btnJumpYellow' onClick={function(){this.setState({filter: "home"})}.bind(this)}></button>
            </div>
        )
      }
    }
  }
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
}
