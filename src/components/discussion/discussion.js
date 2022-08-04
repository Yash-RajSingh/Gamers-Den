import "firebase/firestore";
import {
  DisscussionArea,
  DisscussionContainer,
  DisscussionTitle,
  DisscussionWrapper,
  End,
  MessageArea,
  MessageBody,
  MessageForm,
  MessageText,
  MessageTextBody,
  MessageTime,
  RoomWrapper,
  SubmitButton,
  SubmitIcon,
  UserImage,
} from "./discussionElements";
import { auth, db } from "../../firebase";
import {
  collection,
  orderBy,
  query,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Profile from "../../assets/profile.png";
import Send from "../../assets/send.png";
import { useRef } from "react";

const ChatMessage = (data) => {
  const uuid = sessionStorage.getItem('uuid')
  const Sender = data.data.uid === uuid ? "sent" : "received";
  return (
    <>
      <MessageBody id={data.data.uid} sender={Sender}>
        <UserImage src={data.data.photoURL || Profile} alt="User Image"/>
        <MessageTextBody>
          <MessageText>{data.data.message}</MessageText>
        </MessageTextBody>
      </MessageBody>
    </>
  );
};

const Disscussion = () => {
  const MessageAreaRef = useRef();
  const EndRef = useRef();
  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt"));
  const [messages] = useCollectionData(q, { idField: "id" });
  const sendMessage = async () => {
    await addDoc(messageRef, {
      createdAt: serverTimestamp(),
      message: MessageAreaRef.current.value,
      photoURL: auth.currentUser.photoURL,
      uid: auth.currentUser.uid,
      displayName: auth.currentUser.displayName
    });
    MessageAreaRef.current.value = "";
    EndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <DisscussionContainer>
        <DisscussionTitle>
          Dive in with community discussions with your fellow gamers.
        </DisscussionTitle>
        <DisscussionWrapper>
          <RoomWrapper>
            <DisscussionArea>
              {messages &&
                messages.map((current, index) => {
                  return (
                    <>
                      <ChatMessage data={current} />
                    </>
                  );
                })}
              <End ref={EndRef}></End>
            </DisscussionArea>
            <MessageForm>
              <MessageArea ref={MessageAreaRef} />
              <SubmitButton
                onClick={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                <SubmitIcon src={Send} />
              </SubmitButton>
            </MessageForm>
          </RoomWrapper>
        </DisscussionWrapper>
      </DisscussionContainer>
    </>
  );
};

export default Disscussion;
