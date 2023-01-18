import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./Product.queries";
import ProductPresenter from "./Product.presenter";

export default function ProductContainer(props) {
    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");
    const [isActive, setIsActive] = useState(false);

    const router = useRouter();

    const [createProduct] = useMutation(CREATE_PRODUCT);
    const [updateProduct] = useMutation(UPDATE_PRODUCT);

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
            router.push(`/09/${result?.data.createProduct._id}`);
        } catch (error) {
            alert("loading...");
        }
    };

    const onUpdate = async () => {
        const result = await updateProduct({
            variables: {
                productId: router.query.id,
                updateProductInput: {
                    name,
                    detail,
                    price: Number(price),
                },
            },
        });
        router.push(`/09/${result?.data.updateProduct._id}`);
        console.log(router.query);
    };

    const SellerChange = (e) => {
        setSeller(e.target.value);
        if (e.target.value && name && detail && price) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    const NameChange = (e) => {
        setName(e.target.value);
        if (seller && e.target.value && detail && price) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    const DetailChange = (e) => {
        setDetail(e.target.value);
        if (seller && name && e.target.value && price) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };
    const PriceChange = (e) => {
        setPrice(e.target.value);
        if (seller && name && detail && e.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    return (
        <ProductPresenter
            seller={SellerChange}
            name={NameChange}
            detail={DetailChange}
            price={PriceChange}
            register={register}
            isActive={isActive}
            isEdit={props.isEdit}
            onUpdate={onUpdate}
        />
    );
}
