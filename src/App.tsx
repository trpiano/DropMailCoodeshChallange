import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { ToastContainer } from 'react-toastify';

import { HomeLayout } from './layout/home'

import GlobalStyles from "./styles/global";

function App() {
  const urlAPI = import.meta.env.VITE_DROPMAIL_API_URL;

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
