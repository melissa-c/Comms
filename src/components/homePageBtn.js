'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class HomePageBtn extends React.Component {
  constructor(props){
   super(props)
  }

  render (){


  
    return (

      <div>
        <button className='navBtn' onClick={this.props.onClick}>
          <img src={this.props.img} />
          {this.props.txt}
        </button>
      </div>
    )
  }
}


