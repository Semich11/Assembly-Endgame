import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: true,
      id: nanoid(),
    }));
  }

  console.log(dice[0].value);

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function hold(id){
    console.log(id)
  }

  const diceElements = dice.map((num) => (
    <Die key={num.id} diceObj={num} onClick={hold} />
  ));
  console.log("Run");
  return (
    <main>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}
