import AboutHeader from "../componentes/AboutHeader";
import AboutInfo from "../componentes/AboutInfo";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";

export default function About() {
    return (
        <div className="h-96 w-full bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950" >
            <NavBar />
            <AboutHeader />
            <AboutInfo />
            <Footer />
        </div>
    )
}