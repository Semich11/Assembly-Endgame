import { useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  let gameWon = false;

  if(
    dice.every(diceObj => diceObj.isHeld) && 
    dice.every(diceObj => diceObj.value === dice[0].value )
  ){
    gameWon = true;
  }

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
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{gameWon? "New Game" : "Roll"}</button>
        </main>
    )
}
