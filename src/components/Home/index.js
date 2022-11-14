import './index.scss'
import BricksTxt from "../../assets/images/bricks-text.png"
import React from "react";
import { Link } from 'react-router-dom';

const Home = () =>{

    return (
        <div className="home-page">
            <img src={BricksTxt} alt="Bricks text"/>
            <div className='game'>
            <Link to='/easy' className='flat-button'> Easy Mode</Link>
            </div>
        </div>
    );
};

export default Home;