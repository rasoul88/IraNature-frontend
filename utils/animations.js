import { keyframes } from "styled-components";

export const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }

    80% {
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const moveInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }

    80% {
        transform: translateX(-1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(3rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Shake = keyframes`
    0% {
        transform: translateX(-.3rem);
    }

    100% {
        transform: translateX(.3rem);
    }
`;

export const pageInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(200%);
    }

    80% {
        transform: translateX(-10rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;
