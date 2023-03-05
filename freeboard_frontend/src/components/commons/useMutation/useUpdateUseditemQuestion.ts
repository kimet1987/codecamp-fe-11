import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../../pages/products/[product]/comments/list";

const UPDATE_USED_ITEM_QUESTION = gql`
    mutation updateUseditemQuestion(
        $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
        $useditemQuestionId: ID!
    ) {
        updateUseditemQuestion(
            updateUseditemQuestionInput: $updateUseditemQuestionInput
            useditemQuestionId: $useditemQuestionId
        ) {
            _id
            contents
            user {
                name
                _id
            }
        }
    }
`;

export const useUpdateUseditemQuestion = (
    setIsEdit?: Dispatch<SetStateAction<boolean>>
) => {
    const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
    const router = useRouter();

    const onUpdate = async (
        e: MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        try {
            await updateUseditemQuestion({
                variables: {
                    useditemQuestionId: e.currentTarget.id,
                    updateUseditemQuestionInput: {},
                },
                refetchQueries: [
                    {
                        query: FETCH_USED_ITEM_QUESTIONS,
                        variables: { useditemId: router.query.product },
                    },
                ],
            });
            setIsEdit?.(false);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return { onUpdate, setIsEdit };
};
