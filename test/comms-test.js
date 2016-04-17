import test from 'ava'
import React from 'react'
import { spy } from 'sinon'
import { shallow, render, mount } from 'enzyme'


//components

import HomePage from './src/components/homepage'
import AskPage from './src/components/askpage'


//Static content

test('<Header />', t=> {

//arrange
const expected ='Comms Companion'

//action

const Header =shallow(React.createElement(Header))

//assert
t.same(wrapper.text(), expected)


})