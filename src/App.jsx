import useWordGame from './Hooks/useWordGame'
import './App.css'

const App=()=> {
  
  const { 
    text,
    handleChange,
    isGameRunning,
    textAreaRef,
    timeRemaining,
    startGame,
    wordCount
  }=useWordGame(3);
 
  return (
    <div className="App">
        <h1>How fast can you type</h1>
        <textarea 
            type="text"
            value={text}
            name="text"
            onChange={handleChange}
            disabled={!isGameRunning}
            ref={textAreaRef}
            />
        <h4>Time remaining:{timeRemaining}</h4>
        <button disabled={isGameRunning} onClick={startGame}>Start</button>
        <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App
