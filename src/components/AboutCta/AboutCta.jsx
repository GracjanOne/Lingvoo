import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import bg from "../../assets/about-main.webp";

const Wrapper = styled.section`
  height: 450px;
  background-color: #000;

  position: relative;
  overflow: hidden;
 
`;
const Img = styled.img`
  height: 100%;
  opacity: 0.3;
  width: 100vw;
  object-fit: cover;
  @media screen and (max-width: 1450px){
    
  }
 
`;

const Title = styled.h3`
  font-size: 4.8rem;
  margin-bottom: 1%;
  @media screen and (max-width: 900px){
    font-size: 3.8rem;
    margin: 0 0 1% 0;
  }
  @media screen and (max-width: 520px){
    width: 90vw;
    margin: auto;
  }
`;
const Additional = styled.span`
  font-size: 1.6rem;
  margin-bottom: 1%;
`;
class AboutCta extends React.Component {
  render() {
    const { left } = this.props;
    const Text = styled.span`
    padding-right: 2%;
    position: absolute;
    z-index: 100;
    color: white;
    display: flex;
    flex-direction: column;
    left: ${left? "5%" : "50%"};
    top: 45%;
    transform: translateY(-50%);
    @media screen and (max-width: 900px) {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    ;
    @media screen and (min-width: 520px) and (max-width: 900px){
      width: 80%;
    }
  }
  `;
    return (
      <Wrapper>
        <Text>
          <Title>Nauka języków z AR i VR</Title>
          <Additional>
            Przenieś się do świata języka i ucz się w sposób interaktywny
          </Additional>
          
        </Text>
        <Img src={bg} alt="" />
      </Wrapper>
    );
  }
}
AboutCta.propTypes = {
  left: PropTypes.bool,
};
export default AboutCta;
