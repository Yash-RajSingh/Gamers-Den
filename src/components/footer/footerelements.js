import styled from "styled-components";
import { Title } from "../header/headerElements";

export const FooterBody = styled.div`
    margin-top: 5%;
    /* border: 2px solid white; */
`

export const FooterWrapper = styled.div`
    display: flex;
`

export const FooterTitle = styled(Title)`
    font: 2rem 'aznLight';
    font-weight: 0;
    margin-left: 2%;
`

export const FooterDescription = styled.p`
    color: var(--text-grey);
    width: 40%;
    font: 1rem 'cVector';
    letter-spacing: 1px;
    margin: 1.5% 0 1% 2%;
`

export const Copyright = styled.span`
    font: 0.7rem 'cVector';
    color: var(--white);
    letter-spacing: 2px;
    margin-left: 2%;
`