import React = require('react')
import { MemoryRouter } from 'react-router'
import { fireEvent, render } from 'react-testing-library'
import { App } from '../app'

declare var global: any

const setup = () => {

  const app = (
    <MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>
)

  const wrapper = render(app)
  return wrapper
}

it('renders a few menu item lists', () => {
  const { getByLabelText, getByText } = setup()

  getByLabelText(/add item/i)
  getByText(/proteins/i)
  getByText(/starches/i)
  getByText(/sauces/i)
})

it('menu item lists add items', () => {
  const { getByLabelText, getByText } = setup()

  const input = getByLabelText(/add item/i)
  fireEvent.change(input, { target: { value: 'wonderful cheese' } })

  const addbutton = getByText('+')
  fireEvent.click(addbutton)
  getByText('wonderful cheese')
})

it('menu items remove items', () => {
  const { getByText, queryByText } = setup()

  const bel = getByText(/Belcampo/i)
  const removeButton = bel.parentElement.querySelector('button')
  fireEvent.click(removeButton)

  expect(queryByText(/Belcampo/i)).toBeNull()
})
