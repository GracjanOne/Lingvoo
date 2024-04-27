import { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import "../../index.css"
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: 1,
      visibility: false
    };
  }

  slideIn = keyframes`
    from {
        top: -100vh;
    }
    to {
        top: 0;
    }
  `;

  slideOut = keyframes`
    from {
        top: 0;
    }
    to {
        top: -100vh;
    }
  `;

  handleOpen = () => {
    this.setState(prevState => ({
      menuState: prevState.menuState + 1,
      visibility: true
    }));
  };

  handleClose = () => {
    this.setState(prevState => ({
      menuState: prevState.menuState + 1
    }));
  };

  render() {
    const {
      alignment,
      font,
      bgColor,
      fontColor,
      MobileBgColor,
      borderColor
    } = this.props;

    const { menuState, visibility } = this.state;

    const Li = styled.li`
      padding: 0 3vw;
      list-style: none;
     
      margin-bottom: ${window.innerWidth < 960 ? "20px" : "0"};
      font-size: ${window.innerWidth < 960 ? "1.2rem" : "1.7rem"};
      @media screen and (min-width:900px){
        display: inline;
      }
    `;

    const CloseDiv = styled.div`
      position: absolute;
      top: 4.5%;
      right: 6%;
    `;

    const OpenMenuDiv = styled.div`
      position: relative;
      
    `;

    const openMenuStyles = {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: window.innerWidth > 960 ? "none" : "block"
    };

    const Ul = styled.ul`
      list-style: none;
      display: inline;
      margin: ${alignment === "middle" ? "auto" : 0};
      position: relative;
    `;

    const hamburgerStyles = { fontSize: "2.2rem", color: fontColor };

    const A = styled.span`
    font-size: 2rem;
      color: ${fontColor};
      text-decoration: none;
      font-family: ${font};
      font-weight: 500;
      @media screen and (max-width: 900px) {
        font-size: 1.7rem;
      }
    `;
    const AButton = styled.button`
    border: none;
    background-color: black;
    color: white;
    padding: 10% 20%;  
    font-size: 2rem;
    text-decoration: none;
    font-family: ${font};
    font-weight: 500;
    
    @media screen and (max-width: 900px) {
      display: none;
    }
  `;
    const Navigation = styled.div`
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      padding: 1% 0;
      z-index: 1000000000000000000;
      @media screen and (max-width: 900px){
        width: 100%;
        margin: 0;
      }
    `;

    const StyledNav = styled.nav`
      border-bottom: ${borderColor};
      background-color: ${bgColor};
      position: sticky;
      top: 0;
      width: 100%;
      
      z-index: 1000000000000000000;
    `;

    const Image = styled.h1`
      width: 100px;
      margin: 0;
      color: black;
      font-size: 2.6rem;
      margin-right: ${alignment === "middle" ? "-7rem" : 0};
    `;

    const MenuDiv = styled.div`
      position: absolute;
      width: 100vw;
      height: 100vh;
      background-color: ${MobileBgColor};
      z-index: 1000;
      display: none;
      justify-content: center;
      align-items: center;
      text-align: center;
      transition: 0.5s;
      animation: ${menuState % 2 !== 0 ? this.slideOut : this.slideIn} 0.5s ease;
      top: ${menuState % 2 !== 0 ? "-100vh" : "0"};
      @media screen and (max-width: 900px) {
        display: ${visibility ? "flex" : "none"};
      }
    `;

    return (
      <>
        <StyledNav>
          <MenuDiv id="hamburger-menu-list">
            <div>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/o-produkcie">
                  <A>O produkcie</A>
                </Link>
              </Li>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/zostan-testerem">
                  <A>Zostań testerem</A>
                </Link>
              </Li>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/informacje-prawne">
                  <A>Informacje prawne</A>
                </Link>
              </Li>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/kontakt">
                  <A>Kontakt</A>
                </Link>
              </Li>
            </div>
            <button
              onClick={this.handleClose}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <CloseDiv>
                <FaTimes style={hamburgerStyles} />
              </CloseDiv>
            </button>
          </MenuDiv>
          <Navigation>
            <Link style={{textDecoration: "none"}} to={"/"}>
              <Image>Lingvoo</Image>
            </Link>
            {window.innerWidth > 960 ? (
              alignment === "space-around" ? (
                <>
                   <Li>
                <Link style={{ textDecoration: "none" }} to="/o-produkcie">
                  <A>O produkcie</A>
                </Link>
              </Li>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/zostan-testerem">
                  <A>Zostań testerem</A>
                </Link>
              </Li>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/informacje-prawne">
                  <A>Informacje prawne</A>
                </Link>
              </Li>
              
                </>
              ) : (
                <Ul>
                   <Li>
                <Link style={{ textDecoration: "none" }} to="/o-produkcie">
                  <A>O produkcie</A>
                </Link>
              </Li>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/zostan-testerem">
                  <A>Zostań testerem</A>
                </Link>
              </Li>
              <Li>
                <Link style={{ textDecoration: "none" }} to="/informacje-prawne">
                  <A>Informacje prawne</A>
                </Link>
              </Li>
             
                </Ul>
                
              )
              
            ) : null}
             
                
                  <Link style={{ textDecoration: "none", paddingRight: "3%" }} to="/kontakt">
                    <AButton>Kontakt</AButton>
                  </Link>
              
             
            <button
              onClick={this.handleOpen}
              style={openMenuStyles}
            >
              <OpenMenuDiv>
                <FaBars style={hamburgerStyles} />
              </OpenMenuDiv>
            </button>
          </Navigation>
        </StyledNav>

        <Outlet />
      </>
    );
  }
}

Navbar.propTypes = {
  alignment: PropTypes.oneOf(["right", "middle", "space-around"]),
  font: PropTypes.string,
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  MobileBgColor: PropTypes.string,
  borderColor: PropTypes.string
};

Navbar.defaultProps = {
  font: "sans-serif",
  alignment: "space-around",
  fontColor: "black",
  MobileBgColor: "white",
  borderColor: "1px solid rgba(0, 0, 0, 0.28)"
};

export default Navbar;
