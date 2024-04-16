import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutInfo() {
    return (
        <div className="flex bg-gradient-to-b from-slate-950 via-blue-950 to-blue-950 flex-col md:flex-row items-center justify-between py-5 md:py-10 px-5 md:px-32">
            <div className="flex flex-col items-start w-80 md:w-[200rem] mx-2 md:mx-5">
                <p className="text-white text-2xl font-medium text-center md:text-start">Somos una empresa dedicada a brindar soluciones integrales <br></br>
                    en el ámbito de diseño y desarrollo web, aplicaciones móviles, hosting, seguridad digital e infraestructura IT. <br></br>
                    Nuestra misión es ayudar a nuestros clientes a alcanzar el éxito en el mundo digital.</p>
                <p className="text-slate-300 text-2xl font-medium mt-5 text-center md:text-start">En Security & System, nos enorgullece contar con un equipo de profesionales altamente capacitados y apasionados <br></br>
                    por la tecnología. Trabajamos estrechamente con nuestros clientes para comprender sus necesidades y ofrecer soluciones <br></br>
                    a medida que impulsen sus objetivos comerciales.</p>
            </div>
            <div className="card mt-5 md:mt-0 mx-5 bg-transparent border-2 border-blue-800/50 shadow-blue-800/50 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-white">Nuestro equipo</h2>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar border-blue-950">
                            <div className="w-12">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar border-blue-950">
                            <div className="w-12">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar border-blue-950">
                            <div className="w-12">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="avatar placeholder border-blue-950">
                            <div className="w-12 bg-slate-800 text-neutral-content">
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-xl text-white mt-2">Integrado por expertos en diversas áreas, cada uno aporta sólida experiencia y conocimiento especializado para potenciar el éxito de nuestros clientes.</p>
                </div>
            </div>
            <div className="card mt-5 md:mt-0 mx-5 bg-transparent border-2 border-blue-800/50 shadow-blue-800/50 shadow-2xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-white">Clientes satisfechos</h2>
                    <p className="text-xl text-white mt-2">Trabajamos con una amplia gama de clientes, desde pequeñas empresas hasta grandes corporaciones de diversos sectores. En Security and System los ayudamosa a alcanzar sus objetivos en el mundo digital.</p>
                    <h1 className="text-7xl text-slate-50/50 font-extrabold mt-2">48</h1>
                    <h1 className="text-xl text-white mt-2">Proyectos entregados</h1>
                </div>
            </div>
        </div>
    )
}