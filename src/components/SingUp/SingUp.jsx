import styled from "styled-components";
function handleClick() {
  alert(
    "To jest tylko strona testowa, nie można się zapisać do beta-testów. Po więcej informacji zobacz zakładke informacje prawne lub skontaktuj się ze mną przez e-mail: gracjan.zalewski55@gmail.com"
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: auto;
  flex-wrap: wrap;
`;
const Header = styled.header`
  font-size: 3.6rem;
  font-weight: bold;
`;
const P = styled.p`
  font-size: 1.6rem;
`;
const Input = styled.input`
  width: 280px;
  padding: 4% 0 4% 1%;
  @media screen and (max-width: 530px) {
    width: 90vw;
  }
`;
const Button = styled.input`
  color: white;
  background-color: black;
  border: none;
  padding: 4% 0 4% 1%;
  width: 190px;
  margin-left: 5%;
  cursor: pointer;
  @media screen and (max-width: 530px) {
    width: 91.6vw;
    margin-left: 0;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 530px) {
    flex-direction: column;
  }
`;

const SingUp = () => {
  return (
    <Wrapper>
      <div>
        <Header>Dołącz do naszego programu testowego</Header>
        <P>Zostań testerem Lingvoo</P>
      </div>
      <div>
        <div>
          <form action="">
            <InputWrapper>
              <Input required type="email" placeholder="Wpisz swój email..." />
              <Button type="submit" value="Zapisz się" onClick={handleClick} />
            </InputWrapper>
          </form>
        </div>
        <p>
          Klikając “Zapisz się” oświadczasz że zapoznałeś się i zgadzasz się z
          naszymi zasadami
        </p>
      </div>
    </Wrapper>
  );
};
export default SingUp;
