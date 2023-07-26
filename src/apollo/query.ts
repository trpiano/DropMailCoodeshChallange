import { gql } from "@apollo/client"

export const GENERATE_SESSION = gql`
  mutation {
    introduceSession {
      id
      expiresAt
      addresses {
        address
      }
    }
  }
`;

export const VERIFY_SESSION = gql`
  query VerifySession($sessionId: ID!) {
    session(id: $id) {
      expiresAt
      addresses {
        address
      }
      mails {
        rawSize
        fromAddr
        toAddr
        downloadUrl
        text
        headerSubject
      }
    }
  }
`;

export const GET_EMAILS = gql`
  query Email($sessionId: ID!) {
    session(id: $sessionId) {
      mails {
        rawSize
        fromAddr
        toAddr
        downloadUrl
        text
        headerSubject
      }
    }
  }
`;
