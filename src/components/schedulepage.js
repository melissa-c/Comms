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
      <Items txt="Breakfast" img="img/breakfast.png"/>
      <Items txt="Get Ready" img="img/getDressed.png"/>
      <Items txt="School" img="img/school.png"/>
      <Items txt="Choice" img="img/choice.png"/>
      <Items txt="Homework" img="img/homework.png"/>
      <Items txt="Dinner" img="img/dinner.png"/>
      <Items txt="Bed Time" img="img/bedTime.png"/>
      </div>
    )
  }
}
