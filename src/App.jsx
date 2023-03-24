import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className=' bg-gradient-to-b from-blue-800 to-blue-900 text-white w-screen h-screen grid place-items-center'>
    <h1>hello tribe</h1>
   </div>
   </>
  )
}

export default App
