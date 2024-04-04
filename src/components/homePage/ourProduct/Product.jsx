import Button from "../../navbar/Button";
import ProductImg from "./../../../assets/homePage2.png"


export default function Product(){
    return (<div className="product">
        <div className="product-img">
            <img src={ProductImg} />
        </div>
        <div className="product-info">
            <h5 className="category">  <strong style={{fontSize: "13px"}}>Boutique :</strong>  customize's Boutique</h5>
            <div>
                <h6>
                   <strong style={{fontSize: "13px"}}>Name :</strong>  Product name Product 
                </h6>
                <span>164100 fc</span>
            </div>
            <Button text="Voir plus" />
        </div>
    </div>)
}