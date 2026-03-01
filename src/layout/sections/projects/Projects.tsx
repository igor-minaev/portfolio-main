import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import project from "../../../assets/images/project.webp"

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper justify="space-between" wrap="wrap" gap="20px">
                <Project imageSrc={project} title="TITLE PROJECT" technologies={["Javascript", "PostgreSQL", "React", "redux"]} description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                <Project imageSrc={project} title="I N S I G H T G R A M" technologies={["Javascript", "React Native", "redux"]} description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                <Project imageSrc={project} title="TITLE PROJECT" technologies={["Javascript", "PostgreSQL", "React", "redux"]} description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                <Project imageSrc={project} title="I N S I G H T G R A M" technologies={["Javascript", "React Native", "redux"]} description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>

            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 70vh;
`
