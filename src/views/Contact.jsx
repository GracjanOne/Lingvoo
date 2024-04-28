import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ContactUs from "../components/ContactUs/ContactUs"
import Location from "../components/Location/Location"
const Contact = () =>(
    <>
         <Navbar
        alignment="middle"
        font="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        bgColor="#FFFFFF"
      />
    <ContactUs />
    <Location />
    <Footer />
    </>
)
export default Contact