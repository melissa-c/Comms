'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class BackBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){

   return ( <div>
	   <button className='backBtn' onClick={this.props.onClick}>Back</button>
	   </div>
	   )
	}
}
