import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../stylesheets/App.css';
import Login from './login/Login';
import SignUp from './login/SignUp';
// import LandingPage from './LandingPage';
import MyTodos from './MyTodos';
import TodoForm from './TodoForm';
// import UpdateProjectForm from './UpdateProjectForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
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
      </Routes>
    </div>
  )
}

export default App
