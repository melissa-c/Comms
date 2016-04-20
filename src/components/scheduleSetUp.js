'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Items from './scheduleItems'



module.exports = class HomePageBtn extends React.Component {
  constructor(props){
    super(props)
    this.state = {items: [{txt: "Breakfast", selected: false }, {txt: "Get Ready", selected: false }, {txt: "School", selected: false }]}
  }


  itemClickHandler(index){
    return function(){
      var newState = Object.assign({}, this.state)
      newState.items[index].selected = true;
      this.setState(newState)
    }.bind(this)

  }

  render (){
    return (
      <div>
        <Header />
        <div className="setUpLeft">
          {this.state.items.map(function(item, index){
            return <Items key={index} class="scheduleSmall" txt={item.txt} onClick={this.itemClickHandler(index)} />
          }, this)
          }
        </div>
        <div id="setUpRight">
        {this.state.items.filter(function(item){
          return item.selected
        }).map(function(item){
            return <Items class="scheduleSmall" txt={item.txt}  />
          })
          }

        </div>
      </div>
    )
  }
}


