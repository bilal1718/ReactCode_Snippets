
import React from 'react';

const App = () => {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    const storedValue = localStorage.getItem("inputValue");
    if (storedValue) {
      setInputValue(storedValue);
    }
  }, []);

  const handleInputChange = (e) => {

    const value = e.target.value;
    setInputValue(value);
    localStorage.setItem("inputValue", value);
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={handleInputChange}
        data-testid='input-id'
        type="text"
      />
    </div>
  );
};

export default App;
