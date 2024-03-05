import React, { useState, useEffect } from "react";

const App = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  
return (
    <div>
      {`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
    </div>
  );
};

export default App;
