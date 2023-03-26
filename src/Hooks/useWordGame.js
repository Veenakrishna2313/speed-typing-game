import { useState, useEffect, useRef } from "react";

const useWordGame = (startingTime=5) => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isGameRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevState) => prevState - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isGameRunning]);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const calculateWordCount = (text) => {
    const words = text.trim().split(" ");
    const filteredWords = words.filter((word) => word != "");
    console.log(filteredWords, filteredWords.length);
    return filteredWords.length;
  };

  const startGame = () => {
    setIsGameRunning(true);
    setTimeRemaining(startingTime);
    setWordCount(0);
    setText("");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  const endGame = () => {
    setIsGameRunning(false);
    setWordCount(calculateWordCount(text));
  };

  return {
    text,
    handleChange,
    isGameRunning,
    textAreaRef,
    timeRemaining,
    startGame,
    wordCount,
  };
};

export default useWordGame;
