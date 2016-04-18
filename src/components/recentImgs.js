'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
var recentchoice
var recentArray = []

module.exports = class recentImgs extends React.Component {
  constructor(props){
   super(props)
   this.state = {recentImg: []}
  }


  render (){
        var recentchoice = this.props.text
        console.log(recentchoice, '**')
    
   
   return (
      <div className="recentImgs">
        {recentchoice.map(function(image){
          console.log(image,'image')
          return(<img className= {image[1]} src={image[0]}></img>)
        }, this)}
        
      </div>
   		)
  }
}
