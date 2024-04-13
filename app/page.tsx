import AboutUs from "./componentes/AboutUs";
import Contact from "./componentes/Contact";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import NavBar from "./componentes/NavBar";
import OurServices from "./componentes/OurServices";
import OurWork from "./componentes/OurWork";
import WhyChoose from "./componentes/WhyChoose";

export default function Home() {
  return (
    <div 
    className="h-screen w-full bg-gradient-to-b from-blue-950 via-slate-950 to-slate-950"
    >
      <NavBar />
      <Header />
      <WhyChoose />
      <AboutUs />
      <OurServices />
      <OurWork />
      <Contact />
      <Footer />
    </div>
  );
}
