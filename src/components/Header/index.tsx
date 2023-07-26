import { useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";

import {
  MdMarkunreadMailbox,
  MdOutlineNotificationsActive,
} from "react-icons/md";

import { ButtonStyles, Container, TitleContainer } from "./styles";
import { toast } from "react-toastify";

export default function Header() {
  const [isRequiringPermission, setIsRequiringPermission] = useState(false);

  function handleActiveNotification() {
    if (window.Notification.permission !== "granted")
      setIsRequiringPermission(true);
    window.Notification.requestPermission((permission) => {
      if (permission === "granted") {
        console.log("Notification accept");
        toast.success("Notificações habilitadas com sucesso!");
        setIsRequiringPermission(false);
      } else
        toast.error("Notificações não habilitadas, tente novamente!"),
          setIsRequiringPermission(false);
    });
  }

  return (
    <Container>
      <TitleContainer>
        <MdMarkunreadMailbox />
        <h1>DropMail</h1>
      </TitleContainer>
      <LoadingButton
        style={ButtonStyles}
        variant="outlined"
        size="medium"
        startIcon={<MdOutlineNotificationsActive />}
        onClick={handleActiveNotification}
        loading={isRequiringPermission}
        loadingPosition="start"
      >
        Receber Notificações
      </LoadingButton>
    </Container>
  );
}
