import styled from "styled-components";
import tester from "../../assets/tester.webp";
const Wrapper = styled.section`
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    margin: 10% 0;
  }
`;
const Title = styled.span`
  font-size: 4.8rem;
  font-weight: bold;
 
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  width: 40%;
  margin-right: 5%;
  gap: 7%;
  @media screen and (max-width: 900px) {
    width: 90vw;
    margin: auto;
    margin-bottom: 2%;
  }
  @media screen and (min-width: 900px) and (max-width: 1200px) {
    transform: scale(0.9);
  }
  @media screen and (max-width:520px) {
    span{
      font-size: 3.8rem;
    }
    p{
      font-size: 1.4rem;
    }
  }
  
`;

const Img = styled.img`
  @media screen and (max-width: 1300px) {
    object-fit: cover;
    width: 50%;
  }
  @media screen and (max-width: 900px) {
    width: 95vw;
  }
`;
const TesterImageSection = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>Zostań testerem i dołącz do społeczności Lingvoo</Title>
        <p>
          Poszukujemy testerów, którzy chcą doświadczyć nowatorskiego podejścia
          do nauki języków i pomóc nam doskonalić naszą platformę. Dzięki temu
          masz możliwość: <br />• Testować naszą platformę i uczyć się języków w
          innowacyjny sposób. <br />• Dołączyć do naszej społeczności i wpływać na nasz
          produkt. <br />• Być jedym z pierwszych którzy używają naszej technologii.
        </p>
        <div>
         
        </div>
      </LeftWrapper>
      <Img src={tester} alt="" />
    </Wrapper>
  );
};
export default TesterImageSection;
