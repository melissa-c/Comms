'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Items from './scheduleItems'

module.exports = class AskPage extends React.Component {
  constructor(props){
    super(props)
  }

  update(e){

  }

  render (){
    return (
      <div>
      <Header />
      <h2>What am I doing today?</h2>
      <Items class="scheduleItems" txt="Breakfast" img="img/breakfast.png"/>
      <Items class="scheduleItems" txt="Get Ready" img="img/getDressed.png"/>
      <Items class="scheduleItems" txt="School" img="img/school.png"/>
      <Items class="scheduleItems" txt="Choice" img="img/choice.png"/>
      <Items class="scheduleItems" txt="Homework" img="img/homework.png"/>
      <Items class="scheduleItems" txt="Dinner" img="img/dinner.png"/>
      <Items class="scheduleItems" txt="Bed Time" img="img/bedTime.png"/>
      </div>
    )
  }
}
