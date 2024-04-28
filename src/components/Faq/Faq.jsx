import styled from "styled-components";
import FaqQuestion from "../FaqQuestion/FaqQuestion";
import Button from "../Button/Button";
const Wrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  margin: 2% auto 0 auto;
  width: 90vw;
`;
const Title = styled.span`
  font-size: 4.8rem;
  font-weight: bold;
`;
const Additional = styled.span`
  font-size: 1.6rem;
  color: #000;
  margin-bottom: 1%;
`;
const Faq = () => {
  return (
    <Wrapper>
      <Title>FAQs</Title>
      <Additional>
        Znajdź odpowiedź na najczęstsze pytania o naszym startupie
      </Additional>
      <FaqQuestion title="Co to jest Lingvoo?">
        Lingvoo to innowacyjna platforma edukacyjna, która wykorzystuje
        rzeczywistość rozszerzoną (AR) i wirtualną (VR), aby stworzyć wciągające
        środowisko do nauki języków obcych. Zamiast nudnych podręczników,
        Lingvoo przenosi Cię do wirtualnych światów, gdzie możesz rozmawiać z
        native speakerami, uczyć się słownictwa w kontekście i ćwiczyć gramatykę
        w zabawny sposób.
      </FaqQuestion>
      <FaqQuestion title="Jak działa Lingvoo?">
        Lingvoo przenosi Cię do wirtualnych światów, gdzie możesz rozmawiać z
        native speakerami w czasie rzeczywistym, ćwicząc konwersacje w
        naturalnym kontekście. Odkrywaj wirtualne miejsca i ucz się słownictwa w
        praktyce, łatwiej zapamiętując nowe zwroty i wyrażenia. Wykorzystaj
        interaktywne ćwiczenia i gry językowe, utrwalając nabyte umiejętności i
        bawiąc się przy tym. Lingvoo to idealne rozwiązanie dla osób w każdym
        wieku i na każdym poziomie zaawansowania, które chcą uczyć się języków
        obcych w sposób bardziej efektywny i przyjemny. Wybierz swój cel, zanurz
        się w wirtualnym świecie i doskonal swoje umiejętności językowe z
        Lingvoo! Platforma działa w 3 prostych krokach: <br />
        1. Określ swój cel językowy. <br />
        2. Zanurz się w wirtualnych symulacjach językowych. <br />
        3. Ćwicz i doskonal swoje umiejętności językowe. <br />
        <b>
          Lingvoo to Twój osobisty przewodnik po świecie języków obcych!
          Rozpocznij swoją przygodę z nauką już dziś!
        </b>
      </FaqQuestion>
      <FaqQuestion title="Dla kogo jest Lingvoo?">
        Lingvoo to platforma edukacyjna stworzona z myślą o szerokim gronie
        użytkowników, którzy pragną uczyć się języków obcych w sposób efektywny
        i przyjemny. Szczególnie polecana jest osobom, które chcą uczyć się
        języka w naturalnym kontekście, szukają angażujących metod nauki, cenią
        sobie elastyczność i wygodę, a także poszukują spersonalizowanej ścieżki
        edukacyjnej. Lingvoo to idealne rozwiązanie dla osób w każdym wieku,
        zarówno dla początkujących, jak i dla bardziej zaawansowanych uczniów.
        Platforma ta sprawdzi się zarówno w przypadku osób uczących się języka w
        celach prywatnych, jak i tych, którzy chcą wykorzystać język obcy w
        pracy lub na studiach. Lingvoo: Twój osobisty przewodnik po świecie
        języków obcych!
      </FaqQuestion>
      <FaqQuestion title="Na jakim etapie twórczym jest Lingvoo?">
        Lingvoo to platforma edukacyjna w fazie dynamicznego rozwoju, która
        stale się rozwija i ulepsza. Obecnie oferuje wirtualne symulacje
        językowe, interaktywne ćwiczenia i gry językowe, spersonalizowane
        informacje zwrotne i śledzenie postępów. W planach jest rozszerzenie
        bazy wirtualnych symulacji, wprowadzenie nowych funkcji gamifikacji i
        motywacji, integracja z narzędziami do nauki języka i dostępność na
        większej liczbie urządzeń. Zespół Lingvoo ciężko pracuje, aby zapewnić
        użytkownikom najlepsze możliwe doświadczenie edukacyjne. Lingvoo to
        idealna platforma dla osób, które chcą uczyć się języków obcych w sposób
        efektywny i przyjemny. Dołącz do społeczności Lingvoo i rozpocznij swoją
        przygodę z nauką już dziś!
      </FaqQuestion>
      <FaqQuestion title="Jakich języków będzie można uczyć się na Lingvoo?">
        Lingvoo oferuje szeroki wybór języków do nauki, obejmujący języki
        zachodnioeuropejskie, słowiańskie, skandynawskie, Azji Wschodniej, a
        także języki turecki, hebrajski, hindi i suahili. Platforma stale się
        rozwija, dążąc do udostępnienia nauki jak największej liczby języków,
        aby każdy mógł uczyć się języka, którego pragnie. Lingvoo oferuje
        również kursy języka angielskiego biznesowego, medycznego i innych
        specjalistycznych języków. Szukasz konkretnego języka? Sprawdź stronę
        internetową Lingvoo lub skontaktuj się z zespołem platformy, aby uzyskać
        więcej informacji. Lingvoo: Otwórz drzwi do świata języków!
      </FaqQuestion>
      <Title style={{fontSize: "3.2rem", marginTop: "2.5%"}}>Masz inne pytanie?</Title>
      <Additional>
        Skontaktuj się z nami
      </Additional>
      <Button transparent>Napisz do nas</Button>
    </Wrapper>
  );
};

export default Faq;
