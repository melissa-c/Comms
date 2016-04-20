'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import {IndexLink} from 'react-router'

module.exports = class HeaderBtn extends React.Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div>
        <IndexLink to={this.props.to} className="headerBtn" activeClassName='hidden' >
          <img src={this.props.img} />
        </IndexLink>
      </div>
    )
  }
}


