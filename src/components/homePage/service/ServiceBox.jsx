import ServiceImg from "./../../../assets/homePage3.png"

export default function ServiceBox({img, title, description, contact, realisation}){
    return (<div className="service-box">
        <img src={img} />
        <div className="service-box-content">
                <span className="service-box-content-title">{title}</span>
                <hr />
                <p>{description}</p>
                <div className="service-realisation">
                    <h6>Nos réalisations</h6>
                    <div>
                        {realisation.map((item) => (<span> <strong className="service-realisation-title">{item.real}</strong>   : {item.value}</span>))}
                    </div>
                </div>
                <div className="service-contact">
                    <h6>Contact </h6>
                    <div>
                        {contact?.map((item, index) => <span key={index}>{item}</span>)}
                    </div>
                </div>
        </div>
       
      
        
    </div>)
}