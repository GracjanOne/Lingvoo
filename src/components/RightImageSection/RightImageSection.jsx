import styled from "styled-components";
import logo from "../../assets/lingvoo_logo.webp";
import team from "../../assets/our-team.webp";
import Button from "../Button/Button";
const Wrapper = styled.section`
margin-top: 5%;
  display: flex;
  justify-content: center;

  @media screen and (max-width:900px){
   flex-wrap: wrap;
   
}
`;
const Title = styled.span`
font-size: 4.8rem;
font-weight: bold;
@media screen and (max-width: 400px){
  text-align: center;
}
`
const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    width: 40%;
    margin-right: 5%;
    gap: 7%;
    @media screen and (max-width:900px){
   width: 90vw;
   margin: auto;
   margin-bottom: 2%;
   
}
@media screen and (min-width: 900px) and (max-width:1200px){
   transform: scale(0.9);
   
}
@media screen and (max-width: 400px){
  text-align: center;
}
`
const Logo =styled.img`
    width: 90px;
`
const Img = styled.img`
@media screen and (max-width: 1300px){
  object-fit: cover;
  width: 50%;
}
@media screen and (max-width:900px){
  width: 90vw;
}
`
const RightImageSection = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Logo src={logo} alt="Lingvoo logo" />
        <Title>Poznaj zespół stojący za firmą</Title>
        <p>Jesteśmy zespołem pasjonatów języków, którzy wykorzystują technologię rzeczywistości rozszerzonej i wirtualnej, aby stworzyć niezwykłe doświadczenie nauki języka. Nasza platforma przenosi uczących się języków poza tradycyjną salę lekcyjną i przenosi ich do realistycznych sytuacji, w których mogą praktykować język docelowy w naturalny i interaktywny sposób. </p>
        <div><Button link="/kontakt" biggerFont transparent responsive>Skontaktuj się z nami</Button></div>
      </LeftWrapper>
      <Img src={team} alt="" />
    </Wrapper>
  );
};
export default RightImageSection;
