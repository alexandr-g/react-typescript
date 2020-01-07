import React, { Fragment, useState } from 'react'

import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />

        <TodoList todos={todos} />
      </div>
    </Fragment>
  )
}

export default App
