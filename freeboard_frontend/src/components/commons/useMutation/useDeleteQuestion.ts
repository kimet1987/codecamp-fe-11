import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../../pages/products/[product]/comments/list";

export const DELETE_USED_ITEM_QUESTION = gql`
    mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
        deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
    }
`;

export const useDeleteQuestion = () => {
    const router = useRouter();
    const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

    const onDel = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
        try {
            await deleteUseditemQuestion({
                variables: {
                    useditemQuestionId: e.currentTarget.id,
                },
                refetchQueries: [
                    {
                        query: FETCH_USED_ITEM_QUESTIONS,
                        variables: { useditemId: router.query.product },
                    },
                ],
            });
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };
    return {
        onDel,
    };
};
