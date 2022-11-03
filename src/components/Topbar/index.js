import "./index.scss"
import { Link } from 'react-router-dom';
import LogoBricks from "../../assets/images/bricks-logo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Topbar = () => {

    return(
        <div className='nav-bar'>
            <Link className='logo' to="/">
                <img src={LogoBricks} alt="logo"/>
            </Link>
            <Popup trigger={<FontAwesomeIcon className="info-button" icon = {faInfoCircle} color="#ffd60a"/>} position="left center">
                <div>Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!Popup content here !!</div>
            </Popup>
        </div>
    );
}

export default Topbar