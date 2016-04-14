import ReactDom from 'react-dom'
import React from 'react'

import NavButton from './src/components/button'

var buttonNames = ['Schedule', 'Ask', 'Comment', 'Piet is cool']
var buttons = buttonNames.map(function(name) {
 return <NavButton txt={name} /> 
})

ReactDom.render(
  <div> {buttons} </div>,
  document.getElementById('content')
  )

