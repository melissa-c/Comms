import test from 'ava'
import React from 'react'

import {shallow, render, mount} from 'enzyme'

import HomePageBtn from '../src/components/homePageBtn'

test ('<HomePageBtn > will return button click', t => {


	const expected ='Schedule'
  

 	const wrapper1 =mount(<HomePageBtn />)

 	var div = wrapper1.find('img').text()
	console.log('here is <div>', div)
  


	function clickHandler () {
	t.truthy(true)

	}
	const wrapper2 = mount(<HomePageBtn onClick={clickHandler} /> )
	wrapper2.find('button').simulate('click');



})