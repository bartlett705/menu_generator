import React = require('react')
import { MemoryRouter } from 'react-router'
import { fireEvent, render } from 'react-testing-library'
import { mockState } from '../../test/__mocks__/state'
import { App } from '../app'

declare var global: any

const localStorageMock = {
  getItem: jest.fn(() => JSON.stringify(mockState())),
  setItem: jest.fn(),
}

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

const setup = () => {

  const app = (
    <MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>
)

  const wrapper = render(app)
  return wrapper
}

beforeEach(localStorageMock.setItem.mockClear)
it('renders a few menu item lists and loads pantry from storage', () => {
  const { getByLabelText, getByText } = setup()

  getByText(/Belcampo/i)
  getByText(/Bernaise/i)

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
  expect(JSON.parse(localStorageMock.setItem.mock.calls[0][1]).proteins).toContain('wonderful cheese')
})

it('menu items remove items', () => {
  const { getByText } = setup()

  const bel = getByText(/Belcampo/i)
  const removeButton = bel.parentElement.querySelector('button')
  fireEvent.click(removeButton)

  expect(JSON.parse(localStorageMock.setItem.mock.calls[0][1]).proteins).not.toContain('Belcampo Beef Neck')
})
