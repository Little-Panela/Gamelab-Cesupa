import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { Main } from "./pages/Main/index";

import GlobalStyle from "./styles/global";

export function App() {
  return (
      <ApolloProvider client={client}>
        <Main />
        <GlobalStyle />
      </ApolloProvider>
  );
}
