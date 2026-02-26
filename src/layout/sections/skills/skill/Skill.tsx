import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    title: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
            <SkillTitle>{props.title}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    text-align: center;

    &:nth-child(11) {
        grid-column: 2;
    }

    &:nth-child(12) {
        grid-column: 3;
    }

    &:nth-child(13) {
        grid-column: 4;
    }
`

const SkillTitle = styled.h3`
`
