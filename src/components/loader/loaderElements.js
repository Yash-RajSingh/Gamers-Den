import styled from "styled-components";

export const LoaderBody = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 15;
    position: fixed;
    background: black;
`
export const LoaderWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 40%;
    @media (max-width: 720px) {
    left: 20%;
  }
`