import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import Config from "../config";
import { Commercetools } from "../";
import { LocalStorage } from "../../../utils";

const authLink = setContext(async (_request, _previousContext) => {
  let tokenInfo = LocalStorage.get("ct/token-info");

  if (tokenInfo) {
    const now = new Date();

    const shouldRefresh =
      tokenInfo?.expires_at < now.getTime() && !!tokenInfo?.refresh_token;

    if (shouldRefresh) {
      try {
        tokenInfo = await Commercetools.refreshTokenInfo(tokenInfo);
      } catch (err) {
        console.warn("[authLink]: Failed to refresh the expired token", err);
        tokenInfo = await Commercetools.generateAnonymousTokenInfo();
      }
    }
  } else {
    tokenInfo = await Commercetools.generateAnonymousTokenInfo();
  }

  LocalStorage.set("ct/token-info", tokenInfo);

  return {
    headers: {
      authorization: tokenInfo.token_type + " " + tokenInfo.access_token,
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((graphQLError) => {
      console.error("[errorLink]:", graphQLError);

      if (graphQLError?.message === "invalid_token") {
        LocalStorage.remove("ct/token-info");
        window.location.reload();
      }
    });
  }
});

const httpLink = new HttpLink({
  uri: `${Config.api}/${Config.auth.projectKey}/graphql`,
});

const apolloClient = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache({}),
  connectToDevTools: process.env.NODE_ENV === "development",
  ssrMode: typeof window === "undefined",
});

export { apolloClient };
