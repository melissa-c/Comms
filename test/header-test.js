import test from 'ava'
import React from 'react'
import {spy} from 'sinon'
import {shallow, render, mount} from 'enzyme'
import TestUtils from 'react-addons-test-utils';

//components
import Header from '../src/components/header'
import HeaderBtn from '../src/components/headerBtn'
 

test('1/3 <Header /> returs page header ', t => {

	const expected ='Comms Companion'

	const wrapper =shallow(<Header />)
	var h1 = wrapper.find('h1')

	t.deepEqual(h1.length, 1)
	t.deepEqual(h1.text(), expected)
})

test('2/3 <HeaderBtn /> returns bottons', t=> {

	function clickHandler () {
		t.truthy(true)
	}

	const wrapper = mount(<HeaderBtn onClick={clickHandler} /> )
	wrapper.find('button').simulate('click');
	})

test('3/3 <HeaderBtn />  timer test', t =>{

	const wrapper = mount(<HeaderBtn />)

	var timer= wrapper.html()
})