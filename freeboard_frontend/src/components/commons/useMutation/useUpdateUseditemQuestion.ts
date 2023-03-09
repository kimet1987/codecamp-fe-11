import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../../pages/products/[product]/comments/list";
import { IUpdateUseditemQuestionInput } from "../../../commons/types/generated/types";

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

export const useUpdateUseditemQuestion = (props: any) => {
    const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
    const router = useRouter();

    const onUpdate = async (
        e: MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        console.log(props.question);
        try {
            const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {
                contents: props.question,
            };

            await updateUseditemQuestion({
                variables: {
                    useditemQuestionId: e.currentTarget.id,
                    updateUseditemQuestionInput,
                },
                refetchQueries: [
                    {
                        query: FETCH_USED_ITEM_QUESTIONS,
                        variables: { useditemId: router.query.product },
                    },
                ],
            });
            props.setIsEdit?.(false);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return { onUpdate };
};
