import './index.scss'
import BricksTxt from "../../assets/images/bricks-text.png"
import React from "react";
import { Link } from 'react-router-dom';
import {useState} from 'react';

const Home = () =>{

    const [easyHovering, setEasyHovering] = useState(false);
    const [hardHovering, setHardHovering] = useState(false);

    const handleEasyMouseIn = () => {
        setEasyHovering(true);
    };
    
      const handleEasyMouseOut = () => {
        setEasyHovering(false);
    };

    const handleHardMouseIn = () => {
        setHardHovering(true);
    };
    
      const handleHardMouseOut = () => {
        setHardHovering(false);
    };

    return (
        <div className="home-page">
            <img src={BricksTxt} alt="Bricks text"/>
            <div className='game'>
            <Link onMouseOver={handleEasyMouseIn} onMouseOut={handleEasyMouseOut} to='/easy' className='flat-button easy-mode'> Easy Mode</Link>
            <Link onMouseOver={handleHardMouseIn} onMouseOut={handleHardMouseOut} to='/hard' className='flat-button hard-mode'> Hard Mode</Link>
            </div>

            {easyHovering && (
                <div className='easy-info'>
                    <ul>
                        <li>You get 7 tries.</li>
                        <li>You can use any 4 letter word.</li>
                    </ul>              
                </div>
            )}

            {hardHovering && (
                <div className='hard-info'>
                    <ul>
                        <li>You get 7 tries.</li>
                        <li>You have use a 4 letter dictionary word.</li>
                    </ul>              
                </div>
            )}

            <footer>
                <p>Made by <a href="https://www.mohandaspai.ml/" target="_blank" rel="noreferrer">Amazing Apps</a></p>
            </footer>
        </div>
    );
};

export default Home;