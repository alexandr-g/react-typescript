import React, { Fragment, useState } from 'react'

import { Navbar } from './components/Navbar'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces'

declare var confirm: (question: string) => boolean

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<ITodo>>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure you want to delete this todo?')

    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />

        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </Fragment>
  )
}

export default App
