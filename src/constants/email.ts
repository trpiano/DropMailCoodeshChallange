export type Mail = {
    session: {
      expiresAt: string;
      mails: mailData[];
    };
  };
  
  export type mailData = {
    rawSize: number;
    fromAddr: string;
    toAddr: string;
    downloadUrl: string;
    text: string;
    headerSubject: string;
  };
  