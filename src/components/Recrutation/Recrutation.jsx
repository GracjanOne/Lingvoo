import styled from "styled-components";
const Wrapper = styled.section`
  width: 90vw;
  margin: 5% auto;
`;
const Header = styled.header`
  font-size: 4.8rem;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 500px){
    font-size: 4rem;
  }
`;

const UpperContainer = styled.div`
 
`;
const Number = styled.span`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;
const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
  margin: 3% 0;
  text-align: center;
`;
const Desc = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;
const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  @media screen and (max-width: 900px){
    margin: auto;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 500px){
    width: 90vw;
  }
`;
const BottomContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2%;
  @media screen and (max-width: 900px){
    flex-direction: column;
    justify-content: center;
  }
`;
const Recrutation = () => {
  return (
    <Wrapper>
      <UpperContainer>
        <Header>Wyjaśnienie procesu rekrutacyjnego</Header>
     
      </UpperContainer>
      <BottomContainer>
        <ElementWrapper>
          <Number>1.</Number>
          <Title>Zapisz się</Title>
          <Desc>
          Podaj swój adres e-mail w formularzu poniżej i poczekaj na potwierdzenie zapisu na emailu
          </Desc>
        </ElementWrapper>
        <ElementWrapper>
          <Number>2.</Number>
          <Title>Poczekaj na decyzje</Title>
          <Desc>
          Poczekaj na naszą odpowiedź którą dostaniesz prosto na swojego e-maila
          </Desc>
        </ElementWrapper>
        <ElementWrapper>
          <Number>3.</Number>
          <Title>Dołącz do nas</Title>
          <Desc>
          W przypadku akceptacji wszystko co potrzebne uzyskasz na e-mailu
          </Desc>
        </ElementWrapper>
      </BottomContainer>
      
    </Wrapper>
  );
};

export default Recrutation;
