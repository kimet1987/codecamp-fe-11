import { gql, useMutation } from "@apollo/client";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
    mutation createPointTransactionOfLoading($impUid: ID!) {
        createPointTransactionOfLoading(impUid: $impUid) {
            _id
            amount
        }
    }
`;

export const useCreatePointLoading = () => {
    const [createPointTransactionOfLoading] = useMutation(
        CREATE_POINT_TRANSACTION_OF_LOADING
    );
};
