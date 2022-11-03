import "./index.scss"
import Topbar from "../Topbar";
import { Outlet } from 'react-router-dom';

const Layout = () =>{
    return (
        <div className="App">
        <Topbar/>
        <div className="page"/>
        <Outlet/>
        </div>
    );
}

export default Layout;