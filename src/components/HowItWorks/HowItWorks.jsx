import styled from "styled-components";
import Button from "../Button/Button";
const Wrapper = styled.section`
  width: 90vw;
  margin: 5% auto;
`;
const Header = styled.header`
  font-size: 4.8rem;
  font-weight: bold;
`;
const Additional = styled.span`
  font-size: 1.6rem;
`;

const Number = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;
const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
  margin: 3% 0;
`;
const Desc = styled.p`
  font-size: 1.6rem;
`;
const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const BottomContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2%;
`;
const HowItWorks = () => {
  return (
    <Wrapper>
      <div>
        <Header>Jak to działa - krok po kroku</Header>
        <Additional>
          Nasz produkt zapewnia interaktywne i immersyjne doświadczenia
          językowe, które pomagają użytkownikom osiągnąć płynność w nauce
          języka.
        </Additional>
      </div>
      <BottomContainer>
        <ElementWrapper>
          <Number>1.</Number>
          <Title>Wybierz swój cel</Title>
          <Desc>
            Chcesz płynnie mówić po angielsku? Podszkolić się przed wyjazdem do
            Hiszpanii? Lingvoo oferuje kursy dla każdego poziomu i celu.
          </Desc>
        </ElementWrapper>
        <ElementWrapper>
          <Number>2.</Number>
          <Title>Zanurz się w wirtualnym świecie</Title>
          <Desc>
            Wkrocz do wirtualnych kawiarni, sklepów i ulic, gdzie możesz
            rozmawiać z native speakerami i uczyć się języka w naturalnym
            kontekście.
          </Desc>
        </ElementWrapper>
        <ElementWrapper>
          <Number>3.</Number>
          <Title>Ćwicz i doskonal swoje umiejętności</Title>
          <Desc>
            Interaktywne ćwiczenia, gry językowe i spersonalizowane informacje
            zwrotne pomogą Ci szybko osiągnąć płynność językową.
          </Desc>
        </ElementWrapper>
      </BottomContainer>
      <Button link="/kontakt" transparent>Dowiedz się więcej</Button>
    </Wrapper>
  );
};

export default HowItWorks;
