import Button from "./Button";
import { IoHome } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaPercent } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaGift } from "react-icons/fa";


export default function ButtomNav(){
    let icanSize = 0
    if(window.innerWidth>920){
        icanSize = 20
    }else{
        icanSize = 15
    }
   
    const theBtn = [
        {img: <IoHome size={icanSize}/>,text: "Home"},
        {img: <PiHandbagSimpleFill size={icanSize}/>,text: "Livraison"},
        // {img: <FaPercent size={icanSize}/>,text: "Promotion"},
        // {img: <FaGift size={icanSize}/>,text: "Nouveautés"},
        {img: <GrServices size={icanSize}/>,text: "Services"},
        {img: <RiCustomerService2Line size={icanSize}/>,text: "Besoin"},
    ]
    return(<div className="buttom-nav">
        {theBtn.map((btn) =>  <Button key={btn.text} icon={btn.img}  text={btn.text} />)}
    </div>)
}