import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => {

  return (
    <div className="footer-bar">
      <p className="mobile-foo">Ⓒ Paula Dixon & Isa Martinez, 2020</p>
      <p className="foo">Copyright Ⓒ Paula Dixon & Isa Martinez, 2020</p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className="foo-link" to="/contact">Contact us</Link>
    </div>
  )
}

export default Footer