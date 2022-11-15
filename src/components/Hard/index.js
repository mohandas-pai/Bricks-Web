import "./index.scss"
import React, { useState,useRef,useEffect } from "react";
import {MAX_HARD_GUESSES} from "../../constants/gameConstants"
import wordsList from '../../constants/wordsList.json';
import {getGameWord} from "../Logic/gameUtils"
import Cards from "../Card";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Hard = () => {

    const [allBricks, setAllBricks] = useState([]);
    const [brick,setBrick] = useState({
        word:"",
        green:0,
        red:0
    })
    const [gameOver, setGameOver] = useState(false);
    const wordToGuess = useRef('xxxx');

    useEffect(() => {
        if (gameOver === false) {
          wordToGuess.current = getGameWord();
          console.log(wordToGuess);
        }
      }, [gameOver]);

    useEffect(() => {
        const guessLen = allBricks.length;
        if(guessLen>0){
            if (allBricks[guessLen - 1].word === wordToGuess.current) {
                setGameOver(true);
            } else if (guessLen === MAX_HARD_GUESSES) {
                setGameOver(true);
            }
        }
    }, [allBricks]);



    function handleChange(event) {
        const myWord = event.target.value;
    
        if(myWord.length===4){
            var gb=0,rb=0;
            const myWordArray = myWord.split('');
            const ogWordArray = wordToGuess.current.split('');

            for (let i = 0; i < 4; i++) {
                if (myWordArray[i] === ogWordArray[i]) {
                    gb=gb+1;
                    continue;
                } else {
                    if ((myWord.indexOf(ogWordArray[i])) >= 0) {
                        rb=rb+1;
                        continue;
                    }
                }       
            }
        }

        setBrick(prevNote => {
          return {
            ...prevNote,
            word: myWord,
            green: gb,
            red:rb
          };
        });
      }


    function addWord(event) {
        event.preventDefault();

        if(brick.word.length===4 && wordsList.includes(brick.word) && (new Set(brick.word).size === brick.word.length)){
            setAllBricks(prevNotes => {
                return [...prevNotes, brick];
            });
            
            setBrick({
                word: "",
                green: 0,
                red:0
            })
        }

        
    }

    return(
        <div className="hard-container">
            {!gameOver && (
                <div className="input-container">
                    <form>
                        <input name="word" type="text" onChange={handleChange} value={brick.word} placeholder="Enter your word"/>
                        <button className="flat-button-send" onClick={addWord}>+</button>                   
                    </form>
                </div>
            )}
            
            {gameOver && (
                <div className="answer-container">
                    <h1>{wordToGuess.current}</h1>
                    <p> was the word.</p>
                </div> 
            )}

            <div className="cards-container">
                {allBricks.map((brickItem,index)=>{
                    return(
                        <Cards
                        key={index}
                        id={index}
                        word={brickItem.word}
                        gcount={brickItem.green}
                        rcount={brickItem.red}
                        />
                    )
                })}
            </div>
            
            {!gameOver && (
                <div className="counter-container" style={{ width: 150, height: 150 }}>
                    <CircularProgressbar value={allBricks.length} maxValue={7} minValue={0} text={7-(allBricks.length)} />;
                </div>
            )}
        </div>
            
    )
}
export default Hard;