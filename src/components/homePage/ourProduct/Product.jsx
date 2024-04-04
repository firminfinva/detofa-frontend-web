import { Link } from "react-router-dom";
import Button from "../../navbar/Button";
import ProductImg from "./../../../assets/homePage2.png"


export default function Product(){
    return (<div className="product">
        <Link to="/singleProduct">
        <div className="product-img">
            <img src={ProductImg} />
        </div>
        </Link>
        <div className="product-info">
            <h5 className="category">  <strong style={{fontSize: "13px"}}>Boutique :</strong>  customize's Boutique</h5>
            <div>
               <Link to="/singleProduct">
                <h6>
                   <strong style={{fontSize: "13px"}}>Name :</strong>  Product name Product 
                </h6>
                </Link>
                <span>164100 fc</span>
            </div>
            <Link  to="/singleProduct"><Button text="Voir plus" /> </Link>
        </div>
       
    </div>)
}