
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const countWords = (e) => {
    const text = e.target.value;
    setInput(text);
    const words = text.split(/\s+/).filter((word) => word.length > 0);
    setCount(words.length);
  };
