import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState(
    "Ren's parents have been kidnapped by goblins, go on an expedition to save them"
  );
  const [setting, setSetting] = useState(
    "You start out at a small village, near an ocean and a huge forest."
  );
  const [option1, setOption1] = useState("Set out straight away");
  const [option2, setOption2] = useState("Get prepared first");

  function clickOption1() {
    console.log("hi");
  }
  function clickOption2() {
    console.log("clicked");
  }
  return (
    <div className="App">
      <h1>Ren's Adventure</h1>
      <h2>{goal}</h2>
      <h3>{setting}</h3>
      <button onClick={clickOption1}>{option1}</button>
      <button onClick={clickOption2}>{option2}</button>
    </div>
  );
}
