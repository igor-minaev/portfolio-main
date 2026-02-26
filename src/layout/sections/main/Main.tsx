import image from '../../../assets/images/blogging.svg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
           <FlexWrapper justify="space-around" alignItems="center
           ">
               <TextContainer>
                   <SmallText>DEVELOPER</SmallText>
                   <Name>Erica Font</Name>
                   <Description>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                       consequat
                       duis enim velit mollit. Exercitation veniam consequat sunt.</Description>
                   <a href="">Contact Me</a>
               </TextContainer>
               <Photo src={image} alt="blogging"/>
           </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #bfe0f4;
    min-height: 100vh;
`
const TextContainer = styled.div`
    max-width: 514px;
`
const SmallText = styled.span`
`
const Name = styled.h2`
`
const Description = styled.p`
`

const Photo = styled.img`

`
