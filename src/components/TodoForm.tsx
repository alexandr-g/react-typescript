import React, { useRef } from 'react'

export const TodoForm: React.FC = () => {
  //   const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value)
  //   }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(ref.current!.value)
      ref.current!.value = ''
      //   console.log('pressed', title)
      //   setTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={handleChange}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Enter todo title"
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active">
        Enter todo title
      </label>
    </div>
  )
}
