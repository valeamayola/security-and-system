import { faHandshake, faRocket, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhyChoose() {
    return (
        <div className="bg-slate-950 flex flex-col items-center justify-between px-5 md:px-44">
            <div className="flex flex-col md:flex-row justify-around">
                <div className="card w-80 md:w-full bg-transparent border-2 border-blue-800/50 shadow-blue-800/50 shadow-2xl m-5">
                    <div className="card-body">
                        <h2 className="card-title text-xl text-white"><FontAwesomeIcon className="w-5" icon={faWandMagicSparkles} />Soluciones a tu medida</h2>
                        <p className="text-lg text-white mt-2">Creamos soluciones personalizadas que se ajustan a tus necesidades y presupuesto.</p>
                    </div>
                </div>
                <div className="card w-80 md:w-full bg-transparent border-2 border-blue-800/50 shadow-blue-800/50 shadow-2xl m-5">
                    <div className="card-body">
                        <h2 className="card-title text-xl text-white"><FontAwesomeIcon className="w-5" icon={faHandshake} />Experiencia y confianza</h2>
                        <p className="text-lg text-white mt-2">Más de 10 años de experiencia en el mercado nos avalan.</p>
                    </div>
                </div>
                <div className="card w-80 md:w-full bg-transparent border-2 border-blue-800/50 shadow-blue-800/50 shadow-2xl m-5">
                    <div className="card-body">
                        <h2 className="card-title text-xl text-white"><FontAwesomeIcon className="w-5" icon={faRocket} />Innovación constante</h2>
                        <p className="text-lg text-white mt-2">Nos mantenemos a la vanguardia tecnológica para ofrecerte las mejores soluciones.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}