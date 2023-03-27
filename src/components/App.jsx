import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../stylesheets/App.css';
import Login from './login/Login';
import SignUp from './login/SignUp';
// import LandingPage from './LandingPage';
// import MyProjects from './MyProjects';
// import ProjectForm from './ProjectForm';
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
      </Routes>
    </div>
  )
}

export default App
