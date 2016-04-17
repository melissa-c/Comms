'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

module.exports = class ParentAdminBtn extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  <div><button className='parentAdmin'>admin</button></div>
      
  }
}