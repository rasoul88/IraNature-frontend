import React from 'react';
import { StoryContainer,ShapeContainer, ImageContainer, CaptionContainer, TextContainer } from "./story.styles";

const Story = ({name ,image, title, content}) => {
    return(
        <StoryContainer >
            <TextContainer >
                <h3 >{title}</h3>
                <p>{content}</p>
            </TextContainer>
            <ShapeContainer >
                <ImageContainer src={image} alt="person in a tour" />
                <CaptionContainer >{name}</CaptionContainer>
            </ShapeContainer>
        </StoryContainer>
    )
}

export default Story;