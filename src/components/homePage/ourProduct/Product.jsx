import Button from "../../navbar/Button";
import ProductImg from "./../../../assets/homePage2.png"


export default function Product(){
    return (<div className="product">
        <div className="product-img">
            <img src={ProductImg} />
        </div>
        <div className="product-info">
            <h5 className="category">  <strong>Boutique :</strong>  customize's Boutique</h5>
            <div>
                <h6>
                   <strong>Name :</strong>  Product name Product 
                </h6>
                <span>164100 fc</span>
            </div>
            <Button text="Voir plus" />
        </div>
    </div>)
}