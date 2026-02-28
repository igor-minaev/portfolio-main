import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" alignItems="center">
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="gmail" width="38" height="38" viewBox="0 0 38 38"/>
                            <SocialTitle>gmail</SocialTitle>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="linkedin" width="38" height="38" viewBox="0 0 38 38"/>
                            <SocialTitle>linkedin</SocialTitle>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId="github" width="38" height="38" viewBox="0 0 38 38"/>
                            <SocialTitle>GITHUB</SocialTitle>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>WEB DEVELOPER 2026</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #f3f18b;
    min-height: 30vh;

`
const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 73px;

`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SocialTitle = styled.span`

`
const Copyright = styled.small`

`

