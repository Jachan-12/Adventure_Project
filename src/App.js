import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState(
    "Your parents have been kidnapped by bandits and taken into the forest, go on an expedition to save them!"
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
      option2Num: 2,
      end: false
    },
    1: {
      goal:
        "Suddenly you see a bear a couple of meters away, what will you do?",
      setting:
        "You're in a dense forest, the birds in the trees noisily chirping away.",
      option1: "Run away",
      option2: "Play dead",
      option1Num: 5,
      option2Num: 3,
      end: false
    },
    2: {
      goal:
        "You gear up and set out. You come across an injured baby wolf, what do you do?",
      setting:
        "The forest is bustling with wildlife, a baby wolf with blood around its leg lays there.",
      option1: "Tend to its wounds",
      option2: "End its suffering",
      option1Num: 9,
      option2Num: 6,
      end: false
    },
    3: {
      goal: "You play dead, and the bear sniffs you, then walks away.",
      setting: "The bear lost its curiosity, and heads back towards its den.",
      option1: "Get up and run",
      option2: "Suprise attack the bear",
      option1Num: 5,
      option2Num: 6,
      end: false
    },
    5: {
      goal:
        "You start to run, but the bear hears you and it goes after you. You stop at a cliff, with a pond around 300 feet below.",
      setting: "The bear has big strides and weaves in between the trees",
      option1: "Jump into the pond",
      option2: "Dance for the bear",
      option1Num: 7,
      option2Num: 6,
      end: false
    },
    6: {
      goal: "You've Died, Sorry!",
      end: false
    },
    7: {
      goal:
        "You hold your breath and plunge into the water, resurface, and dry off on the land.",
      setting: "You're still in the forest, and you see smoke in the distance",
      option1: "Head towards the smoke immediately",
      option2: "Gear up, then head towards the smoke",
      option1Num: 6,
      option2Num: 8,
      end: false
    },
    8: {
      goal:
        "Congratulations! You defeat the bandits and bring your parents home to safety. You win!",
      end: false
    },
    9: {
      goal:
        "You see that the baby wolf has a gash on its leg, and clean it and bandage it. Then a big wolf steps out the brush and approaches you.",
      setting: "A big, muscular wolf the size of you approaches slowly",
      option1: "Throw the pup as bait and run away",
      option2: "Hand the wolf the pup",
      option1Num: 6,
      option2Num: 10,
      end: false
    },
    10: {
      goal:
        "You hand the big wolf the pup, and it nudges its nose against you, as if in a thank you gesture. You then continue on your journey. You see a camp in the distance.",
      setting:
        "You walk through the brush, hacking away at plants, while the wolf slowly trails behind",
      option1: "Scout the camp",
      option2: "Attack the campers",
      option1Num: 11,
      option2Num: 6,
      end: false
    },
    11: {
      goal:
        "You scout the camp and you see 5 bandits. The wolf walks up next you you with bloodthirsty eyes.",
      setting:
        "The wolf seems to know who hurt the pup. It snarls and growls as it stares at the bandits.",
      option1: "Attack them alone",
      option2: "Attack with the wolf",
      option1Num: 6,
      option2Num: 8,
      end: false
    }
  };
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
      <marquee>Your Adventure</marquee>
      <h2>{goal}</h2>
      <h3>{setting}</h3>
      <button className="button" onClick={clickOption1}>
        {option1}
      </button>
      <button className="button" onClick={clickOption2}>
        {option2}
      </button>
    </div>
  );
}
