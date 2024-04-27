import React from "react";
import PropTypes from 'prop-types'
import styled from "styled-components";
class Button extends React.Component{
    render(){
        const{
            white,
            transparent,
            black,
            fontWhite,
            biggerFont,
            children,
        } = this.props

        const Button = styled.button`
            border: ${ fontWhite ? "1px solid white" : transparent ? "1px solid black"  : white? "1px solid white" : "none"};
            color:  ${fontWhite ? "white" : "black"};
            background-color: ${white ? "#fff" : black ? "#000" : "transparent"};
            font-size: ${biggerFont ? "2rem" : "1.6rem"};
            width: 23.5rem;
            height: 4.5rem;
            cursor: pointer;
        `
        return(
            <>
                <Button>{children}</Button>
            </>
        )
    }
}
Button.propTypes={
    white:PropTypes.bool,
    transparent:PropTypes.bool,
    black: PropTypes.bool,
    fontWhite: PropTypes.bool,
    biggerFont: PropTypes.bool,
    children: PropTypes.node.isRequired,
}
export default Button;