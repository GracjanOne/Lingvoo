import Navbar from "../components/Navbar/Navbar"
import TesterCta from "../components/TesterCta/TesterCta"
import TesterImageSection from "../components/TesterImageSection/TesterImageSection"
import Recrutation from "../components/Recrutation/Recrutation"
import SingUp from "../components/SingUp/SingUp"
import Footer from "../components/Footer/Footer"
const BecomeTester = () =>(
    <>
     <Navbar
        alignment="middle"
        font="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        bgColor="#FFFFFF"
      />
    <TesterCta left/>
    <TesterImageSection />
    <Recrutation />
    <SingUp />
    <Footer />
    </>
)
export default BecomeTester