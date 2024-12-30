import styled from "styled-components";
import video from "../../assets/cory_video.mp4";
import Button from "../Button/Button";
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
  
`;

const Video = styled.video`
  width: 40%;
  @media screen and (max-width: 1300px) {
    object-fit: cover;
    width: 50%;
    height: 40vh;
  }
  @media screen and (max-width: 900px) {
    width: 95vw;
  }
`;
const Div = styled.div`
  @media screen and (max-width:900px){
    text-align : center;
  }
`
const VideoSection = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>Czym jest Lingvoo?</Title>
        <p>
          Lingvoo to innowacyjna platforma edukacyjna, która wykorzystuje
          rzeczywistość rozszerzoną (AR) i wirtualną (VR), aby stworzyć
          wciągające i angażujące środowisko do nauki języków obcych. Zamiast
          nudnych podręczników i wykładów, Lingvoo przenosi Cię do wirtualnych
          światów, gdzie możesz rozmawiać z native speakerami, uczyć się
          słownictwa w kontekście i ćwiczyć gramatykę w zabawny sposób. Dowiedz
          się więcej o Lingvoo, oglądając filmik obok, w którym Cory, jeden ze
          współzałożycieli z USA, opowiada o platformie i jej zaletach. Lingvoo
          to przyszłość nauki języków obcych - spróbuj już dziś i przekonaj się
          sam!
        </p>
        <Div>
          <Button link="/zostan-testerem" biggerFont transparent responsive>
            Wypróbuj
          </Button>
        </Div>
      </LeftWrapper>
      <Video controls src={video}>
        {" "}
      </Video>
    </Wrapper>
  );
};
export default VideoSection;
