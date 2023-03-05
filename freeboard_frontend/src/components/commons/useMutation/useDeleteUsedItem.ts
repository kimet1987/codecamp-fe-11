import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
    IMutation,
    IMutationDeleteUseditemArgs,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../useQuery/useFetchItems";

export const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId: ID!) {
        deleteUseditem(useditemId: $useditemId)
    }
`;
export const useMuDeleteItem = () => {
    const router = useRouter();

    const [deleteUseditem] = useMutation<
        Pick<IMutation, "deleteUseditem">,
        IMutationDeleteUseditemArgs
    >(DELETE_USED_ITEM);

    const onDel = (e: MouseEvent<HTMLButtonElement>) => {
        deleteUseditem({
            variables: { useditemId: `${router.query.product}` },
            refetchQueries: [{ query: FETCH_USED_ITEMS }],
        });
        router.push(`/products`);
        //onList(e);
    };
    const onList = (e: MouseEvent<HTMLButtonElement>) => {};

    return [onDel];
};
