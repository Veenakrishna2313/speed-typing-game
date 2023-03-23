import { useState } from 'react'

import './App.css'

function App() {
  const [text,setText] = useState('')


  const handleChange=(e)=>{
    const {value}=e.target;
    setText(value)
  }

 
  return (
    <div className="App">
        <h1>Speed Typing Game</h1>
        <textarea 
            type="text"
            value={text}
            name="text"
            onChange={handleChange}
            />
        <h4>Time remaining:</h4>
        <button>Start</button>
        <h1>Word Count</h1>
    </div>
  )
}

export default App
