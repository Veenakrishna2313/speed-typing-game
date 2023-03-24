import { useState,useEffect } from 'react'

import './App.css'

function App() {
const STARTING_TIME=15;

  const [text,setText] = useState('');
  const [timeRemaining,setTimeRemaining]=useState(STARTING_TIME);
  const [isGameRunning,setIsGameRunning]=useState(false);
  const [wordCount,setWordCount]=useState(0)

  useEffect(()=>{
    if(isGameRunning && timeRemaining>0){
    setTimeout(()=>{
      setTimeRemaining(prevState=>prevState-1)
    },1000)
    } else if(timeRemaining===0){
     endGame()
    
    }
  },[timeRemaining,isGameRunning]);

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

  const startGame=()=>{
       
    setIsGameRunning(prevState=>!prevState)
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
    setText("");
  }

  const endGame=()=>{
     setIsGameRunning(false);
     setWordCount(calculateWordCount(text))
  }
 
  return (
    <div className="App">
        <h1>How fast can you type</h1>
        <textarea 
            type="text"
            value={text}
            name="text"
            onChange={handleChange}
            disabled={!isGameRunning}
            
            />
        <h4>Time remaining:{timeRemaining}</h4>
        <button disabled={isGameRunning} onClick={startGame}>Start</button>
        <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App
