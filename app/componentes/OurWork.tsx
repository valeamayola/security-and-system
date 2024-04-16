export default function OurWork() {
    return (
        <div className="flex bg-gradient-to-b from-slate-950 via-blue-950 to-blue-950 flex-col items-center justify-between py-5 md:py-10 px-10 md:px-32">
            <h1 className="text-blue-400 border-2 border-white rounded-full px-8 py-4 uppercase text-xl font-bold">Nuestros trabajos</h1>
            <p className="text-white text-2xl font-medium mt-5 text-center">Explora nuestros trabajos y descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos en línea.</p>
            <div className="flex flex-row items-center">
                <img className="w-full h-32 md:h-[20rem] hidden md:flex" src="/berlin-mockup.png"></img>
                <img className="w-full h-44 md:h-[30rem] " src="/pc-mockup.png"></img>
                <img className="w-full h-32 md:h-[20rem] hidden md:flex" src="/sdp-mockup.png"></img>
            </div>
            <p className="text-white text-xl font-medium mt-5 text-center">Si deseas obtener más información sobre alguno de nuestros proyectos o estás interesado en trabajar con nosotros en tu próximo proyecto, no dudes en ponerte en contacto. Estamos aquí para ayudarte a transformar tus ideas en realidad en el mundo digital.</p>
            <a href="/nuestros-trabajos" className="btn text-white border-white bg-transparent mt-5 text-lg rounded-full">Ver todos nuestros trabajos</a>
        </div>
    )
}