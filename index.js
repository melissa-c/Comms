//import react and react-dom 
import React from 'react'
import ReactDOM from 'react-dom'
//import homepage button component
import HomePageBtn from './src/components/homePageBtn'

var btnNames = ['Schedule', 'I would like...', 'I can...', 'Social Stories']
var buttons = btnNames.map(function(name, id){
	
	return <HomePageBtn key={id} txt={name} />
});


	ReactDOM.render(
		<div> {buttons} </div>, document.getElementById('content')

)