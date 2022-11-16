import "./index.scss"
import { Link } from 'react-router-dom';
import LogoBricks from "../../assets/images/bricks-logo.png"
import InfoModal from "../InfoModal";
import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoBricks} alt="logo"/>
            </Link>
            <FontAwesomeIcon className="info-button" onClick={() => setIsOpen(true)} icon = {faInfoCircle} color="#ffd60a"/>
            {isOpen && <InfoModal setIsOpen={setIsOpen} />}
        </div>
    );
}

export default Topbar