import About_Services from "./components/About_Services";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
<>

<Navbar />
<Hero/>
<About_Services/>
<HowItWorks/>
<Pricing/>
<Footer/>
</>
  );
}
