import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION = gql`
    mutation createUseditemQuestion(
        $createUseditemQuestionInput: CreateUseditemQuestionInput!
        $useditemId: ID!
    ) {
        createUseditemQuestion(
            createUseditemQuestionInput: $createUseditemQuestionInput
            useditemId: $useditemId
        ) {
            _id
            contents
            createdAt
            user {
                _id
                name
            }
        }
    }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
    mutation updateUseditemQuestion(
        $updateUseditemQuestionInput: updateUseditemQuestionInput
        $useditemQuestionId: ID!
    ) {
        updateUseditemQuestion(
            updateUseditemQuestionInput: $updateUseditemQuestionInput
            useditemQuestionId: $useditemQuestionId
        ) {
            _id
            contents
            user {
                _id
                name
            }
        }
    }
`;
