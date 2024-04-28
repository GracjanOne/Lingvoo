import Navbar from "../components/Navbar/Navbar"
import AboutCta from "../components/AboutCta/AboutCta"
import VideoSection from "../components/VideoSection/VideoSection"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import Footer from "../components/Footer/Footer"
const AboutProduct = () =>(
    <>
    <Navbar
        alignment="middle"
        font="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        bgColor="#FFFFFF"
      />
    <AboutCta left/>
    <VideoSection />
    <HowItWorks />
    <Footer />
    </>
)
export default AboutProduct