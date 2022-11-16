import "./index.scss"
import React, { useState,useRef,useEffect } from "react";
import {MAX_EASY_GUESSES} from "../../constants/gameConstants"
import {getGameWord} from "../Logic/gameUtils"
import Cards from "../Card";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Easy = () => {

    const [allBricks, setAllBricks] = useState([]);
    const [brick,setBrick] = useState({
        word:"",
        green:0,
        red:0
    })
    const [gameOver, setGameOver] = useState(false);
    const wordToGuess = useRef('xxxx');
    const customId = "moh-ID";

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
            } else if (guessLen === MAX_EASY_GUESSES) {
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
        var alphaExp = /^[a-zA-Z]+$/;

        if(brick.word.length!==4){
            toast.warn('Should be a 4 letter word', {
                position: "bottom-center",
                toastId: customId,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if(new Set(brick.word).size !== brick.word.length){
            toast.warn('Should contain unique letters', {
                position: "bottom-center",
                toastId: customId,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if(!(brick.word.match(alphaExp))){
            toast.warn('Should contain only letters', {
                position: "bottom-center",
                toastId: customId,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        if(brick.word.length===4 && (new Set(brick.word).size === brick.word.length) && (brick.word.match(alphaExp))){
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
        <div className="easy-container">
            {!gameOver && (
                <div className="input-container">
                    <form>
                        <input autoFocus name="word" type="text" onChange={handleChange} value={brick.word} placeholder="Enter your word"/>
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
                allBricks.length<6 &&(
                <div className="counter-container" style={{ width: 150, height: 150 }}>
                    <CircularProgressbar value={allBricks.length} maxValue={7} minValue={0} text={7-(allBricks.length)} />
                </div>
                )
            )}

            {!gameOver && (
                allBricks.length>=6 &&(
                <div className="counter-container2" style={{ width: 150, height: 150 }}>
                    <CircularProgressbar value={allBricks.length} maxValue={7} minValue={0} text={7-(allBricks.length)} />
                </div>
                )
            )} 
            <ToastContainer />
            <h1 className="game-mode">EASY</h1>

        </div>
            
    )
}
export default Easy;