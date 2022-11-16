import './index.scss'
import BricksTxt from "../../assets/images/bricks-text.png"
import React from "react";
import { Link } from 'react-router-dom';

const Home = () =>{

    return (
        <div className="home-page">
            <img src={BricksTxt} alt="Bricks text"/>
            <div className='game'>
            <Link to='/easy' className='flat-button easy-mode'> Easy Mode</Link>
            <Link to='/hard' className='flat-button hard-mode'> Hard Mode</Link>
            </div>
            <footer>
                <p>Made by <a href="https://www.mohandaspai.ml/" target="_blank" rel="noreferrer">Amazing Apps</a></p>
            </footer>
        </div>
    );
};

export default Home;