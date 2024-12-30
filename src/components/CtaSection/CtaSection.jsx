import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import bg from "../../assets/woman-vr.webp";
import Button from "../Button/Button";
const Wrapper = styled.section`
  height: 450px;
  background-color: #000;
  margin-top: 5%;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 820px){
    margin: 10% 0;
    height: 80%;
  }
`;
const Img = styled.img`
  height: 100%;
  opacity: 0.3;
  
  @media screen and (max-width: 1450px){
    position: relative;
    left: -20%;
  }
  @media screen and (max-width: 520px){
    left: -40%;
    height: 80%;
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
class CtaSection extends React.Component {
  render() {
    const { left } = this.props;
    const Text = styled.span`
    padding-right: 2%;
    position: absolute;
    z-index: 100;
    color: white;
    display: flex;
    flex-direction: column;
    left: ${left? "10%" : "50%"};
    top: 45%;
    transform: translateY(-50%);
    @media screen and (max-width: 900px) {
    left: 53%;
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
          <Title>Odkryj nowy sposób nauki</Title>
          <Additional>
            Doświadcz języka w pełni immersyjnym środowisku wirtualnym. Zapisz
            się na bezpłatną wersję próbną już teraz!
          </Additional>
          <Button link="/kontakt" small white>
            Zapisz się
          </Button>
        </Text>
        <Img src={bg} alt="" />
      </Wrapper>
    );
  }
}
CtaSection.propTypes = {
  left: PropTypes.bool,
};
export default CtaSection;
