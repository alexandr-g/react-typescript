import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Todos } from './pages/Todos'
import { About } from './pages/About'

import { Navbar } from './components/Navbar'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Todos} exact />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
