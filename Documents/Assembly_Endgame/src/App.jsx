import { useState } from "react";
import { languages } from "./languages";
import clsx from "clsx";

/**
 * Goal: Allow the user to start guessing the letters
 *
 * Challenge: Update the keyboard when a letter is right
 * or wrong.
 *
 * Bonus: use the `clsx` package to easily add conditional
 * classNames to the keys of the keyboard. Check the docs
 * to learn how to use it 📖
 */

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span className="chip" style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  const letterElements = currentWord
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);

  const addGuessedletter = (letter) => {
    
     setGuessedLetters((prevGuessedLetters) =>
      prevGuessedLetters.includes(letter)
        ? prevGuessedLetters
        : [...prevGuessedLetters, letter]
    );
    console.log("Clicked!!!")
  };

  console.log(guessedLetters);

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    console.log(`isGuessed is ${isGuessed} `)
    return (
      <button
      onClick={() => addGuessedletter(letter)}
      className={clsx({
        isTrue: isCorrect,
        isFalse: isWrong
      })}
        key={letter}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <section className="game-status">
        <h2>You win!</h2>
        <p>Well done! 🎉</p>
      </section>
      <section className="language-chips">{languageElements}</section>
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New Game</button>
    </main>
  );
}
