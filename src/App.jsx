import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [text,setText] = useState('');
  const [timeRemaining,setTimeRemaining]=useState(5);



  useEffect(()=>{
    setTimeout(()=>{
      setTimeRemaining(prevState=>{
         return prevState>0?prevState-1:0;
      })
    },1000)
  },[timeRemaining]);

  const handleChange=(e)=>{
    const {value}=e.target;
    setText(value)
  }

  const calculateWordCount=(text)=>{
    const words=text.trim().split(" ");
    const filteredWords=words.filter(word=>word!="")
    console.log(filteredWords,filteredWords.length)
    return filteredWords.length;
   
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
        <h4>Time remaining:{timeRemaining}</h4>
        <button onClick={()=>calculateWordCount(text)}>Start</button>
        <h1>Word Count</h1>
    </div>
  )
}

export default App
