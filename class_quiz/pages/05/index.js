import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
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

export default function ProductRegister() {
    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");

    const router = useRouter();

    const [createProduct] = useMutation(CREATE_PRODUCT);

    const register = async () => {
        try {
            const result = await createProduct({
                variables: {
                    seller,
                    createProductInput: {
                        name,
                        detail,
                        price: Number(price),
                    },
                },
            });
            console.log(result);
            router.push(`/05/${result?.data.createProduct._id}`);
        } catch (error) {
            alert("loading...");
        }
    };

    const SellerChange = (e) => {
        setSeller(e.target.value);
    };
    const NameChange = (e) => {
        setName(e.target.value);
    };
    const DetailChange = (e) => {
        setDetail(e.target.value);
    };
    const PriceChange = (e) => {
        setPrice(e.target.value);
    };

    return (
        <>
            <div>
                <label>판매자: </label>
                <input type="text" onChange={SellerChange} />
            </div>
            <div>
                <label>상품명: </label>
                <input type="text" onChange={NameChange} />
            </div>
            <div>
                <label>상품내용: </label>
                <input type="text" onChange={DetailChange} />
            </div>
            <div>
                <label>가격: </label>
                <input type="text" onChange={PriceChange} />
            </div>
            <button onClick={register}>상품등록</button>
        </>
    );
}
