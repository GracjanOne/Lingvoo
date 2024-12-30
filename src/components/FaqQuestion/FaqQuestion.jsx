import { useState } from "react";
import styled from "styled-components";
import arrow from "../../assets/bottom-arrow.svg";
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types'
const Arrow = styled.img`
  width: 2rem;
`;

const Title = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 90vw;
  padding: 0.5% 1%;
  font-weight: bold;
`;

const Wrapper = styled.div`
  margin: 0.2% auto;
  @media screen and (max-width: 900px){
    margin: 1.3% auto;
  }
  @media screen and (max-width: 450px){
    margin: 2% auto;
  }
`;

const Text = styled.div`
  margin-top: 0.5%;
  margin-left: 1%;
  font-size: 1.6rem;
  width: 90vw;
  height: ${(props) => (props.$visibility ? "100%" : "0px")};
  overflow: hidden;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const FaqQuestion = ({ title, children }) => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  const arrowSpin = useSpring({
    transform: `rotate(${visibility ? 180 : 0}deg)`,
    config: { duration: 300 },
  });
  
  const animation = useSpring({
    height: visibility ? 'auto' : 0,
    opacity: visibility ? 1 : 0,
    config: { duration: 300 },
  });
  

  return (
    <Wrapper>
      <Title>
        {title}
        <Button aria-label="arrow" onClick={handleClick}>
          <animated.div style={arrowSpin}>
            <Arrow src={arrow} alt="" />
          </animated.div>
        </Button>
      </Title>
      <animated.div style={animation}>
        <Text $visibility={visibility}>{children}</Text>
      </animated.div>

     
    </Wrapper>
  );
};

FaqQuestion.propTypes ={
  title: PropTypes.string,
  children: PropTypes.node,
}

export default FaqQuestion;
