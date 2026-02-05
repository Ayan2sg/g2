import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello from EC2!!</h1>
      <h2>Deployed successfully!</h2>
      <h3>Application is running on port 3000</h3>
    </div>
  )
}

export default App
