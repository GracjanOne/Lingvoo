import styled from "styled-components";
import backgroundImage from "../../assets/hero-section-main.webp";
import Button from "../Button/Button";
const ImageBackground = styled.div`
  width: 100%;
  height: 94vh;

  background-color: #000;
`;
const Img = styled.img`
  width: 100%;
  height: 94vh;
  object-fit: cover;
  opacity: 0.3;
  position: absolute;
`;
const Text = styled.span`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  text-align: center;
  font-size: 2.4rem;
  z-index: 10;
  color: white;
  width: 90%;
  @media screen and (max-width: 550px){
    font-size: 2rem;
  }
`;
const H2 = styled.h2`
    font-size: 6.4rem;
    margin-bottom: 1%;
    @media screen and (max-width: 550px){
    font-size: 5rem;
  }
  @media screen and (max-width: 400px){
    font-size: 4rem;
  }
`
const ButtonDiv = styled.div`
  @media screen and (max-width: 900px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 5%;
    
  }
`

const HeroSection = () => {
  return (
    <>
      <ImageBackground>
        <Text>
          <H2>Nauka języków w nowej rzeczywistości</H2>
          <span>
            Przenieś się do świata języków za pomocą AR i VR i naucz się w
            sposób interaktywny i angażujący.
          </span>
            <ButtonDiv style={{marginTop: "1%"}}>
              <Button link="/o-produkcie" responsive white biggerFont>Dowiedz się więcej</Button> <Button link="/zostan-testerem" transparent responsive fontWhite biggerFont>Zostań beta-testerem</Button>
            </ButtonDiv>
        </Text>
        <Img rel="preload" src={backgroundImage} alt="" />
      </ImageBackground>
    </>
  );
};

export default HeroSection;
