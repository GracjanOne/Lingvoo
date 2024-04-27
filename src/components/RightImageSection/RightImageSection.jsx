import styled from "styled-components";
import logo from "../../assets/lingvoo_logo.webp";
import team from "../../assets/our-team.webp";
import Button from "../Button/Button";
const Wrapper = styled.div`
margin-top: 2%;
  display: flex;
  justify-content: center;
  
`;
const Title = styled.span`
font-size: 4.8rem;
font-weight: bold;
`
const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    width: 40%;
    margin-right: 5%;
    gap: 7%;
`
const Logo =styled.img`
    width: 90px;
`
const RightImageSection = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Logo src={logo} alt="Lingvoo logo" />
        <Title>Poznaj zespół stojący za firmą</Title>
        <p>Jesteśmy zespołem pasjonatów języków, którzy wykorzystują technologię rzeczywistości rozszerzonej i wirtualnej, aby stworzyć niezwykłe doświadczenie nauki języka. Nasza platforma przenosi uczących się języków poza tradycyjną salę lekcyjną i przenosi ich do realistycznych sytuacji, w których mogą praktykować język docelowy w naturalny i interaktywny sposób. </p>
        <div><Button biggerFont transparent>Skontaktuj się z nami</Button></div>
      </LeftWrapper>
      <div><img src={team} alt="" /></div>
    </Wrapper>
  );
};
export default RightImageSection;
