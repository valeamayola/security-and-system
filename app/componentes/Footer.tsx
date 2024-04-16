import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="footer py-10 md:py-20 px-10 md:px-44 bg-slate-900 text-base-content">
            <aside>
                <img className="w-44 md:w-60" src="/logopnghorizontal.png" alt="Logo" />
            </aside>
            <nav>
                <h6 className="footer-title text-xl text-white">Servicios</h6>
                <a className="link link-hover text-lg text-white">Diseño web</a>
                <a className="link link-hover text-lg text-white">Aplicaciones móviles</a>
                <a className="link link-hover text-lg text-white">Hosting</a>
                <a className="link link-hover text-lg text-white">Seguridad digital</a>
                <a className="link link-hover text-lg text-white">Infraestructura IT</a>
            </nav>
            <nav>
                <h6 className="footer-title text-xl text-white">Navegación</h6>
                <a className="link link-hover text-lg text-white">Sobre nosotros</a>
                <a className="link link-hover text-lg text-white">Servicios</a>
                <a className="link link-hover text-lg text-white">Nuestros trabajos</a>
                <a className="link link-hover text-lg text-white">Contacto</a>
            </nav>
            <nav>
                <h6 className="footer-title text-xl text-white">Información</h6>
                <p className="text-lg text-white mt-2 flex"><FontAwesomeIcon className="w-5 mr-2" icon={faLocationDot} />Juan José paso 1353, Morón</p>
                <p className="text-lg text-white mt-2 flex"><FontAwesomeIcon className="w-5 mr-2" icon={faPhone} />11 7726-4032</p>
                <p className="text-lg text-white mt-2 flex"><FontAwesomeIcon className="w-5 mr-2" icon={faEnvelope} />contact@securityandsystem.com</p>
            </nav>
        </footer>
    )
}