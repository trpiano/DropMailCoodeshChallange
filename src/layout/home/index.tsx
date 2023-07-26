import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { Button } from "@mui/material";

import { RxCopy } from "react-icons/rx";
import { MdRefresh } from "react-icons/md";

import Header from "../../components/Header";
import Inbox from "../../components/Inbox";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { sessionType } from "../../constants/session";

import { GENERATE_SESSION, GET_EMAILS } from "../../apollo/query";
import { Mail } from "../../constants/email";

import {
  Container,
  ContentContainer,
  EmailContainer,
  RefreshContainer,
} from "./styles";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast } from "react-toastify";

export function HomeLayout() {
  const [session, setSession] = useLocalStorage<sessionType | undefined>(
    "session",
    undefined
  );

  const [
    generateSession,
    { loading }
  ] = useMutation(GENERATE_SESSION);
  const { refetch: getEmails } = useQuery<Mail>(GET_EMAILS);

  const generateEmail = async () => {
    const { data } = await generateSession();
    let { id, expiresAt, addresses } = data.introduceSession;
    let address = addresses[0].address;
    let formattedSession = {
      id,
      expiresAt,
      address,
    };
    setSession(formattedSession);
  };

  //Estados responsáveis pelo refresh do email
  const [counter, setCounter] = useState(15);
  function refreshEmails() {
    getEmails({ sessionId: session?.id }).then(() => setCounter(15));
  }

  function copyEmailToClipboard() {
    session && navigator.clipboard.writeText(session.address);
    toast.info("Email copied to clipboard!")
  }

  //Effect responsável pelo contador do refresh
  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (counter <= 0) {
        refreshEmails();
        setCounter(15);
      } else {
        setCounter(counter - 1);
      }
    }, 1000);
    return () => clearTimeout(intervalId);
  }, [counter]);

  useEffect(() => {
    if (session && new Date(session.expiresAt) < new Date()) {
      localStorage.removeItem("session");
      generateEmail();
    }
    if (session === undefined) {
      generateEmail();
    }
  }, [session]);

  function renderCounter(){
    return <div>{counter}</div>;
  };

  return (
    <Container>
      <Header />
      <ContentContainer>
        <EmailContainer>
          <span>Your temporary email address</span>
          <div>
            <input type="text" defaultValue={loading ? "Loading..." : session?.address} readOnly />
            <Button startIcon={<RxCopy />} onClick={copyEmailToClipboard}>
              Copy
            </Button>
          </div>
        </EmailContainer>
        <RefreshContainer>
          <div>
            <p>Autorefresh in</p>
            <CountdownCircleTimer
              isPlaying
              duration={15}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[10, 6, 3, 0]}
              onComplete={() => {
                refreshEmails();
                return { shouldRepeat: true, delay: 1 };
              }}
              size={30}
              strokeWidth={2}
            >
              {renderCounter}
            </CountdownCircleTimer>
          </div>
          <Button startIcon={<MdRefresh />} onClick={() => refreshEmails()}>
            Refresh
          </Button>
        </RefreshContainer>
        <Inbox session={session} setSession={setSession} />
      </ContentContainer>
    </Container>
  );
}
