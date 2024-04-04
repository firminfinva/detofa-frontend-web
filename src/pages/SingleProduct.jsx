import Thumbnail from "../components/singleProduct/Thumbnail"
import "./../css/singleproduct.css"
import ProductImg from "./../assets/homePage1.png"
import Button from "../components/navbar/Button"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function SingleProduct(){
    const [quantity , setQuantity] = useState(0)
    const productColor = ["blue", "black", "yellow", "red"]
    const productTaille = ["xl", "xxl", "S", "M"]

    function incriment(){
        setQuantity(quantity +1)
    }
    function decriment(){
        if(quantity > 0){
            setQuantity(quantity -1)
        }
    }

    return (<div className="singleproduct">
        <div className="single-left">
            <div className="single-left-thumbal">
                <Thumbnail image={ProductImg} />
                <Thumbnail image={ProductImg} />
                <Thumbnail image={ProductImg} />
                <Thumbnail image={ProductImg} />
            </div>
            <div className="single-left-photo">
                <img src={ProductImg} />
                <div className="singe-product-button">
                    <Link to="/singleproduct"> 
                        <Button text="Ajouter au panier"/>
                    </Link>
                </div>
                
            </div>
        </div>
        <div className="single-right">
            <div className="product-name">
               ASUS ProArt Studiobook Pro 16 W7600H3A-OLED-L741X, 16.0", UHD+, Intel Core i7
            </div>
            <div className="single-product-info">
                <div>
                    <span className="product-price">
                        <span><strong style={{fontSize: "14x"}} >Prix : </strong></span> <span>600 000 fc</span>  
                    </span>

                    <div className="product-color">
                        <h5>Coleur : </h5>
                        <div>
                        {productColor.map((color)=> <div style={{backgroundColor: color, color: color}}>{color}</div>)}
                            
                        </div>

                    </div>

                    <div className="product-color">
                        <h5>Taille : </h5>
                        <div>
                        {productTaille.map((taille)=> <div style={{fontSize: "12px", color: "black", border: "1px solid black", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center"}}>{taille}</div>)}
                            
                        </div>

                    </div>
                    <div className="product-color">
                        <h5>Quantité : </h5>
                        <div className="quantity">
                        <span onClick={decriment}>-</span>
                        <span style={{width: "50px"}}>{quantity}</span>
                        <span onClick={incriment}>+</span>
                            
                        </div>

                    </div>
                </div>
                <div className="single-product-description">
                    <h5>Description</h5>
                    <p style={{marginTop: "20px"}}>Detofa offre une solution web et mobile complète pour concrétiser vos projets digitaux avec succès. Notre équipe expérimentée allie expertise technique et créativité pour des solutions sur mesure répondant parfaitement à vos besoins et à ceux de votre audience.
                    Detofa offre une solution web et mobile complète pour concrétiser </p>
                </div>

            </div>
            
            
        </div>
    </div>)
}