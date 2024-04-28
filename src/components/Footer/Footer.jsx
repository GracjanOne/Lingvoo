import styled from "styled-components";

const Header = styled.h4`
    font-size: 2.6rem;
    text-align: center;
    margin-bottom: 1%;
`
const FooterSection = styled.footer`
    margin-top: 2.5%;
   
`
const Line = styled.div`
    background-color: #000;
    width: 90vw;
    height: 1px;
    margin: auto;
`
const Center = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 1% auto;
    flex-wrap: wrap;
    @media screen and (max-width: 700px){
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`
const A = styled.a`
    color: black;
    font-size: 1.6rem;
`
const Footer = () =>{
    return(
        <FooterSection>
            <Header>Lingvoo</Header>
            <Line></Line>
            <Center>
                <span style={{fontSize: "1.6rem"}}>Lingvoo &copy;</span>
                <A href="">Design & Development</A>
                <A href="">Źródła zdjęć</A>
                <A href="">Regulamin</A>
            </Center>
        </FooterSection>
    )
}

export default Footer;