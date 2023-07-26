import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Divider } from "@mui/material";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import { sessionType } from "../../constants/session";
import { Mail, mailData } from "../../constants/email";

import { GET_EMAILS } from "../../apollo/query";

import { showNotification } from "../../utils/showNotification";

import {
  Container,
  InboxMessagesContainer,
  Message,
  MessageContent,
  MessagesList,
} from "./styles";


export default function Inbox() {
  const [selectEmailToRead, setSelectEmailToRead] = useState<mailData>({
    rawSize: 100,
    fromAddr: "",
    toAddr: "",
    downloadUrl: "",
    text: "",
    headerSubject: "",
  });
  const [session, setSession] = useLocalStorage<sessionType | undefined>(
    "session",
    undefined
  );
  const id = session?.id;
  const { data: emails, previousData } = useQuery<Mail>(GET_EMAILS, {
    variables: { sessionId: id },
  });

  function handleSelectEmailToRead(index: number) {
    setSelectEmailToRead(emails?.session.mails[index]!);
  }

  useEffect(() => {
    if (session && emails && emails.session) {
      setSession(old => {
        if (old) {
          const newSession = { ...old, expiresAt: emails.session.expiresAt };
          return newSession;
        }
      });
      if (
        previousData &&
        JSON.stringify(previousData.session.mails) !==
          JSON.stringify(emails.session.mails)
      ) {
        //TODO showNotification(title: "Novo email", )
        new Notification("Novo email", {
          body: "Você tem um novo email no seu inbox!"
        });
      }
    }
  }, [emails]);

  console.log(emails?.session.mails)

  return (
    <>
      <Container>
        <InboxMessagesContainer>
          <p>Inbox</p>
          <MessagesList>
            {emails &&
              emails.session.mails.map(
                ({ fromAddr, text, headerSubject }, index) => (
                  <Message
                    key={index}
                    onClick={() => handleSelectEmailToRead(index)}
                  >
                    <h4>{fromAddr}</h4>
                    <span>{text}</span>
                    <p>{headerSubject}</p>
                  </Message>
                )
              )}
          </MessagesList>
        </InboxMessagesContainer>
        <MessageContent>
          <div>
            <p>{selectEmailToRead?.fromAddr}</p>
            <Divider />
            <h3>{selectEmailToRead.headerSubject}</h3>
          </div>
          <p>{selectEmailToRead.text}</p>
        </MessageContent>
      </Container>
    </>
  );
}
