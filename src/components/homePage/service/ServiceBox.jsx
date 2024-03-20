import ServiceImg from "./../../../assets/homePage3.png"

export default function ServiceBox(){
    return (<div className="service-box">
        <img src={ServiceImg} />
        <div className="service-box-content">
                <span className="service-box-content-title">Nom  du service lorem adasdade</span>
                <hr />
                <p>Detofa sublime vos événements privés et professionnels en proposant une expérience culinaire raffinée et un service 
                attentionné. Notre équipe de chefs passionnés met tout en œuvre pour créer des menus uniques et savoureux, adaptés à vos 
                goûts et à vos envies.</p>
                <div className="service-realisation">
                    <h6>Nos réalisations</h6>
                    <div>
                        <span>dfsdfs</span>
                        <span>sdfsdf</span>
                        <span>sdfsdfs</span>
                    </div>
                </div>
                <div className="service-contact">
                    <h6>Contact </h6>
                    <div>
                        <span>finganduli@gmail.com</span>
                        <span>+243 949 454 454</span>
                        <span>+243 949 454 454</span>
                    </div>
                </div>
        </div>
       
      
        
    </div>)
}