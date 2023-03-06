import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
    mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
        createUseditem(createUseditemInput: $createUseditemInput) {
            _id
            name
            price
            contents
            remarks
            tags
            useditemAddress {
                lat
                lng
                address
                addressDetail
                zipcode
            }
        }
    }
`;

export const UPDATE_USED_ITME = gql`
    mutation updateUseditem(
        $updateUseditemInput: UpdateUseditemInput!
        $useditemId: ID!
    ) {
        updateUseditem(
            updateUseditemInput: $updateUseditemInput
            useditemId: $useditemId
        ) {
            _id
            name
            contents
            remarks
            tags
            price
            useditemAddress {
                lat
                lng
                address
                addressDetail
                zipcode
            }
        }
    }
`;
