import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
    query fetchUserLoggedIn {
        fetchUserLoggedIn {
            _id
            email
            name
        }
    }
`;

export const useFetchUserLoggedIn = () => {
    const result = useQuery(FETCH_USER_LOGGED_IN);
    return result;
};
