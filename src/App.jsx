import { useState } from "react";
import "./App.css";
import "./components/Button.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  function changeColor(color) {
    if (color == "black") {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
    setColor(color);
  }
  return (
    <>
      <div
        className="flex justify-center w-full h-screen "
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-20">
          <p className="font-bold text-4xl" style={{ color: textColor }}>
            Click button to toggle mode
          </p>
          <div className="bg-gray-800 flex justify-center inset-x-0 px-2 m-10 rounded-full">
            <Button
              onClick={() => changeColor("white")}
              color="white"
              content="Light"
            />
            <Button
              onClick={() => changeColor("black")}
              color="black"
              content="Dark"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
