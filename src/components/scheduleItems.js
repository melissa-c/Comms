'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class recentImgs extends React.Component {
  constructor(props){
    super(props)
   
  }

  render (){
    return (
      <div className={this.props.class} onClick={this.props.onClick}>
        <img  src={this.props.img} />
        <p>{this.props.txt}</p>
      </div>
   	)
  }
}
