
import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // Pass the mousePosition to the render function
  return render(mousePosition);
};

const PanelMouseLogger = () => (
  <MousePosition
    render={(position) => (
      <div className="BasicTracker">
        <p>Mouse position:</p>
        <div className="Row">
          <span>x: {position.x}</span>
          <span>y: {position.y}</span>
        </div>
      </div>
    )}
  />
);

const PointMouseLogger = () => (
  <MousePosition
    render={(position) => (
      <p>
        ({position.x}, {position.y})
      </p>
    )}
  />
);

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
