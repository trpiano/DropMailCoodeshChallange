import { Dispatch, useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";

import {
  MdMarkunreadMailbox,
  MdOutlineNotificationsActive,
} from "react-icons/md";

import { ButtonStyles, Container, TitleContainer } from "./styles";
import { toast } from "react-toastify";

function requestNotificationPermission(
  setIsRequiringPermission: Dispatch<React.SetStateAction<boolean>>
) {
  setIsRequiringPermission(true);
  window.Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Notification accept");
        toast.success("Notifications enabled successfully!");
      } else {
        toast.error("Notifications not enabled, please try again!");
      }
    })
    .catch((error) => {
      console.error("Error requesting notification permission:", error);
      toast.error("An error occurred while requesting notification permission.");
    })
    .finally(() => {
      setIsRequiringPermission(false);
    });
}

export default function Header() {
  const [isRequiringPermission, setIsRequiringPermission] = useState(false);

  function handleActiveNotification() {
    if (window.Notification.permission !== "granted") {
      requestNotificationPermission(setIsRequiringPermission);
    }
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
        onClick={handleActiveNotification}
        loading={isRequiringPermission}
      >
        <MdOutlineNotificationsActive />
        <span className="buttonText">Enable Notifications</span>
      </LoadingButton>
    </Container>
  );
}
