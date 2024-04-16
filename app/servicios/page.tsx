import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import ServicesHeader from "../componentes/ServicesHeader";
import ServicesPage from "../componentes/ServicesPage";

export default function Services () {
    return (
        <div className="h-96 w-full bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950" >
            <NavBar />
            <ServicesHeader />
            <ServicesPage />
            <Footer />
        </div>
    )
}