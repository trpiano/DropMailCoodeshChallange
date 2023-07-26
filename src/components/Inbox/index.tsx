import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Divider, Skeleton } from "@mui/material";

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

interface inboxProps {
  session: sessionType | undefined;
  setSession: Dispatch<SetStateAction<sessionType | undefined>>;
}

function renderSkeletonRows(numRows: number, height: number) {
  const skeletonRows = [];
  for (let i = 0; i < numRows; i++) {
    skeletonRows.push(
      <Skeleton
        key={i}
        sx={{ bgcolor: "#666666", margin: "0 0 0.25rem 0" }}
        animation="wave"
        variant="rounded"
        height={height}
      />
    );
  }
  return skeletonRows;
}

export default function Inbox({ session, setSession }: inboxProps) {
  const [selectEmailToRead, setSelectEmailToRead] = useState<mailData | null>(
    null
  );

  const {
    data: emails,
    previousData,
    loading,
  } = useQuery<Mail>(GET_EMAILS, {
    variables: { sessionId: session?.id },
  });

  function handleSelectEmailToRead(index: number) {
    setSelectEmailToRead(emails?.session.mails[index]!);
  }

  useEffect(() => {
    if (session && emails && emails.session) {
      setSession((prevSession) => {
        if (prevSession) {
          return { ...prevSession, expiresAt: emails.session.expiresAt };
        }
        return prevSession;
      });

      if (
        previousData &&
        JSON.stringify(previousData.session.mails) !==
          JSON.stringify(emails.session.mails)
      ) {
        showNotification("Novo email", "Você tem um novo email no seu inbox!");
      }
    }
  }, [emails]);

  return (
    <>
      <Container>
        <InboxMessagesContainer>
          <p>Inbox</p>
          <MessagesList>
            {loading ? renderSkeletonRows(5, 70) : (
              emails &&
              emails.session.mails.map(
                ({ fromAddr, text, headerSubject }, index) => (
                  <Message
                    key={index}
                    onClick={() => handleSelectEmailToRead(index)}
                  >
                    <h4>{fromAddr}</h4>
                    <span>{headerSubject}</span>
                    <p>{text}</p>
                  </Message>
                )
              )
            )}
          </MessagesList>
        </InboxMessagesContainer>
        <MessageContent>
          <div>
            <p>{selectEmailToRead?.fromAddr}</p>
            <Divider />
            <h3>{selectEmailToRead?.headerSubject}</h3>
          </div>
          <p>{selectEmailToRead?.text}</p>
        </MessageContent>
      </Container>
    </>
  );
}
