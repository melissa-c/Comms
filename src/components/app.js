import React from 'react';  
import {Router, Route} from 'react-router';  
import domready from 'domready'
import Login from './login'



render ((
<Router>
  <Route path ='/login' component={Login}/><Route>
</Router>
  ), document.getEementById('main'))
