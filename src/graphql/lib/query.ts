import { gql } from "@apollo/client";
import client from "../client";

const GET_MEDIA_ITEMS = gql`
  query GetMediaItems($searchTerm: String!, $limit: Int!) {
    mediaItems(where: { search: $searchTerm }, first: $limit) {
      edges {
        node {
          id
          title
          sourceUrl
          altText
        }
      }
    }
  }
`;

export const fetchMediaByExactTitle = async (title, limit = 10) => {
  const { data } = await client.query({
    query: GET_MEDIA_ITEMS,
    variables: { searchTerm: title, limit },
  });

  // Filter for exact title match
  const exactMatch = data.mediaItems.edges.filter(
    (item) => item.node.title.toLowerCase() === title.toLowerCase()
  );

  return exactMatch.length > 0 ? exactMatch[0].node : null;
};
