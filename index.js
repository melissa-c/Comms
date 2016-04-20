import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'
import Timer from './src/components/timer'
import CommentPage from './src/components/commentPage'

import Schedule from './src/components/schedulepage'
import ParentAdmin from './src/components/parentadminpage'
import scheduleSetUp from './src/components/scheduleSetUp'

ReactDOM.render(
  
  <Router history={hashHistory}>

    <Route path='/' component={HomePage} testProp="rabbit" />
    <Route path='parentAdmin' component={ParentAdmin} />
    <Route path='scheduleSetUp' component={scheduleSetUp}/>
    <Route path='timer' component={Timer}/>
    <Route path='schedule' component={Schedule} />
    <Route path='askpage' component={AskPage}/>
    <Route path='commentPage' component={CommentPage}/>

  </Router>,
  document.getElementById('content')
)