import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

const skillsData = [
    {
        id: crypto.randomUUID(),
        iconId: "js",
        title: "JAVASCRIPT",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "typescript",
        title: "typescript",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "mongo",
        title: "mongo db",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "postgrest",
        title: "PostgreSQL",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "jest",
        title: "Jest",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "express",
        title: "Express JS",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "nest",
        title: "Nest JS",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "docker",
        title: "Docker",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "react",
        title: "react js",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "native",
        title: "react nactive",
        width: "120",
        height: "106",
        viewBox: "0 0 120 106"
    },
    {
        id: crypto.randomUUID(),
        iconId: "styled",
        title: "Styled Components",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "redux",
        title: "Redux",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    },
    {
        id: crypto.randomUUID(),
        iconId: "git",
        title: "git",
        width: "120",
        height: "120",
        viewBox: "0 0 120 120"
    }
]

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <GridWrapper>
                {skillsData.map(s => (
                    <Skill key={s.id} iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox} title={s.title}/>
                ))}
            </GridWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
`

