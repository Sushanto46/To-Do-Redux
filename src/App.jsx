import Todos from './components/Todos';
import AddTodos from './components/AddTodos';
import './App.css'
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector(state => state.todos)
  return (
    <>
    <AddTodos />
    <ul className="list-none">
    {todos.map((todo) => (
    <Todos todo={todo}/>
    ))}
    </ul>
    </>
  )
}

export default App
