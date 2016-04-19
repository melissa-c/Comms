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
    this.state = {imageURL:'', recentURL: []}
  }

  update(e){
    this.setState(
      {imageURL: e.target.src, recentURL: recentArray}
    )
  }

  render(){
    return (
      <div>
        <Header />
        <CommentBoard text= {this.state.imageURL}/>
        <VerbGallery text= {this.state.recentURL} onClick={this.update.bind(this)} />
        <ImgGallery onClick={this.update.bind(this)}/>
      </div>
    )      
  }
}