import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Wrapper = styled.section`
  min-height: 85vh;
`;
const P = styled.p`
  font-size: 1.6rem;
`;
const H5 = styled.h5`
  font-size: 2rem;
`;
const Law = () => (
  <>
    <Wrapper>
      <Navbar
        alignment="middle"
        font="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        bgColor="#FFFFFF"
      />

      <article style={{ width: "80vw", margin: "auto" }}>
        <H5>Informacje Prawne</H5>

        <P>
          Lingvoo jest fikcyjną stroną internetową, stworzoną jako przykładowy
          projekt przez Gracjana Zalewskiego, web developera. Wszelkie
          podobieństwa do rzeczywistych osób, miejsc, zdarzeń lub organizacji są
          całkowicie przypadkowe i niezamierzone.
        </P>

        <P>
          <b>Dane i Powiązania: <br /> </b>
          Treści zawarte na stronie Lingvoo, w tym teksty, obrazy, dźwięki i
          inne materiały, są fikcyjne i nie mają żadnego związku z
          rzeczywistością. Wszelkie odnośniki do innych stron internetowych lub
          serwisów są również fikcyjne i nie prowadzą do żadnych rzeczywistych
          witryn.
        </P>
        <P>
          <b>Zastrzeżenia Prawne: <br /> </b>
          Gracjan Zalewski nie ponosi żadnej odpowiedzialności za jakiekolwiek
          szkody lub straty wynikające z korzystania ze strony Lingvoo.
          Korzystanie ze strony odbywa się na własne ryzyko użytkownika.
        </P>

        <P>
          <b>Ochrona Danych Osobowych: <br /> </b>
          Strona Lingvoo nie gromadzi żadnych danych osobowych użytkowników.
          Wszelkie interakcje z użytkownikami są ograniczone do przeglądania
          zawartości strony.
        </P>

        <P>
          <b>Prawa Autorskie: <br /> </b>
          Wszystkie treści oprócz zdjęć (są one używane za pomocą licencji
          serwisu Freepik a przekierowania do autorów zdjęć są możliwe do
          zobaczenia w stopce strony u dołu ekranu w zakładce “Źródła zdjęć”)
          zawarte na stronie Lingvoo są chronione prawem autorskim Gracjana
          Zalewskiego. Kopiowanie, rozpowszechnianie lub modyfikowanie treści
          bez zgody autora jest zabronione.
        </P>

        <P>
          <b>Użytkowanie Dozwolone: <br /> </b>
          Użytkownicy mogą swobodnie przeglądać zawartość strony Lingvoo dla
          celów osobistych i edukacyjnych. Nie jest dozwolone wykorzystywanie
          treści strony w celach komercyjnych bez zgody autora.
        </P>

        <P>
          <b>Kontakt: <br /> </b>W przypadku pytań lub wątpliwości dotyczących strony
          Lingvoo, prosimy o kontakt z Gracjanem Zalewskim za pomocą danych
          podanych w stopce strony w zakładce “Design & Development”.
        </P>

        <P>
          <b>Uwaga: <br /> </b>
          Niniejsze informacje prawne mogą ulec zmianie bez uprzedzenia.
          Użytkownicy są zobowiązani do regularnego sprawdzania strony pod kątem
          aktualizacji.
        </P>

        <P>
          <b>Dodatkowe Informacje: <br /> </b>
          Strona Lingvoo jest zgodna z Ogólnym Rozporządzeniem o Ochronie Danych
          Osobowych (RODO). Strona Lingvoo nie zawiera żadnych plików cookie ani
          innych mechanizmów śledzenia użytkowników. Strona Lingvoo jest
          dostępna dla wszystkich użytkowników bez ograniczeń.
        </P>
      </article>
    </Wrapper>
    <Footer />
  </>
);
export default Law;
