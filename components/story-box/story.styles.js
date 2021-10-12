import styled from 'styled-components';

export const TextContainer = styled.div `
    transform: skewX(12deg);
    text-align: right;

    @media only screen and (max-width: 37.5em) {
        transform: skewX(0);
    }
`;

export const ImageContainer = styled.img `
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    backface-visibility: hidden;
    transition: all .5s;

`;

export const CaptionContainer = styled.figcaption `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,20%);
    color: white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    backface-visibility: hidden;

    @media only screen and (max-width: 37.5em) {
        transform: translate(-50%,-50%);
        opacity: 1;
    }
`;

export const ShapeContainer = styled.figure `
    width: 15rem;
    height: 15rem;
    float: right;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);
    position: relative;

    @media only screen and (max-width: 56.25em) {
        margin-right: -2rem;
    }
    @media only screen and (max-width: 37.5em) {
        transform: translateX(-3rem) skewX(0);
        order: -1;
        margin-top: -9.3rem;
    }
`;

export const StoryContainer = styled.div `
    display: flex;
    width: 75%;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba($color: #000000, $alpha: .1);
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 3px;
    padding: 3rem;
    font-size: 1.6rem;
    transform: skewX(-12deg);
    margin-bottom: 10rem;
    backface-visibility: hidden;


    &:hover ${CaptionContainer} {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &:hover ${ImageContainer} {
        transform: translateX(-4rem) scale(1);
        filter: blur(3px) brightness(80%);
    }

    @media only screen and (max-width: 56.25em) {
        width: 90%;
        padding: 2rem;
    }
    
    @media only screen and (max-width: 37.5em) {
        transform: skewX(0);
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (min-width: 1200px) {
        width: 70%;
        padding: 5rem;
    }
`;