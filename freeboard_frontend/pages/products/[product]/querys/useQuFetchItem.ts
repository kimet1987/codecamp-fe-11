import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
    query fetchUseditem($useditemId: ID!) {
        fetchUseditem(useditemId: $useditemId) {
            _id
            name
            remarks
            contents
            price
            tags
            createdAt
            seller {
                name
            }
            pickedCount
        }
    }
`;

export const useQuFetchItem = (variables: IQueryFetchUseditemArgs) => {
    const result = useQuery<
        Pick<IQuery, "fetchUseditem">,
        IQueryFetchUseditemArgs
    >(FETCH_USED_ITEM, {
        variables,
    });
    console.log(variables);
    return result;
};
