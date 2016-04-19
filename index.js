import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'
import Timer from './src/components/timer'
import CommentPage from './src/components/commentPage'

import Schedule from './src/components/schedulepage'
import ParentAdmin from './src/components/parentadminpage'
import ScheduleAdmin from './src/components/scheduleAdmin'

ReactDOM.render(
  
  <Router history={hashHistory}>

    <Route path='/' component={HomePage}/>
    <Route path='parentAdmin' component={ParentAdmin} />
    <Route path='scheduleAdmin' component={ScheduleAdmin}/>
    <Route path='timer' component={Timer}/>

    <Route path='schedule' component={Schedule} />
    <Route path='askpage' component={AskPage}/>
    <Route path='commentPage' component={CommentPage}/>

  </Router>,
  document.getElementById('content')
)