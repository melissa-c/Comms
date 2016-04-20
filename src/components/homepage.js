'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'

import HomePageBtn from './homePageBtn'
import Header from './header'
import CommentPage from './commentPage'

function clickfun(){
	console.log('yea')
}

function parentAccess () {
  console.log ('grant parent access')
}

function goToAskPage(){
  window.location = "/#/askpage"
}

function goToSchedulePage(){
  window.location = "/#/schedule"
}

function goToCommentPage(){
  window.location = "/#/commentPage"
}

module.exports = class HomePage extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div>
        <Header />
        <HomePageBtn txt={"Schedule"} onClick={goToSchedulePage} img={"icon/clipboard.png"} />
        <HomePageBtn txt={"I would like..."} onClick={goToAskPage} img={"icon/question.png"} />
        <HomePageBtn txt={"I can..."} onClick={goToCommentPage} img={"icon/user.png"} />
      </div>
    )
  }
}