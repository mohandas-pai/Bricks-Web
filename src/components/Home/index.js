import './index.scss'
import BricksTxt from "../../assets/images/bricks-text.png"

const Home = () =>{
    return (
        <div className="home-page">
            <img src={BricksTxt} alt="Bricks text"/>
        </div>
    );
};

export default Home;