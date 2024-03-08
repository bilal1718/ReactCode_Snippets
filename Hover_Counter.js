
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button data-testid='button' onMouseEnter={() => setCount(count + 1)}>Hover Me</button>
      <h1 data-testid='count'>{count}</h1>
    </div>
  );
};

export default App;
