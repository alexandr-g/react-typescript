import React from 'react'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        React + TypeScript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">Todo list</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
