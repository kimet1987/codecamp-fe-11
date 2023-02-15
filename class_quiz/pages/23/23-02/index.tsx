import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;
export default function LoginChk() {
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    return <div>{data?.fetchUserLoggedIn.name}님 로그인 완료!!</div>;
}
