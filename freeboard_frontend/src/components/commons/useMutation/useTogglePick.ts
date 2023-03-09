import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_USED_ITEM } from "../useQuery/useFetchUsedItem";

const TOGGLE_USED_ITEM_PICK = gql`
    mutation toggleUseditemPick($useditemId: ID!) {
        toggleUseditemPick(useditemId: $useditemId)
    }
`;
export const useTogglePick = () => {
    const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
    const [toggle, setToggle] = useState(false);

    const onToggle = (e: any) => {
        setToggle((prev) => !prev);

        toggleUseditemPick({
            variables: {
                useditemId: e.currentTarget.id,
            },
            refetchQueries: [
                {
                    query: FETCH_USED_ITEM,
                    variables: { useditemId: e.currentTarget.id },
                },
            ],
        });
        console.log(e.currentTarget.id);
    };

    return { onToggle };
};
