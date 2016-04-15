//import react and react-dom 
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
//import homepage button component
//import HomePageBtn from './src/components/homePageBtn'
import HomePage from './src/components/homepage'


var btnNames = ['Schedule', 'I would like...', 'I can...', 'Social Stories']
var buttons = btnNames.map(function(name, id){
	
	return <HomePageBtn key={id} txt={name} />
});


	ReactDOM.render((
		<Router history={hashHistory}> 
		<Route path='homepage' component={HomePage}/>
		</Router>
		), document.getElementById('content')
)


