'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import CommentBoard from './commentBoard'
import ImgGallery from './imgGallery'
import VerbGallery from './verbGallery'
import Header from './header'

module.exports = class CommentPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {imageURL:''}
  }

  update(e){
    this.setState(
      {imageURL: e.target.src}
    )
  }

  render(){
    return (
      <div>
        <CommentBoard text= {this.state.imageURL}/>
        <VerbGallery onClick={this.update.bind(this)} />
        <ImgGallery onClick={this.update.bind(this)}/>
      </div>
    )      
  }
}