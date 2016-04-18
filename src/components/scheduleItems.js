'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class recentImgs extends React.Component {
  constructor(props){
   super(props)
  }


  render (){
  return (
    <div>
      <div className="scheduleItems">
        <h2>{this.props.txt}</h2>
      </div>
    </div>
   	)
  }
}
