import styled from "styled-components";

export const HeaderBody = styled.div`
    padding: 0.5rem 1rem;
    background: var(--darkest-grey);
    box-shadow: 0 .125rem .25rem rgba(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
`

export const Title = styled.h1`
    font: 3rem 'playguard';
    margin-left: 3%;
    color: var(--white);
`
export const UserContainer = styled.div`
    display: flex;
`
export const NavLink = styled.p`
    color: var(--blue);
    padding: 0.5rem 1rem;
    font: 1.5rem 'frostbite';
    letter-spacing: 2px;
`