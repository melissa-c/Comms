import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path='/' component={HomePage}/>
      <Route path='askpage' component={AskPage}/>
  </Router>,
  document.getElementById('content')
)
