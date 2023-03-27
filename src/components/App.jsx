import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../stylesheets/App.css';
import Navbar from './Navbar';
import Login from './login/Login';
import SignUp from './login/SignUp';
import LandingPage from './LandingPage';
import MyTodos from './MyTodos';
import TodoForm from './TodoForm';
import UpdateTodoForm from './UpdateTodoForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact path="/"
          element={<LandingPage />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
        path="/signup"
        element={<SignUp />}
        />
        <Route
        path="/my-todos"
        element={<MyTodos/>}
        />
        <Route
        path="/project-form"
        element={<TodoForm />}
        />
        <Route
        path="/update-todo-form/:id"
        element={<UpdateTodoForm />}
        />
      </Routes>
    </div>
  )
}

export default App
