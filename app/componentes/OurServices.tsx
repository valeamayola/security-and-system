import { faComputer, faLaptopCode, faLock, faMobileScreenButton, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OurServices() {
    return (
        <div className="flex bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950 flex-col items-center justify-between py-20 px-32">
            <h1 className="text-blue-400 border-2 border-white rounded-full px-8 py-4 uppercase text-xl font-bold text-center">Nuestros servicios</h1>
            <p className="text-white text-2xl font-medium mt-5">Conocé los servicios que tenemos para ofrecerte.</p>
            <div className="flex flex-wrap mt-10 items-center justify-center">
                <div className="flex flex-col items-center m-10">
                    <a className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 text-blue-400"><FontAwesomeIcon className="w-10 h-10" icon={faLaptopCode} /></a>
                    <h2 className="text-xl font-medium text-white text-center mt-5">Desarrollo web</h2>
                    <p className="text-base font-normal text-slate-300 text-center mt-2 w-96">Nuestros diseños web están diseñados para representar la identidad de tu marca y mejorar la interacción con tus clientes en línea.</p>
                </div>
                <div className="flex flex-col items-center m-10">
                    <a className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 text-blue-400"><FontAwesomeIcon className="w-10 h-10" icon={faMobileScreenButton} /></a>
                    <h2 className="text-xl font-medium text-white text-center mt-5">Aplicaciones móviles</h2>
                    <p className="text-base font-normal text-slate-300 text-center mt-2 w-96">Desarrollamos aplicaciones móviles que permiten a tu empresa conectarse con una audiencia móvil en crecimiento.</p>
                </div>
                <div className="flex flex-col items-center m-10">
                    <a className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 text-blue-400"><FontAwesomeIcon className="w-10 h-10" icon={faServer} /></a>
                    <h2 className="text-xl font-medium text-white text-center mt-5">Hosting</h2>
                    <p className="text-base font-normal text-slate-300 text-center mt-2 w-96">Ofrecemos servicios de alojamiento web confiables y seguros para mantener tu sitio web en línea en todo momento.</p>
                </div>
                <div className="flex flex-col items-center mx-10 mt-10">
                    <a className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 text-blue-400"><FontAwesomeIcon className="w-10 h-10" icon={faLock} /></a>
                    <h2 className="text-xl font-medium text-white text-center mt-5">Seguridad digital</h2>
                    <p className="text-base font-normal text-slate-300 text-center mt-2 w-96">Protegemos tu negocio contra amenazas cibernéticas con soluciones avanzadas que incluyen firewall, detección de intrusiones, etc.</p>
                </div>
                <div className="flex flex-col items-center mx-10 mt-10">
                    <a className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 text-blue-400"><FontAwesomeIcon className="w-10 h-10" icon={faComputer} /></a>
                    <h2 className="text-xl font-medium text-white text-center mt-5">Infraestructura IT</h2>
                    <p className="text-base font-normal text-slate-300 text-center mt-2 w-96">Creamos soluciones web robustas y escalables que garantizan un rendimiento óptimo y una funcionalidad excepcional.</p>
                </div>
            </div>
        </div>
    )
}