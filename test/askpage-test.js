import test from 'ava'
import React from 'react'

import {shallow, render, mount} from 'enzyme'

import AskPage from '../src/components/askpage'
import ImgGallery from '../src/components/imgGallery'

test('<AskPage /> returns 4 buttons and clicks yellow and red buttons', t=> {

	function clickHandler () {
		t.truthy(true)
	}

	const wrapper = mount(<ImgGallery onClick={clickHandler} /> )
	wrapper.find('button.btnJumpYellow').simulate('click');
	wrapper.find('button.btnJumpRed').simulate('click')
	t.deepEqual(wrapper.find('button').length, 4)
})


