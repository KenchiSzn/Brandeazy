import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import Various from "./components/Various"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services/>
        <Various/>
        <AboutUs />
      </main>
    </>
  )
}

export default App