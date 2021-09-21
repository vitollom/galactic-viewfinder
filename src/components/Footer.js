import React from 'react'
import { Nav } from 'react-bootstrap'

function Footer() {
  return (
    <Nav className='footer'>
      <Nav.Item className='signature'>
        Created by Michael Vitollo
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='https://www.linkedin.com/in/michael-vitollo/' target='blank'>
          LinkedIn
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='https://www.github.com/vitollom' target='blank'>
          Github
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Footer