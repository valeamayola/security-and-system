export default function NavBar() {
    return (
        <div className="navbar bg-transparent py-2 md:py-5 px-2 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
                        <li><a className="text-white">Inicio</a></li>
                        <li><a className="text-white">Servicios</a></li>
                        <li><a className="text-white">Sobre nosotros</a></li>
                        <li><a className="text-white">Nuestros trabajos</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hover:bg-transparent">
                    <img className="w-44 md:w-52" src="/logopnghorizontal.png" alt="Logo"/>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="font-medium text-gray-300 text-base">Inicio</a></li>
                    <li><a className="font-medium text-gray-300 text-base">Servicios</a></li>
                    <li><a className="font-medium text-gray-300 text-base">Sobre nosotros</a></li>
                    <li><a className="font-medium text-gray-300 text-base">Nuestros trabajos</a></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <a className="fixed z-10 btn border-white border-2 bg-blue-950 shadow-md text-white text-base rounded-full hover:bg-gray-900 hover:text-sky-700 hover:border-gray-900" href="https://api.whatsapp.com/send/?phone=%2B541156260023&text&type=phone_number&app_absent=0" target="_blank">Contactános</a>
            </div>
        </div>
    );
}