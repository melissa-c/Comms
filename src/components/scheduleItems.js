'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class recentImgs extends React.Component {
  constructor(props){
    super(props)
   
  }

  render (){
    return (
<<<<<<< HEAD
      <div className={this.props.class} onClick={this.props.onClick}>
        <img  src={this.props.img} />
        <p>{this.props.txt}</p>
=======
      <div className={this.props.class} >
        <img className="scheduleImg" src={this.props.img} />
        <h3>{this.props.txt}</h3>
>>>>>>> 0e6f40eccb64d60bed729ad0e2da199de89f4800
      </div>
   	)
  }
}
