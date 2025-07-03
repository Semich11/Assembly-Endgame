import { useState } from "react"
import Die from "./Die"

export default function App() {
    
    const [dice, setDice] = useState([
      {value: 0, isHeld: false},
      {value: 1, isHeld: false}
    ])``
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    function rollDice() {
        setDice(generateAllNewDice())
    }
    
    const diceElements = dice.map(num => <Die value={num} />)
    console.log("Run")
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            
            <button className="roll-dice" onClick={rollDice}>Roll</button>
            
        </main>
    )
}