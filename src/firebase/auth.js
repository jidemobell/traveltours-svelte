// src/lib/auth.js
import { default as pkg } from "@apollo/client";
const { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, gql } =
  pkg;

export const client = new ApolloClient({
  uri: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export const GET_USER_QUERY = gql`
  query getUsers($email: String!) {
    profiles(where: { email: { _eq: $email } }) {
      id
      name
      created_at
      email
    }
  }
`;

export const REGITER_USER_QUERY = gql`
  mutation ($email: String) {
    insert_profiles(
      objects: [{ email: $email, last_seen: "now()" }]
      on_conflict: {
        constraint: profiles_pkey
        update_columns: [last_seen, email]
      }
    ) {
      affected_rows
    }
  }
`;
