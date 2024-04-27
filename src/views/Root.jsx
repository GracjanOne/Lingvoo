import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import RightImageSection from "../components/RightImageSection/RightImageSection";
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
    </>
  );
}

export default App;
