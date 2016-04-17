'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
var recentArray = []
module.exports = class recentImgs extends React.Component {
  constructor(props){
   super(props)
   this.state = {recentImg: []}
  }

  update(){


  }



  render (){
    
    var recentchoice =this.props.text
    recentArray.push[recentchoice]
    console.log(recentArray)
   return  (
   	<div className="recentImgs">
    {this.props.text}
   		</div>
   		)
  }
}
