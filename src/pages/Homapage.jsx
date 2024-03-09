import "./../css/homePage.css"
import Pic1 from "./../assets/homePage1.png"
import Pic2 from "./../assets/homePage2.png"
import Pic3 from "./../assets/homePage3.png"
import Pic4 from "./../assets/homePage4.png"

export default function HomePage(){
    const pics = [{img: Pic1, id:"1"}, {img: Pic2, id:"2"}, {img: Pic3, id:"3"},{img: Pic4, id:"4"}]
    return (<>
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
    </>)
}