'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class ParentAdminBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  <div><button className='parentAdmin'>parent admin</button></div>
      
  }
}