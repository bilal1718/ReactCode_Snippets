
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
return (
    <>
      <textarea
        value={input}
        onChange={countWords}
        data-testid="textarea-id"
        placeholder="Paste your article here..."
      />
 <h1 data-testid="output-id">
        Your Article has {count} {count === 1 ? 'word' : 'words'}.
      </h1>
    </>
export default App;
  );
};
