import test from 'ava'
import React from 'react'
import {spy} from 'sinon'
import {shallow, render, mount} from 'enzyme'
import TestUtils from 'react-addons-test-utils';


//components

import Header from '../src/components/header'
import HeaderBtn from '../src/components/headerBtn'
 


test('<Header /> returs page header ', t => {

  const expected ='Comms Companion'
  

  const wrapper =shallow(<Header />)
  var h1 = wrapper.find('h1')
  console.log('here is h1', h1.text())


  t.deepEqual(h1.length, 1)
  t.deepEqual(h1.text(), expected)
})

test('<HeaderBtn /> returns bottons', t=> {

function clickHandler () {
	t.truthy(true)

}

const wrapper = mount(<HeaderBtn onClick={clickHandler} /> )
wrapper.find('button').simulate('click');

})