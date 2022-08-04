import styled from "styled-components";
import { LoginButton, LoginTitle } from "../login/loginElements";
import { css } from "styled-components";
export const DisscussionContainer = styled.div`
  margin-top: 1%;
  @media (max-width: 720px) {
    margin-top: 5%;
  }
`;
export const DisscussionTitle = styled(LoginTitle)``;

export const DisscussionWrapper = styled.div`
  margin-top: 1%;
  @media (max-width: 720px) {
    margin-top: 3%;
  }
`;
export const RoomWrapper = styled.div`
  height: 80vh;
  width: 92vw;
  margin: 0 auto;
  background: var(--darkest-grey);
  position: relative;
  box-shadow: 0 0 5px black;
  @media (max-width: 720px) {
    height: 75vh;
  }
`;
export const UserImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  @media (max-width: 720px) {
    width: 1.75rem;
    height: 1.75rem;
  }
`;
export const DisscussionArea = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: auto;
  padding: 1rem;
  @media (max-width: 720px) {
    padding: 0.5rem 0.7rem;
  }
`;
export const MessageBody = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1%;
  ${(props) => {
    switch (props.sender) {
      case "sent":
        return css`
          margin-left: auto;
      
          flex-direction: row-reverse;
        `;
      case "received":
        return css`
      
        `;
    }
  }}
  @media (max-width: 720px) {
    margin-top: 3%;
    gap: 0.5rem;
  }
`;
export const MessageTextBody = styled.div`
  background: var(--blue);
  padding: 0.75rem;
  border-radius: 20px;
  @media (max-width: 720px) {
    padding: 0.35rem 0.5rem;
    border-radius: 10px;
  }
`;
export const MessageText = styled.p`
  font-family: "Roboto Slab";
  font-size: 1rem;
  line-height: 1.6;
  @media (max-width: 720px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

export const End = styled.span``;

export const MessageForm = styled.form`
  width: 100%;
  background: var(--light-grey);
  display: flex;
  align-items: stretch;
  position: absolute;
  bottom: 0;
`;

export const MessageArea = styled.textarea`
  resize: none;
  padding: 0.5rem 1rem;
  flex: 1;
  background: var(--light-grey);
  color: var(--text-grey);
  font-family: "Roboto Slab";
  letter-spacing: 1px;
  &:focus {
    outline: none;
  }
  @media (max-width: 720px) {
    padding: 0.25rem 0.5rem;
  }
`;
export const SubmitIcon = styled(UserImage)`
  border-radius: 0;
  width: 1rem;
  height: 1rem;
`;
export const SubmitButton = styled(LoginButton)`
  padding: 0.25rem 2rem;
  margin-left: auto;
  cursor: pointer;
`;
