'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import ImgGallery from './imgGallery'

module.exports = class AskBoard extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
     	<div className="askBoard">
     		<div>I would like</div>
     		<div>
          <img className='chosenPic' src={this.props.text}></img>
        </div>
     	</div>
   	)
  }
}
