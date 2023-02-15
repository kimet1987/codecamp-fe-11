import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../../src/components/hoc/withAuth";

const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;
function LoginChk() {
    const { data } = useQuery(FETCH_USER_LOGGED_IN);
    return <div>{data?.fetchUserLoggedIn.name}님 로그인 완료!!</div>;
}

export default withAuth(LoginChk);
