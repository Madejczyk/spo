import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../src/components/layout/Root'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Root />, div)
});