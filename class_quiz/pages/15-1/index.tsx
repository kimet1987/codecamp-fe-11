import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";

const FETCH_PRODUCTS = gql`
    query fetchProducts($page: Int) {
        fetchProducts(page: $page) {
            _id
            seller
            name
            price
        }
    }
`;

const FETCH_PRODUCTS_COUNT = gql`
    query {
        fetchProductsCount
    }
`;

export default function RegisterMovedPage() {
    const { data, refetch } = useQuery(FETCH_PRODUCTS);
    const { data: dataBoardsCount } = useQuery(FETCH_PRODUCTS_COUNT);
    const [startPage, setStartPage] = useState(1);
    const [color, setColor] = useState(0);
    const [isActive, setIsActive] = useState(false);

    let arr = new Array(10).fill("page_num");

    const lastPage = Math.ceil(
        (dataBoardsCount?.fetchProductsCount ?? 10) / 10
    );
    const rest = Math.ceil((dataBoardsCount?.fetchProductsCount ?? 10) % 10);

    const onPage = (e: MouseEvent<HTMLButtonElement>) => {
        const pageNum = Number(e.currentTarget.id);
        setColor(pageNum);
        void refetch({ page: Number(e.currentTarget.id) });
    };

    const onPrev = (): void => {
        if (startPage === 1) return;
        setStartPage(startPage - 10);
        void refetch({ page: startPage - 10 });
        if (lastPage === startPage + 10 + rest) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onNext = (): void => {
        if (startPage === lastPage - 10) {
            setIsActive(true);
        }

        if (lastPage === startPage + 10 + rest) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }

        if (startPage + 10 <= lastPage) {
            setStartPage(startPage + 10);
            void refetch({ page: startPage + 10 });
        }
    };
    return (
        <>
            {data?.fetchProducts.map((el: any) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>{el.seller}</span>
                    <span style={{ margin: "10px" }}>{el.name}</span>
                    <span style={{ margin: "10px" }}>{el.price}</span>
                </div>
            ))}
            <button onClick={onPrev}>&lt;</button>
            {arr.map(
                (el, index) =>
                    index + startPage <= lastPage && (
                        <button
                            key={index + startPage}
                            id={String(index + startPage)}
                            onClick={onPage}
                            style={{
                                backgroundColor:
                                    index + startPage === color ? "tomato" : "",
                            }}
                        >
                            {index + startPage}
                        </button>
                    )
            )}
            <button
                onClick={onNext}
                disabled={isActive}
                style={{
                    display: isActive ? "none" : "inline-block",
                }}
            >
                &gt;
            </button>
        </>
    );
}
