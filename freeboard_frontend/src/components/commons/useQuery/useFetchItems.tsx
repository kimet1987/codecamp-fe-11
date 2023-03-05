import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
    query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
        fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
            _id
            name
            remarks
            contents
            price
            images
            tags
            pickedCount
            seller {
                name
            }
        }
    }
`;

export const useFetchItems = () => {
    const query = useQuery(FETCH_USED_ITEMS);
    return query;
};
