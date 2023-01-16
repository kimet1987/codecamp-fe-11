import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_PRODUCT } from "./Prod.queries";
import ProdPresenter from "./Prod.presenter";

export default function ProdContainer() {
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
            router.push(`/06/${result?.data.createProduct._id}`);
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
        <ProdPresenter
            seller={SellerChange}
            name={NameChange}
            detail={DetailChange}
            price={PriceChange}
            register={register}
        />
    );
}
