import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState(
    "Ren's parents have been kidnapped by bandits in the forest, go on an expedition to save them"
  );
  const [setting, setSetting] = useState(
    "You start out at a small village, near an ocean and a huge forest."
  );
  const [option1, setOption1] = useState("Set out into the forest");
  const [option2, setOption2] = useState("Get prepared first");
  const [count, setCount] = useState(0);

  let options = {
    0: {
      option1Num: 1,
      option2Num: 10,
      end: false
    },
    1: {
      goal: "Suddenly a bear out of nowhere approaches you, what will you do?",
      setting:
        "You're in a dense forest, the birds in the trees noisily chirping away.",
      option1: "Run away",
      option2: "Play dead",
      option1Num: 2,
      option2Num: 3,
      end: false
    },
    2: {
      goal: "",
      setting: "",
      option1: "",
      option2: "",
      option1Num: 4,
      option2Num: 5,
      end: false
    },
    3: {
      goal: "You play dead, and the bear sniffs you, then walks away.",
      setting: "The bear lost its curiosity, and heads back towards its den.",
      option1: "Get up and run away",
      option2: "Fight the bear",
      option1Num: 6,
      option2Num: 7,
      end: false
    },
    4: {
      goal: "You play dead, and the bear sniffs you, then walks away.",
      setting: "The bear lost its curiosity, and heads back towards its den.",
      option1: "Get up and run away",
      option2: "Fight the bear",
      option1Num: 6,
      option2Num: 7,
      end: false
    },
    5: {
      goal: "You play dead, and the bear sniffs you, then walks away.",
      setting: "The bear lost its curiosity, and heads back towards its den.",
      option1: "Get up and run away",
      option2: "Fight the bear",
      option1Num: 6,
      option2Num: 7,
      end: false
    },
    6: {
      end: true,
      endMessage: ""
    }
  };
  let options1 = [
    {
      goal: "Suddenly a bear out of nowhere approaches you, what will you do?",
      setting:
        "You're in a dense forest, the birds in the trees noisily chirping away.",
      option1: "Run away",
      option2: "Play dead"
    },
    {
      goal:
        "Your heart bursts with fear and you run away as fast as you can, but you reach a cliff, with a pond around 300 feet below",
      setting: "The birds stop chirping and the bear roars, and chases you",
      option1: "Jump into the lake",
      option2: "Fight the bear"
    },
    {
      goal:
        "You hold your breath and jump off the cliff, plunging deep into the water, but you're alive. You get on land and dry yourself off.",
      setting: "Still surrounded by trees, but theres smoke in the distance",
      option1: "Go to the smoke",
      option2: "Prepare first"
    }
  ];
  function clickOption1() {
    // setGoal(options1[count].goal);
    // setOption1(options1[count].option1);
    // setOption2(options1[count].option2);
    // setSetting(options1[count].setting);
    // setCount(count + 1);
    let nextStep = options[count].option1Num; //1
    if (options[nextStep].end) {
    } else {
      setGoal(options[nextStep].goal);
      setOption1(options[nextStep].option1);
      setOption2(options[nextStep].option2);
      setSetting(options[nextStep].setting);
      setCount(nextStep);
    }
  }
  let options2 = [
    {
      goal:
        "You gear up and head out into the forest, then stumbling upon an injured tiger, what do you do?",
      setting: "You're in a dense forest, with no sight of what attacked it.",
      option1: "Walk away",
      option2: "Help it"
    },
    {
      goal:
        "You help the tiger, and with some bandages and splints he's able to walk again. You try to walk away but it follows you.",
      setting: "The tiger walks around you, with curiosity",
      option1: "Let it follow you on your adventure",
      option2: "Run away and leave it"
    },
    {
      goal:
        "You leave the tiger behind, and it leaves you alone. Then you spot a rope, that looks like it was made for hunting traps",
      setting:
        "The rope was very long, and probably led to the hunters camp, to notify if they caught something",
      option1: "Follow the rope",
      option2: "Head towards the closest village for info"
    }
  ];
  function clickOption2() {
    let nextStep = options[count].option2Num; //1
    if (options[nextStep].end) {
    } else {
      setGoal(options[nextStep].goal);
      setOption1(options[nextStep].option1);
      setOption2(options[nextStep].option2);
      setSetting(options[nextStep].setting);
      setCount(nextStep);
    }
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
