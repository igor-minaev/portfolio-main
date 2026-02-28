import styled from "styled-components";

type ProjectPropsType = {
    imageSrc: string
    title: string
    description: string
    technologies: Array<string>
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.imageSrc} alt="project"/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectTechnologies>
                {props.technologies.map((p, index) => (
                    <ProjectTechnology key={index}>{p}</ProjectTechnology>
                ))}
            </ProjectTechnologies>
            <ProjectDescription>{props.description}</ProjectDescription>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #83edb6;
    width: 520px;
    flex-grow: 1;
`

const Image = styled.img`
    width: 100%;
    height: 388px;
    object-fit: cover;

`

const ProjectTitle = styled.h3`
`

const ProjectDescription = styled.p`
`

const ProjectTechnologies = styled.ul`
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 0;
`

const ProjectTechnology = styled.li`
    background-color: #f8a6e2;
    padding: 5px;
    border-radius: 5px;
    
`
