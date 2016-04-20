'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class recentImgs extends React.Component {
  constructor(props){
    super(props)
   
  }

  render (){
    return (
      <div className={this.props.class} >
        <img className="scheduleImg" src={this.props.img} />
        <h3>{this.props.txt}</h3>
      </div>
   	)
  }
}
