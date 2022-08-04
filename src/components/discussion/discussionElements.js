import styled from "styled-components";
import { LoginButton, LoginTitle } from "../login/loginElements";
import { css } from "styled-components";
export const DisscussionContainer = styled.div`
  margin-top: 1%;
`;
export const DisscussionTitle = styled(LoginTitle)``;

export const DisscussionWrapper = styled.div`
  margin-top: 1%;
`;
export const RoomWrapper = styled.div`
  height: 80vh;
  width: 92vw;
  margin: 0 auto;
  background: var(--darkest-grey);
  position: relative;
  box-shadow: 0 0 5px black;
`;
export const UserImage = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
`;
export const DisscussionArea = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: auto;
  padding: 1rem;
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
`;
export const MessageTextBody = styled.div`

  background: var(--blue);
  padding: 0.75rem;
  border-radius: 20px;
`;
export const MessageText = styled.p`
  font-family: "Roboto Slab";
  font-size: 1rem;
  line-height: 1.6;
`;

export const MessageTime = styled.span`
  float: right;
  font-size: 0.6rem;
  padding-left: 2.5rem;
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
`;
export const SubmitIcon = styled(UserImage)`
  border-radius: 0;
  width: 2rem;
  height: 2rem;
`;
export const SubmitButton = styled(LoginButton)`
  padding: 1rem 2.5rem;
  margin-left: auto;
  cursor: pointer;
`;
