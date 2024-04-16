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
    <div>
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
