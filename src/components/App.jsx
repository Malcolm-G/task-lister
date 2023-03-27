import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../stylesheets/App.css';
import Login from './login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </div>
  )
}

export default App
