import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            _id
            createdAt
            title
            writer
        }
    }
`;
