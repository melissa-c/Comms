'use strict'

import React from 'react'
import ReactDOM from 'react-dom'


module.exports = class Header extends React.Component {
  constructor(props){
   super(props)
  }
  render (){
   return  (<div className="header">
    <button>button home</button>
    <h2>COMMS COMPANION</h2>
    <button>button timer</button>
   		
   		</div>

   		)
      
  }
}
