'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class HeaderBtn extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div>
        <button id ={this.props.id} className='headerBtn' onClick={this.props.onClick}>
          <img src={this.props.img} />
          <p className="labels">{this.props.txt}</p>
        </button>
      </div>
    )
  }
}


