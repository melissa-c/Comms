'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import ImgGallery from './imgGallery'
import VerbGallery from './verbGallery'

module.exports = class CommentBoard extends React.Component {
  constructor(props){
    super(props)
  }
  
  render (){
    return (
      <div className="commentBoard">
        <div>I can</div>
        <div>
          <img className='chosenVerb' src={this.props.verb}></img>
        </div>
        <div>
          <img className='chosenPic' src={this.props.image}></img>
        </div>
      </div>
    )
  }
}

