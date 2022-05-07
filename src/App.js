import React, { useEffect, useState } from "react";
import { TrafficLight } from "./components/TrafficLight";
import "./styles.css";

export default function App() {
  let timer;
  const [state, setLight] = useState([
    { name: "Light Red", power: true, color: "Red" },
    { name: "Light Yellow", power: false, color: "Yellow" },
    { name: "Light Orange", power: false, color: "Orange" },
    { name: "Light Green", power: false, color: "Green" }
  ]);
  const setCurrentLight = () => {
    let newActiveLight;
    const isLastLightOn = state.find(
      (e, i) => e.power && state.length - 1 === i
    );
    let newState = state.map((element, i) => {
      if (isLastLightOn) newActiveLight = 0;
      if (element.power) {
        element.power = false;
        newActiveLight = i + 1;
      }
      if (newActiveLight === i) element.power = true;
      return element;
    });
    setLight(newState);
    clearInterval(timer);
  };
  useEffect(() => {
    timer = setInterval(() => setCurrentLight(), 10000);
  }, [state]);
  return (
    <div className="App">
      <button
        style={{ marginBottom: "10px" }}
        onClick={() => setCurrentLight()}
      >
        Change Light Using Button
      </button>
      {state.map((l) => {
        return <TrafficLight name={l.name} value={l.power} color={l.color} />;
      })}
    </div>
  );
}
