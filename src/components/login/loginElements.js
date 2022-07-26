import styled from "styled-components";
// import Soldier from '../../assets/group.png'
import { FooterTitle } from "../footer/footerelements";

export const LoginTitle = styled(FooterTitle)`
    font: 2rem 'Roboto Slab' ;
    margin: 2% 0 0 3%;
    @media (max-width: 720px) {
    font-size: 1rem;
    margin-top: 5%;
  }
`
// export const LoginBody = styled.div`
//     background-image: url(${Soldier});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-origin: content-box;
//     background-position: top center;
//     height: 75vh;
// `

// export const LoginDisplay = styled.div`
//     margin: 3% auto;
//     overflow: hidden;
//     display: flex;
//     justify-content: space-between;
//     gap: 5rem;
//     width: 22rem;
//     border: 1px solid wheat;
// `

// export const Container = styled.div`
//     border: 1px solid white;
// `
export const DisplayImage = styled.img`
    width: 60%;
`


export const LoginBody = styled.div`
margin-top: 1.5%;
    width: 99vw;
    /* border: 1px solid white; */
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
    @media (max-width: 720px) {
    flex-direction: column;
  }
    `
export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    padding: 1rem;
    background: var(--light-grey);
    width: 20rem;
    margin: 10% auto;
    background: rgba( 170, 170, 170, 0.1 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export const Container = styled.div`
    min-width: 50%;
`
export const LoginHeader = styled(FooterTitle)`
    font: 2rem 'frostbite';
    margin: 0 auto;
`



export const Label = styled.label`
    color: var(--white);
    font: 1.25rem 'Roboto Slab';

`

export const InputFields = styled.input`
    width: 90%;
    margin: 3% auto;
    padding: 0.3rem 0.5rem;
`

export const LoginButton = styled.button`
    background: var(--white);
    font: 1rem 'Roboto Slab';
    font-weight: 600;
    outline: none;
    padding: 0.3rem 0.7rem;
    color: var(--black);
    margin-top: 3%;
`