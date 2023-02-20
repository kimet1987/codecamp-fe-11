import { gql, useMutation } from "@apollo/client";
import {
    IMutation,
    IMutationDeleteUseditemArgs,
} from "../../../../src/commons/types/generated/types";

export const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($productId: ID!) {
        deleteUseditem(productId: $productId)
    }
`;
export const useMuDeleteItem = () => {
    const result = useMutation<
        Pick<IMutation, "deleteUseditem">,
        IMutationDeleteUseditemArgs
    >(DELETE_USED_ITEM);

    return result;
};
