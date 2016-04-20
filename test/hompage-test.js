import test from 'ava'
import React from 'react'
import {shallow, render, mount} from 'enzyme'

import HomePage from '../src/components/homepage'
import Header from '../src/components/header'

test ('Homepage commponents adds to <HomePage> ', t => {

	const wrapper = shallow(<HomePage />)
	var homepg = wrapper.find('div').html()
	t.deepEqual(homepg, '<div><div class="header"><div><button id="home" class="headerBtn"><img src="icon/home.png"/><p class="labels">home</p></button></div><div><button id="admin" class="headerBtn"><img src="icon/lock.png"/><p class="labels">admin</p></button></div><h1><span>Comms</span><br/> Companion</h1><div><button id="timer" class="headerBtn"><img src="icon/FPO_timer.png"/><p class="labels">timer</p></button></div></div><div><button class="navBtn"><img src="icon/clipboard.png"/>Schedule</button></div><div><button class="navBtn"><img src="icon/question.png"/>I would like...</button></div><div><button class="navBtn"><img src="icon/user.png"/>I can...</button></div></div>')
})