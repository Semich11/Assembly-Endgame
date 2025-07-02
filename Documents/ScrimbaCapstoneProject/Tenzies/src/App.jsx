import Die from "./Die"

/**
 * Challenge:
 * 
 * Write a function (generateAllNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */
  
  let arr = []

  const generateAllNewDice = () => {
    for(let i = 1; i <= 10; i++){
      let randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      arr.push(randomNumber);
    }
    return arr;
  }
  
  generateAllNewDice()
  console.log(arr)

export default function App() {
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={2} />
                <Die value={3} />
                <Die value={4} />
                <Die value={5} />
                <Die value={6} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}