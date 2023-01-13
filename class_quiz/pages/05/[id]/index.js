import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            seller
            name
            detail
            price
        }
    }
`;

export default function RegisterMovedPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {
            productId: router.query.id,
        },
    });
    return (
        <>
            <div>작성자 : {data && data.fetchProduct?.seller}</div>
            <div>제목 : {data?.fetchProduct?.name}</div>
            <div>내용 : {data?.fetchProduct?.detail}</div>
            <div>내용 : {data ? data.fetchProduct.price : "loading..."}</div>
        </>
    );
}
