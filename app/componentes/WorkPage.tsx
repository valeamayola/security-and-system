export default function WorkPage() {
    return (
        <div className="flex bg-slate-950 flex-col items-center align-center justify-center px-10 pb-20">
            <div className="flex flex-wrap items-center align-center justify-center">
                <div className="flex flex-col items-center align-center justify-center">
                    <img className="w-[35rem]" src="/pc-mockup.png" />
                        <h1 className="text-2xl font-bold text-white">Protal Centinela</h1>
                        <a href="https://caribeña.com.ar/index.html" target="_blank" className="btn bg-transparent border-2 border-gray-300 text-gray-300 mt-5 rounded-full hover:text-gray-900">Visitar URL</a>
                </div>
                <div className="flex flex-col items-center align-center justify-center">
                    <img className="w-[35rem]" src="/gz-mockup.png" />
                        <h1 className="text-2xl font-bold text-white">Grupo Zurita</h1>
                        <a href="https://grupozurita.com.ar/" target="_blank" className="btn bg-transparent border-2 border-gray-300 text-gray-300 mt-5 rounded-full hover:text-gray-900">Visitar URL</a>
                </div>
                <div className="flex flex-col items-center align-center justify-center">
                    <img className="w-[35rem]" src="/sdp-mockup.png" alt="SDP Mockup" />
                        <h1 className="text-2xl font-bold text-white">SDP Revestimientos</h1>
                        <a href="https://revestimientosdp.com.ar/index.html" target="_blank" className="btn bg-transparent border-2 border-gray-300 text-gray-300 mt-5 rounded-full hover:text-gray-900">Visitar URL</a>
                </div>
                <div className="flex flex-col items-center align-center justify-center">
                    <img className="w-[35rem]" src="/berlin-mockup.png" />
                        <h1 className="text-2xl font-bold text-white">Berlin Bar & Club</h1>
                        <a href="https://berlinclub.com.ar/index.html" target="_blank" className="btn bg-transparent border-2 border-gray-300 text-gray-300 mt-5 rounded-full hover:text-gray-900">Visitar URL</a>
                </div>
            </div>
        </div>
    )
}