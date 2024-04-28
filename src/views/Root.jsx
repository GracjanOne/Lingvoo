import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import RightImageSection from "../components/RightImageSection/RightImageSection";
import CtaSection from "../components/CtaSection/CtaSection";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
function App() {
  /**
 * Navbar.propTypes = {
  alignment: PropTypes.oneOf(["right", "middle", "space-around"]),
  font: PropTypes.string,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  MobileBgColor: PropTypes.string,
  borderColor: PropTypes.string
};
 */
  return (
    <>
      <Navbar
        alignment="middle"
        font="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        bgColor="#FFFFFF"
      />
      <HeroSection />
      <RightImageSection />
      <CtaSection />
      <Faq/>
      <Footer />
    </>
  );
}

export default App;
