import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
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

export default function QuizGraphql() {
    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");

    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onGraph = () => {
        const result = createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: Number(price),
                },
            },
        });
        console.log(result);
    };

    const onSeller = (e) => {
        setSeller(e.target.value);
    };
    const onName = (e) => {
        setName(e.target.value);
    };
    const onDetail = (e) => {
        setDetail(e.target.value);
    };
    const onPrice = (e) => {
        setPrice(e.target.value);
    };

    return (
        <>
            <div>
                <label>판매자 : </label>
                <input type="text" onChange={onSeller} />
            </div>
            <div>
                <label>상품이름 : </label>
                <input type="text" onChange={onName} />
            </div>
            <div>
                <label>상세내용 : </label>
                <input type="text" onChange={onDetail} />
            </div>
            <div>
                <label>가격 : </label>
                <input type="text" onChange={onPrice} />
            </div>
            <button onClick={onGraph}>GRAPHQL-API 요청하기</button>
        </>
    );
}
