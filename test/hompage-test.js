import test from 'ava'
import React from 'react'

import {shallow, render, mount} from 'enzyme'

import HomePage from '../src/components/homepage'
import HomePageBtn from '../src/components/homePageBtn'


test ('HomepageBtn commponents adds to <Homepage> ', t =>{

const wrapper = mount(<HomePage />)
var homepgbtn = wrapper.find('div')


t.deepEqual(homepgbtn.length, 8)
})