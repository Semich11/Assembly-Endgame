import { useState } from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = useState([
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
    { value: 0, isHeld: false },
  ]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  function diceObject() {
    const randomNumbers = generateAllNewDice();

    setDice((prev) =>
      prev.map((item, index) =>
        item.isHeld === false
          ? {
              ...item,
              value: randomNumbers[index],
            }
          : item
      )
    );
  }

  console.log(dice[0].value)

  function rollDice() {
    diceObject();
  }

  const diceElements = dice.map((num) => <Die value={num} />);
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
