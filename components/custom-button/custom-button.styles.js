import styled, {css} from "styled-components";
import { moveInBottom } from "../../utils/animations";

const getColorStyle = css `
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    
    &::after {
        background-color: ${props => props.backgroundColor};
    }
`;

const moveInBottomAnimation = css `
    animation: ${moveInBottom} 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
`;

const getanimationStyle = (props) => {
    if(props.animation === "moveInBottom") {
    return moveInBottomAnimation;
    }
}

export const Button = styled.a`
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1.6rem;
        /* change for the <button> element */
        border:none;
        cursor: pointer;
        backface-visibility: hidden; 

        
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }
    
    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.2);
    
    }

    ${getColorStyle}
    
    &::after{
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    ${getanimationStyle}

    &::selection {
        background-color: transparent;
    }
`;