import styled from "styled-components";
import {Button} from "../../../components/Button.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";


export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <Form>
                <Label htmlFor="name">Name</Label>
                <Field id="name" placeholder="Value"></Field>
                <Label htmlFor="email">Email</Label>
                <Field id="email" placeholder=""></Field>
                <Label htmlFor="message">Message</Label>
                <Field id="message" as="textarea"></Field>
                <Button type="submit">Submit</Button>
            </Form>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #e2fa90;
    min-height: 50vh;
`
const Form = styled.form`
    max-width: 532px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`
    width: 100%;
`
const Label = styled.label`
`

