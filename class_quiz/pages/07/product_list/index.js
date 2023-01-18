import { gql, useQuery, useMutation } from "@apollo/client";

const FETCH_PRODUCTS = gql`
    query {
        fetchProducts {
            _id
            seller
            name
            price
        }
    }
`;

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId: ID) {
        deleteProduct(productId: $productId) {
            message
        }
    }
`;

export default function RegisterMovedPage() {
    const { data } = useQuery(FETCH_PRODUCTS);
    const [deleteProduct] = useMutation(DELETE_PRODUCT);

    const onDelete = (e) => {
        // console.log(e.target.id);
        deleteProduct({
            variables: { productId: e.target.id },
            refetchQueries: [{ query: FETCH_PRODUCTS }],
        });
    };
    //console.log(data?.fetchProducts);
    return (
        <>
            {data?.fetchProducts.map((el) => (
                <div key={el._id}>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: "10px" }}>{el.seller}</span>
                    <span style={{ margin: "10px" }}>{el.name}</span>
                    <span style={{ margin: "10px" }}>{el.price}</span>
                    <span>
                        <button id={el._id} onClick={onDelete}>
                            삭제
                        </button>
                    </span>
                </div>
            ))}
        </>
    );
}
