import "./../css/global.css"
import "./../css/homePage.css"
import Pic1 from "./../assets/homePage1.png"
import Pic2 from "./../assets/homePage2.png"
import Pic3 from "./../assets/homePage3.png"
import Pic4 from "./../assets/homePage4.png"
import Product from "../components/homePage/ourProduct/Product"
import Services from "../components/homePage/Service"
import Contact from "../components/homePage/Contact"

export default function HomePage(){
    const pics = [{img: Pic1, id:"1"}, {img: Pic2, id:"2"}, {img: Pic3, id:"3"},{img: Pic4, id:"4"}]
    return (<div className="home">
            <div className="homePage">
                <div className="left-side">
                        <h1>Shopping en ligne</h1>
                        <p>
                             Achetez plus rapidement et <br></br>
						 en toute sécurité avec DETOFA.
                         <br></br>
                                Commandez chez nous ,gagnez du temps.
						</p>

                </div>
                <div className="right-side">
                    {pics.map((pic) => <img key={pic.id} src={pic.img}/>)}
                </div>

            </div>
            <div className="ourproduct">
                <h1>Our products</h1>
                <div className="products">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            
            </div>
            <Services/>
            {/* <Contact/> */}
          
    </div>)
}