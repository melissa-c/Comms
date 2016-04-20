'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'

import HomePageBtn from './homePageBtn'
import Header from './header'
import CommentPage from './commentPage'

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
        <HomePageBtn id={"schedule"} txt={"Schedule"} onClick={goToSchedulePage} img={"icon/clipboard.png"} />
        <HomePageBtn id={"ask"} txt={"I would like..."} onClick={goToAskPage} img={"icon/question.png"} />
        <HomePageBtn id={"ican"} txt={"I can..."} onClick={goToCommentPage} img={"icon/ican.png"} />
      </div>
    )
  }
}