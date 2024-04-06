import ServiceBox from "./service/ServiceBox";
import ServiceImg from "./../../assets/homePage3.png"
const serviceTab = [
    {
        serviceName:"Vente en ligne",
        serviceurl: "",
        image: "/homePage1.png",
        description: "Découvrez notre service de vente en ligne pour une expérience shopping pratique. Profitez du marketing relationnel, parcourez notre catalogue varié et explorez la simplicité du shopping depuis chez vous.",
        realisation: [
            {real: "Produits", value:"30"}
        ],
        contact:["finganduli@gmail.com", "+243 995 601 345","+243 995 601 345"]
    },
    {
        serviceName:"Service traiteur",
        serviceurl: "",
        image:  "/homePage4.png",
        description: "Detofa sublime vos événements privés et professionnels en proposant une expérience culinaire raffinée et un service attentionné. Notre équipe de chefs passionnés met tout en œuvre pour créer des menus uniques et savoureux, adaptés à vos goûts et à vos envies.",
        realisation: [
            {real: "Mariage", value:"102"},
            {real :"Anniversaire",value:"102"},
            {real: "Kitchen Party", value: "102"}
        ],
        contact:["alexkasika@gmail.com", "+243 995 601 345","+243 995 601 345"]
    },
    {
        serviceName:"Développement web et mobile",
        serviceurl: "",
        image: "/homePage2.png",
        description: "Detofa offre une solution web et mobile complète pour concrétiser vos projets digitaux avec succès. Notre équipe expérimentée allie expertise technique et créativité pour des solutions sur mesure répondant parfaitement à vos besoins et à ceux de votre audience.",
        realisation: [
            {real: "Site web", value:"5"}
        ],
        contact:["finganduli@gmail.com", "+243 995 601 345","+243 995 601 345"]
    },
    {
        serviceName:"Service protocole",
        serviceurl: "serviceprotocole",
        image: "/homePage3.png",
        description: "Detofa service protocole, une planification minutieuse pour un jour inoubliable. Chaque détail est orchestré avec soin pour créer des souvenirs durables. Un service dévoué pour faire de votre mariage un moment magique",
        realisation: [
            {real: "Mariage", value:"10"},
            {real: "Kitchen Party", value: "12"}
        ],
        contact:["finganduli@gmail.com", "+243 995 601 345","+243 995 601 345"]
    },
]
export default function Services(){
    return (<div className="services">
            <h1>Nos services</h1>
            {serviceTab.map((service) => <ServiceBox title={service.serviceName}
             img={service.image} description={service.description} contact={service.contact}
             realisation={service.realisation} serviceurl={service.serviceurl} />)}          
    </div>)
}