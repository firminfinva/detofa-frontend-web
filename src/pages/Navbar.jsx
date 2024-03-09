import { Outlet } from "react-router-dom";
import './../css/global.css'
import './../css/navbar.css'
import TopNav from "../components/navbar/TopNav";
import ButtomNav from "../components/navbar/ButtomNav";

export default function Navbar(){
    return (<div>
           <div className="navbar">
                <nav>
                    <TopNav/>
                    <ButtomNav/>
                </nav>
           </div>
           
            <div><Outlet/></div>
    </div>)
}