import styled from "styled-components";

export const GameDataBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* border: 2px solid white; */
    width: 92%;
    margin: 0 auto;
`
export const GameCard = styled.div`
    width: 18rem;
    margin-top: 5%;
    background: var(--light-grey);
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`

export const GameThumbnail = styled.img`
    width: 100%;
    border-radius: 0.25rem;
    /* height: 13rem; */
`

export const GameData = styled.div`
    width: 100%;
    padding: 0.5rem;
`

export const GameTitle = styled.p`
    color: var(--text-grey);
    overflow: hidden;
    height: 1.8rem;
    margin-top: 1%;
    font: 1.5rem 'aznLight';
    font-weight: 0;
`
export const GameDescription = styled.p`
    color: var(--text-grey); 
    /* border: 1px solid white; */
    height: 5rem;
    font: 0.8rem 'cVector';
    letter-spacing: 1px;
    margin-top: 3%;
`

export const SubGameData = styled.div`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* border: 2px solid pink; */
`
export const GamePlatform = styled.span`
    color: var(--text-grey);
    background: var(--dark-grey);
    border: 1px solid var(--grey);
    border-radius: 0.3rem;
    font: 0.8rem 'Roboto Slab';
    padding: 0.3rem 0.7rem;
`
export const GameGenre = styled(GamePlatform)`

`