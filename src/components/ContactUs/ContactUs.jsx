import styled from "styled-components";
import email from "../../assets/email-svgrepo-com.svg"
import phone from "../../assets/phone-svgrepo-com.svg"
import pin from "../../assets/location-pin-alt-1-svgrepo-com.svg"
const Wrapper = styled.section`
margin-top: 2%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
const Icon = styled.img`
    width: 2.3rem;
    margin-right: 2%;
`
const Header = styled.header`
    font-size: 3.6rem;
    font-weight: bold;
`
const Span = styled.span`
    font-size: 1.6rem;
`
const P = styled.p`
    font-size: 1.6rem;
`
const ContactDiv = styled.div`
    display: flex;
    align-items: center;
`
const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    width: 700px;
    height: 45px;
    
    @media screen and (max-width: 900px){
        width: 90vw;
    }
`
const InputTitle = styled.span`
    font-size: 1.6rem;
`
const Button = styled.input`
  color: white;
  background-color: black;
  border: none;
  padding: 2% 1% 2% 1%;
  width: 100px;

  cursor: pointer;
  @media screen and (max-width: 530px) {
    width: 91.6vw;
    margin-left: 0;
    height: 45px;
  }
`;
const handleClick = () =>{
    alert("Wiadomość nie została wysłana. Jest to tylko strona pokazowa. Po więcej informacji zobacz zakładke informacje prawne lub skontaktuj się ze mną przez e-mail: gracjan.zalewski55@gmail.com" )
}
const ContactUs = () =>{

    return(
        <Wrapper>
            <div style={{margin: "5% 2%"}}>
                <Header>Skontaktuj się z nami</Header>
                <P>Masz jakieś pytania? Chętnie na nie odpowiemy.</P>
                <div>
                    <ContactDiv>
                        <Icon src={email} alt="" /> <Span>info@lingvoo.com</Span>
                    </ContactDiv>
                    <ContactDiv>
                        <Icon src={phone} alt="" /> <Span>+48 000 000 000</Span>
                    </ContactDiv>
                    <ContactDiv>
                        <Icon src={pin} alt="" /> <Span>ul. Słoneczna 3, 00-001 Warszawa</Span>
                    </ContactDiv>
                </div>
            </div>
            <div>
                <form action="">
                    <InputDiv>
                        <InputTitle>Imię</InputTitle>
                        <Input required type="text" />
                    </InputDiv>
                    <InputDiv>
                        <InputTitle>E-mail</InputTitle>
                        <Input required type="email" />
                    </InputDiv>
                    <InputDiv>
                        <InputTitle>Wiadomość</InputTitle>
                        <textarea required style={{resize: "none"}} name="" id="" cols="30" rows="10"></textarea>
                    </InputDiv>
                    <div><input required style={{margin: "1.5% 0"}} type="checkbox" name="checkbox" id="checkbox" /> <InputTitle><label htmlFor="checkbox">Akceptuje regulamin*</label></InputTitle></div>
                    <Button type="submit" value="Wyślij" onClick={handleClick} />
                </form>
            </div>
        </Wrapper>
    )
}

export default ContactUs;