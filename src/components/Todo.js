import PropTypes from 'prop-types'
import dayjs from "dayjs"

const Todo = ({ todo, onDelete, onClick, onToggle, isEdit, onChange }) => {
  if(isEdit) {
    return (
      <div className="border rounded-lg w-80">
        <div className="bg-gray-200 py-1 rounded-t-lg">
          <div 
            className={
              'text-xs border py-1 px-2 -mt-4 mx-2 w-max rounded-lg ' + 
              ( 
                todo.isCompleted ? 
                'bg-green-500' : 
                'bg-yellow-500' 
              )
            }
          >
            <span className="capitalize font-semibold">
              { todo.isCompleted ? 'Done' : 'not Done' }
            </span>
          </div>
          <input 
            className="text-lg text-center pb-2 w-full bg-transparent focus:outline-none" 
            placeholder="insert title..."
            defaultValue={todo.title}
            onChange={e => todo.title = e.target.value}
          />
        </div>
        <div className=" px-4 py-2">
          <div className="flex justify-between">
            <button className="text-xs hover:underline" onClick={onClick}>
              close
            </button>
            <p className="text-xs">
              { dayjs(todo.createdAt).format('YYYY-MM-DD HH:mm') }
            </p>
          </div>
          <textarea 
            className="text-sm self-end p-1 w-full mt-2 bg-transparent" 
            defaultValue={todo.desc}
            onChange={e => todo.desc = e.target.value}
          ></textarea>
        </div>
        <div className="flex">
          <button 
            className={
              'text-center w-full mt-4 py-2 rounded-bl-lg hover:text-white border ' + 
              (
                todo.isCompleted ? 
                'text-yellow-500 border-yellow-500 hover:bg-yellow-500' : 
                'text-green-500 border-green-500 hover:bg-green-500'
              ) 
            }
            onClick={() => onToggle(todo._id)}
          >
            Set as { todo.isCompleted ? 'Incomplete' : 'Complete' }
          </button>
          <button 
            className="text-center w-full mt-4 py-2 rounded-br-lg border border-gray-600 bg-gray-600 hover:bg-gray-800 text-white"
            onClick={() => onChange(todo)}
          >
            Save
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="border rounded-lg w-72">
      <div className="bg-gray-200 py-1 rounded-t-lg">
        <div 
          className={
            'text-xs border py-1 px-2 -mt-4 mx-2 w-max rounded-lg ' + 
            ( 
              todo.isCompleted ? 
              'bg-green-500' : 
              'bg-yellow-500' 
            )
          }
        >
          <span className="capitalize font-semibold">
            { todo.isCompleted ? 'Done' : 'not Done' }
          </span>
        </div>
        <button className="w-full" onClick={() => onClick(todo._id)}>
          <h1 className="text-lg text-center pb-2">{ todo.title }</h1>
        </button>
      </div>
      <div className=" px-4 py-2">
        <div className="flex justify-between">
          <button className="hover:underline text-xs hover:text-red-500" onClick={() => onDelete(todo._id)}>
            delete
          </button>
          <p className="text-xs">
            { dayjs(todo.createdAt).format('YYYY-MM-DD HH:mm') }
          </p>
        </div>
        <h3 className="text-sm mt-4">{ todo.desc }</h3>
      </div>
      <button 
        className={
          'text-center w-full mt-4 py-2 rounded-b-lg hover:text-white border ' + 
          (
            todo.isCompleted ? 
            'text-yellow-500 border-yellow-500 hover:bg-yellow-500' : 
            'text-green-500 border-green-500 hover:bg-green-500'
          ) 
        }
        onClick={() => onToggle(todo._id)}
      >
        Set as { todo.isCompleted ? 'Incomplete' : 'Complete' }
      </button>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  onToggle: PropTypes.func,
  onChange: PropTypes.func,
  isEdit: PropTypes.bool
}

Todo.defaultProps = {
  todo: {
    _id: "1",
    title: "Example",
    desc: "This is just example",
    isCompleted: true,
    createdAt: new Date()
  },
  isEdit: false
}

export default Todo
