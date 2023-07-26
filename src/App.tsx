import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { ToastContainer } from 'react-toastify';

import { HomeLayout } from './layout/home'

import GlobalStyles from "./styles/global";

function App() {
  // const urlAPI = import.meta.env.DROPMAIL_API_URL;

  const urlAPI = `https://cors-anywhere.herokuapp.com/https://dropmail.me/api/graphql/12345asdasd12`

  const client = new ApolloClient({
    uri: urlAPI,
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
      <HomeLayout />
    </ApolloProvider>
  )
}

export default App
