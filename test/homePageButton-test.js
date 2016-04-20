import test from 'ava'
import React from 'react'
import {shallow, render, mount} from 'enzyme'

import HomePageBtn from '../src/components/homePageBtn'

test ('1/2<HomePageBtn >  returns button element', t => {

	const expected ='Schedule'
   	const wrapper1 =mount(<HomePageBtn /> )
 	var div = wrapper1.html()
	t.deepEqual(div, '<div><button class="navBtn"><img></button></div>')
})

test ('2/2 <HomePageBtn> button click  works', t=> {

	function clickHandler () {
	t.truthy(true)

	}
	const wrapper2 = mount(<HomePageBtn onClick={clickHandler} /> )
	wrapper2.find('button').simulate('click');
})