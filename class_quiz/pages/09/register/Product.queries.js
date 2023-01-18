import { gql } from "@apollo/client";
export const CREATE_PRODUCT = gql`
    mutation createProduct(
        $seller: String
        $createProductInput: CreateProductInput!
    ) {
        createProduct(
            seller: $seller
            createProductInput: $createProductInput
        ) {
            _id
            number
            message
        }
    }
`;

export const UPDATE_PRODUCT = gql`
    mutation updateProduct(
        $updateProductInput: UpdateProductInput!
        $productId: ID
    ) {
        updateProduct(
            productId: $productId
            updateProductInput: $updateProductInput
        ) {
            number
            _id
            message
        }
    }
`;
