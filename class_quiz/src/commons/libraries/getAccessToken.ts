import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
    mutation {
        restoreAccessToken {
            accessToken
        }
    }
`;

export const getAccessToken = async () => {
    try {
        const grapQlClient = new GraphQLClient(
            "https://backend-practice.codebootcamp.co.kr/graphql",
            { credentials: "include" }
        );
        const result = await grapQlClient.request(RESTORE_ACCESS_TOKEN);
        const newAccessToken = result.restoreAccessToken.accessToken;
        return newAccessToken;
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};
