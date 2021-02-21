import React from 'react'
import { render, GetByText } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from './index'

test('should not allowed click button if disabled is present', () => {
  const {container} = render(<Button isDisabled></Button>)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('should render loading/spinner', () => {
  const {container, getByText} = render(<Button isLoading></Button>)

  expect(getByText(/loading/i)).toBeInTheDocument()
  expect(container.querySelector('span')).toBeInTheDocument()
})

test('should render <a> tag', () => {
  const {container} = render(<Button isExternal type="link"></Button>)
  expect(container.querySelector('a')).toBeInTheDocument()
})

test('should render <Link> tag', () => {
  const {container, getByText} = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  )
  // expect(getByText(/link/i)).toBeInTheDocument()
  expect(container.querySelector('a')).toBeInTheDocument()
})

