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
    this.state = {verbURL:'', imageURL:''}
  }

  update(e){
    if(e.target.parentElement.className === 'verbGallery'){
      this.setState(
        {verbURL: e.target.src}
      )
    } else {
      this.setState(
        {imageURL: e.target.src}
      )
    }
  }

  render(){
    return (
      <div>
        <Header />
        <CommentBoard verb= {this.state.verbURL} image= {this.state.imageURL}/>
        <VerbGallery onClick={this.update.bind(this)} />
        <ImgGallery sender="commentspage" onClick={this.update.bind(this)}/>
      </div>
    )      
  }
}