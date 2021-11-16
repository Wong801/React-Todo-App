import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Todo from "./Todo"

const newTodo = {
  title: '',
  desc: ''
}

const Todos = () => {
  const [isSuccess, setIsSuccess] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({})
  const [addTodo, setAddTodo] = useState(false)

  const getTodos = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get('https://wong801simpleapi.herokuapp.com/api/todos')
      setTodos(await data)
    } catch (error) {
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const setComplete = id => {
    if(isEdit && todo) {
      setTodo({...todo, isCompleted: !todo.isCompleted})
    }
    setTodos(
      todos.map(todo => 
        todo._id === id ? 
        { ...todo, isCompleted: !todo.isCompleted } : 
        todo 
      )
    )
  }

  const openTodo = id => {
    const todo = todos.find(todo => {
      return todo._id === id
    })
    setTodo(todo)
    setIsEdit(true)
  }

  const closeTodo = () => {
    setIsEdit(false)
    setTodo({})
  }

  const changeTodo = payload => {
    for(let key in payload) {
      if(payload[key] === '') {
        alert(`${key} cannot be empty`)
        return
      }
    }
    setTodos(todos.map(todo =>
      todo._id === payload._id ? 
      todo = payload :
      todo
    ))
    setIsEdit(false)
    setTodo({})
  }

  const deleteTodo = async(id) => {
    try {
      const todo = todos.find(todo => {
        return todo._id === id
      })
      await axios.delete(`https://wong801simpleapi.herokuapp.com/api/todos/${id}`)
      const arr = [ ...todos ]
      arr.splice(arr.indexOf(todo), 1)
      setTodos(arr)
      alert('task Deleted')
    } catch(error) {
      alert('error')
    }
  }

  const createTodo = async(newTodo) => {
    for(let key in newTodo) {
      if(!newTodo[key]) {
        alert(`${key} cannot be empty`)
        return
      }
    }
    try {
      await axios.post('https://wong801simpleapi.herokuapp.com/api/todos', newTodo)
      const arr = [ ...todos, newTodo ]
      setTodos(arr)
      alert('task Created')
      setAddTodo(false)
    } catch (error) {
      alert('error')
    }
  }

  useEffect(() => {
    getTodos()
  }, [getTodos])

  if(!isLoading && isSuccess) {
    if(isEdit) {
      return (
        <div className="w-full h-96 flex justify-center items-center">
          <Todo todo={todo} isEdit={true} onClick={closeTodo} onToggle={setComplete} onChange={changeTodo} />
        </div>
      )
    }
    if(addTodo) {
      return (
        <div className="p-20">
          <button 
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setAddTodo(false)}
          >
            Close
          </button>
          <div className="border my-4 px-4 rounded-lg">
            <h1 className="text-center text-3xl">Create new Todo</h1>
            <input 
              className="w-full my-4 px-2 py-4 focus:outline-none rounded-lg" 
              type="text" 
              placeholder="Title" 
              onChange={e => newTodo.title = e.target.value} 
            />
            <textarea 
              className="w-full my-4 px-2 py-4 focus:outline-none rounded-lg"
              placeholder="Description" 
              onChange={e => newTodo.desc = e.target.value} 
            ></textarea>
            <button 
              className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg"
              onClick={() => createTodo(newTodo)}
            >
              Confirm
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="my-10 w-max mx-auto">
        <button 
          className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg m-4"
          onClick={() => setAddTodo(true)}
        >
          Create new Todo
        </button>
        <div className="grid grid-cols-4 gap-10 my-8 p-4 justify-center justify-items-center">
          {todos.map((todo) => (
            <Todo key={todo._id} todo={todo} onClick={openTodo} onToggle={setComplete} onDelete={deleteTodo}/>
          ))}
        </div>
      </div>
    )
  }
  return (
    <>
      <p className="my-8 p-4">
        Loading...
      </p>
    </>
  )
}

export default Todos
