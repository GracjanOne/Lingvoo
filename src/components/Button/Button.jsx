import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)``;
class Button extends React.Component {
  render() {
    const {
      white,
      transparent,
      black,
      fontWhite,
      biggerFont,
      small,
      responsive,
      link,
      click,
      handler,
      children,
    } = this.props;

    const Button = styled.button`
      border: ${fontWhite
        ? "1px solid white"
        : transparent
        ? "1px solid black"
        : white
        ? "1px solid white"
        : "none"};
      color: ${fontWhite ? "white" : "black"};
      background-color: ${white ? "#fff" : black ? "#000" : "transparent"};
      font-size: ${biggerFont ? "2rem" : "1.6rem"};
      width: ${small ? "16rem" : "23.5rem"};
      height: 4.5rem;
      cursor: pointer;
      @media screen and (max-width: 900px) {
        width: ${responsive ? "90vw" : ""};
        margin-top: ${responsive ? "2%" : ""};
      }
    `;
    return (
        <>
          {click ? (
            <Button onClick={handler} aria-label={children || "button"}>{children}</Button>
          ) : (
            <StyledLink to={link}>
              <Button aria-label={children || "link button"}>{children}</Button>
            </StyledLink>
          )}
        </>
      );
      
  }
}
Button.propTypes = {
  white: PropTypes.bool,
  transparent: PropTypes.bool,
  black: PropTypes.bool,
  fontWhite: PropTypes.bool,
  biggerFont: PropTypes.bool,
  small: PropTypes.bool,
  responsive: PropTypes.bool,
  click: PropTypes.bool,
  handler: PropTypes.func,
  link: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Button;
