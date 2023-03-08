import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const CREATE_POINT_TRANSACTION_OF_BUYING = gql`
    mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
        createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
            _id
            name
        }
    }
`;
export const usePointBuying = (props: any) => {
    const router = useRouter();
    const [createPointTransactionOfBuyingAndSelling] = useMutation(
        CREATE_POINT_TRANSACTION_OF_BUYING
    );
    useEffect(() => {
        const script = document.createElement("script");
        const script2 = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        script2.src = "https://cdn.iamport.kr/v1/iamport.js";
        document.head.appendChild(script);
        document.head.appendChild(script2);
    }, []);

    const onPayment = (): void => {
        if (isNaN(props.fetchUseditem.price)) return;

        createPointTransactionOfBuyingAndSelling({
            variables: {
                useritemId: props.fetchUseditem._id,
            },
        });
        const onMove = () => {
            router.push("/products");
        };
        onMove();
    };

    return {
        onPayment,
    };
};
