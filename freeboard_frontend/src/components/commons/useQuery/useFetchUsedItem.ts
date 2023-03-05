import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";

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
            images
            seller {
                name
            }
            pickedCount
            useditemAddress {
                lat
                lng
                address
                addressDetail
            }
        }
    }
`;

export const useQuFetchItem = (variables: IQueryFetchUseditemArgs) => {
    const result = useQuery(FETCH_USED_ITEM, {
        variables,
    });
    return result;
};
