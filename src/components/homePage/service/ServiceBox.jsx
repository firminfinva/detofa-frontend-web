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
        </div>
        <div className="service-ralisation"></div>
        
    </div>)
}