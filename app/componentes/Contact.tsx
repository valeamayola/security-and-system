import { faComments, faEnvelope, faEnvelopeOpen, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <div className="flex bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950 flex-col items-center justify-between py-10 md:py-20 px-10 md:px-32">
            <div className="flex flex-col items-center justify-center mx-5 w-full">
                <h1 className="text-blue-400 border-2 border-white rounded-full px-8 py-4 uppercase text-xl font-bold">Contactános</h1>
                <p className="text-white text-2xl font-medium mt-5 text-center">Contanos acerca de tu proyecto</p>
                <p className="text-xl text-white mt-8 flex"><FontAwesomeIcon className="w-10 mr-2" icon={faEnvelope} />Envíanos un mensaje y programa una llamada con nuestro equipo comercial para discutir tu proyecto en más detalle.</p>
                <p className="text-xl text-white mt-5 flex"><FontAwesomeIcon className="w-10 mr-2" icon={faComments} />Reuniremos todos tus requisitos para alcanzar tus necesidades y objetivos.</p>
                <p className="text-xl text-white mt-5 flex"><FontAwesomeIcon className="w-10 mr-2" icon={faEnvelopeOpen} />Te enviaremos una propuesta con los costos, plazos de entrega y descripción detallada del trabajo a realizar.</p>
            </div>
            <ul className="hidden timeline timeline-vertical">
                <li>
                    <div className="timeline-start"></div>
                    <div className="timeline-middle"></div>
                    <hr/>
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle bg-pink">
                        <a className="text-white rounded-full"><img className="w-44" src="/sdp-mockup.png" /></a>
                    </div>
                    <div className="timeline-end timeline-box">Envíanos un mensaje<br></br><span>programa una llamada con nuestro equipo comercial para discutir tu proyecto en más detalle.</span></div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start timeline-box">iPod</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box">iPhone</div>
                    <hr />
                </li>
            </ul>
        </div>
    )
}