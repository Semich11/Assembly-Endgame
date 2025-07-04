import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }


  function rollDice() {
      setDice(prev => prev.map(diceObj => diceObj.isHeld ? diceObj : {...diceObj, value: Math.ceil(Math.random() * 6)} ))
  }

  function hold(id) {
    console.log(id)
    setDice(prev => prev.map(diceObj => diceObj.id === id ? {...diceObj, isHeld: !diceObj.isHeld} : diceObj))
  }

  const diceElements = dice.map((num) => (
    <Die 
      key={num.id} 
      diceObj={num} 
      onClick={hold} 
    />
  ));
  // console.log("Run");
  return (
    <main>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
