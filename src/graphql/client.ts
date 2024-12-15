import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://icanpr.vn/graphql", // Replace with your WordPress GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
