import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfo() {
    return (
        <div className="card w-full mt-20 mx-5 bg-transparent border-2 border-blue-800/50 shadow-blue-800/50 shadow-2xl">
            <div className="card-body">
                <h2 className="card-title text-2xl text-white">Información de contacto</h2>
                <p className="text-xl text-white mt-2 flex"><FontAwesomeIcon className="w-5 mr-2" icon={faLocationDot} />Juan José paso 1353, Morón</p>
                <p className="text-xl text-white mt-2 flex"><FontAwesomeIcon className="w-5 mr-2" icon={faPhone} />11 7726-4032</p>
                <p className="text-xl text-white mt-2 flex"><FontAwesomeIcon className="w-5 mr-2" icon={faEnvelope} />contact@securityandsystem.com</p>
            </div>
        </div>
    )
}