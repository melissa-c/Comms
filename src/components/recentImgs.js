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

componentWillMount(){
    console.log("mounting")

  }

componentWillUnmount(){
    console.log("unmount")
  }


render (){
        var recentchoice = this.props.text
    
   
   return (
      <div className="recentImgs">
        {recentchoice.map(function(image){
          return(<img className= {image[1]} src={image[0]} onClick={this.props.onClick}></img>)
        }, this)}
        
      </div>
   		)
  }
}
 

  