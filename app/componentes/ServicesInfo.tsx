
interface Props {
    id: string;
    title: string;
    description: string;
    subdescription1: string;
    subdescription2: string;
    subdescription3: string;
    subdescription4: string;
    subdescription5: string;
}


export default function ServicesInfo({ id, title, description, subdescription1, subdescription2, subdescription3, subdescription4, subdescription5 }: Props) {
    return (
        <div className="h-full w-full bg-slate-950">
            <div id={id} className="flex flex-col items-center align-center justify-center mx-2 md:mx-16 pt-20">
                <h1 className="text-3xl font-bold text-white text-center">{title}</h1>
                <div className="flex flex-col mt-5">
                    <p className="text-xl font-medium text-sky-500 text-center">{description}</p>
                    <div className="flex flex-wrap items-center align-center justify-center mt-5">
                        <a className="bg-transparent border-gray-300 border-2 text-gray-300 pt-5 md:p-5 rounded-3xl text-center m-2 md:w-48 w-40 h-28">
                            <p className="text-gray-300 font-medium text-base text-center">{subdescription1}</p>
                        </a>
                        <a className="bg-transparent border-gray-300 border-2 text-gray-300 pt-5 md:p-5 rounded-3xl text-center m-2 md:w-48 w-40 h-28">
                            <p className="text-gray-300 font-medium text-base"><i className="fa-solid fa-code"></i></p>
                            <p className="text-gray-300 font-medium text-base">{subdescription2}</p>
                        </a>
                        <a className="bg-transparent border-gray-300 border-2 text-gray-300 pt-5 md:p-5 rounded-3xl text-center m-2 md:w-48 w-40 h-28">
                            <p className="text-gray-300 font-medium text-base"><i className="fa-solid fa-mobile-screen-button"></i></p>
                            <p className="text-gray-300 font-medium text-base">{subdescription3}</p>
                        </a>
                        <a className="bg-transparent border-gray-300 border-2 text-gray-300 pt-5 md:p-5 rounded-3xl text-center m-2 md:w-48 w-40 h-28">
                            <p className="text-gray-300 font-medium text-base"><i className="fa-solid fa-database"></i></p>
                            <p className="text-gray-300 font-medium text-base">{subdescription4}</p>
                        </a>
                        <a className="bg-transparent border-gray-300 border-2 text-gray-300 pt-5 md:p-5 rounded-3xl text-center m-2 md:w-48 w-40 h-28">
                            <p className="text-gray-300 font-medium text-base"><i className="fa-solid fa-circle-check"></i></p>
                            <p className="text-gray-300 font-medium text-base">{subdescription5}</p>
                        </a>
                    </div>
                    <a className="btn bg-transparent border-2 border-sky-500 text-sky-500 text-lg rounded-full hover:text-gray-300 hover:bg-sky-500 mt-10 w-72 self-center" href="https://api.whatsapp.com/send/?phone=%2B541156260023&text&type=phone_number&app_absent=0" target="_blank">Solicitar cotización</a>
                </div>
            </div>
        </div>
    )
}