import test from 'ava'
import React from 'react'
import {spy} from 'sinon'
import {shallow, render, mount} from 'enzyme'


//components

// import HomePage from '../src/components/homepage'
// import AskPage from '../src/components/askpage'
import Header from '../src/components/header'



test('<Header />', t => {

  const expected ='Comms Companion'

  const wrapper =shallow(<Header />)
  var h1 = wrapper.find('h1')
  console.log('here is h1', h1.text())


  t.deepEqual(h1.length, 1)
  t.deepEqual(h1.text(), expected)
})

