import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import WorkHeader from "../componentes/WorkHeader";
import WorkPage from "../componentes/WorkPage";

export default function Work() {
    return (
        <div className="h-screen w-full bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950" >
            <NavBar />
            <WorkHeader />
            <WorkPage />
            <Footer />
        </div>
    )
}