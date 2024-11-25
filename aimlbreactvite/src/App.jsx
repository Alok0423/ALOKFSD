import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageMnupulation from './ImageMnupulation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ImageMnupulation/>
  )
}

export default App
