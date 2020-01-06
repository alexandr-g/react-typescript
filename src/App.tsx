import React, { Fragment } from 'react'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h1>Test</h1>
      </div>
    </Fragment>
  )
}

export default App
