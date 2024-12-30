
import styled from "styled-components";

const Wrapper = styled.section`
 display: flex;
 justify-content: space-between;
 width: 80vw;
 margin: 2% auto;
 @media screen and (max-width: 1220px){
    flex-direction: column;
    margin: 10% auto;
 }
`
const Header = styled.header`
    font-size: 3.6rem;
    font-weight: bold;
    @media screen and (max-width: 1220px){
    text-align: center;
    
 }
`
const SmallHeader = styled.span`
    font-size: 2.4rem;
    font-weight: bold;
    @media screen and (max-width: 1220px){
    text-align: center;
    
 }
`
const Text = styled.span`
    font-size: 1.6rem;
    width: 130%;
    @media screen and (max-width: 1220px){
    text-align: center;
    width: 100%;
 }
`
const P = styled.p`
    font-size: 1.6rem;
    @media screen and (max-width: 1220px){
    text-align: center;
    
 }
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    
`
const TextWrapper = styled.div`
    margin-left: 20%;
    @media screen and (max-width: 1220px){
        margin-left: 0;
    }
`
const IframeDiv = styled.div`
@media screen and (max-width: 1220px){
    text-align: center;
    
 }
`
const Iframe = styled.iframe`

    width: 600px;
    height: 450px;

    @media screen and (max-width: 900px){
        width: 80vw;
        height: 80vw;
        margin: auto;
        margin-top: 5%;
    }
`
const Location = () =>{
    
    return(
        <Wrapper>
            <div >
                <div>
                    <Header>Lokalizacje</Header>
                    <P>Znajdziesz nas w tych miejscach</P>
                </div>
                <TextWrapper >
                    <Div>
                        <SmallHeader>Warszawa</SmallHeader>
                        <Text>ul. Słoneczna 3, 00-001 Warszawa</Text>
                    </Div>
                    <Div>
                        <SmallHeader>NYC</SmallHeader>
                        <Text>123 Sample St, New York NY 10000 USA</Text>
                    </Div>
                </TextWrapper>
            </div>
            <IframeDiv><Iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d10922819.118841141!2d-8.89887459396634!3d48.05805487733189!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1714334538214!5m2!1spl!2spl"  style={{border: '0'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe></IframeDiv>
        </Wrapper>
    )
}

export default Location;